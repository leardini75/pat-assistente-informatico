import Link from "next/link";
import { STUDY_TOPICS } from "@/lib/studio";
import { SUBJECT_LABEL } from "@/lib/exam";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpen, Download, FileText } from "lucide-react";

export default function StudioPage() {
  const tecnico = STUDY_TOPICS.filter((t) => t.subject === "tecnico");
  const istituzionale = STUDY_TOPICS.filter((t) => t.subject === "istituzionale");
  const totalPoints = STUDY_TOPICS.reduce((n, t) => n + t.points.length, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Schede di studio
        </h1>
        <p className="mt-2 text-muted-foreground">
          {STUDY_TOPICS.length} argomenti · {totalPoints} punti con materiale completo.
          Apri ogni scheda per studiare punto per punto e scaricare il PDF dedicato.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="/studio-pdfs/dispense-complete.pdf"
            className={cn(buttonVariants({ variant: "default" }), "gap-1.5")}
            download
          >
            <Download className="size-4" />
            PDF dispense complete
          </a>
        </div>
      </header>

      <Section title="Materie tecnico-informatiche (scritta + orale)" topics={tecnico} />
      <Section title="Materie istituzionali (orale)" topics={istituzionale} />
    </div>
  );
}

function Section({
  title,
  topics,
}: {
  title: string;
  topics: typeof STUDY_TOPICS;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-2xl font-semibold text-ink">{title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {topics.map((t) => (
          <article
            key={t.id}
            className="flex flex-col rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{SUBJECT_LABEL[t.subject]}</Badge>
              <span className="text-xs text-muted-foreground">
                {t.points.length} punti di studio
              </span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-ink">{t.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {t.summary}
            </p>
            <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
              {t.points.slice(0, 3).map((p) => (
                <li key={p.id} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                  <span>{p.title}</span>
                </li>
              ))}
              {t.points.length > 3 ? (
                <li className="pl-3 text-muted-foreground/80">
                  + altri {t.points.length - 3} punti…
                </li>
              ) : null}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`/studio/${t.id}`}
                className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
              >
                <BookOpen className="size-3.5" />
                Apri scheda
              </Link>
              <a
                href={t.pdfHref}
                download
                className={cn(
                  buttonVariants({ size: "sm", variant: "outline" }),
                  "gap-1.5"
                )}
              >
                <FileText className="size-3.5" />
                PDF
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
