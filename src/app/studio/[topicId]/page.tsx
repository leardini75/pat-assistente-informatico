import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicById, STUDY_TOPICS } from "@/lib/studio";
import { SUBJECT_LABEL } from "@/lib/exam";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, Download } from "lucide-react";

export function generateStaticParams() {
  return STUDY_TOPICS.map((t) => ({ topicId: t.id }));
}

export default async function StudioTopicPage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = await params;
  const topic = getTopicById(topicId);
  if (!topic) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/studio"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Tutte le schede
      </Link>

      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{SUBJECT_LABEL[topic.subject]}</Badge>
          <span className="text-xs text-muted-foreground">
            {topic.points.length} punti
          </span>
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
          {topic.title}
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">{topic.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={topic.pdfHref}
            download
            className={cn(buttonVariants(), "gap-1.5")}
          >
            <Download className="size-4" />
            Scarica PDF di questo argomento
          </a>
        </div>
      </header>

      <nav className="mt-8 rounded-xl border border-border/80 bg-card/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Indice dei punti
        </p>
        <ol className="mt-2 space-y-1.5 text-sm">
          {topic.points.map((p, i) => (
            <li key={p.id}>
              <a
                href={`#${p.id}`}
                className="text-ink underline-offset-2 hover:underline"
              >
                {i + 1}. {p.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-8 space-y-8">
        {topic.points.map((p, i) => (
          <article
            key={p.id}
            id={p.id}
            className="scroll-mt-20 rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Punto {i + 1}
            </p>
            <h2 className="mt-1 font-heading text-xl font-semibold text-ink sm:text-2xl">
              {p.title}
            </h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/90">
              {p.lead}
            </p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {p.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>

            {p.terms && p.terms.length > 0 ? (
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-ink">Glossario</h3>
                <dl className="mt-2 space-y-2">
                  {p.terms.map((t) => (
                    <div
                      key={t.term}
                      className="rounded-lg border border-border/60 bg-muted/40 px-3 py-2"
                    >
                      <dt className="text-sm font-semibold text-ink">{t.term}</dt>
                      <dd className="mt-0.5 text-sm text-muted-foreground">{t.def}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            <p className="mt-5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-ink">
              <span className="font-semibold">In prova: </span>
              {p.examTip}
            </p>

            {p.refs && p.refs.length > 0 ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Riferimenti: {p.refs.join(" · ")}
              </p>
            ) : null}
          </article>
        ))}
      </div>

      <aside className="mt-10 rounded-xl border border-ember/30 bg-ember/5 p-5">
        <h2 className="font-heading text-lg font-semibold text-ink">Da ricordare</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {topic.remember}
        </p>
      </aside>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/studio" className={cn(buttonVariants({ variant: "outline" }))}>
          Torna all&apos;indice
        </Link>
        <Link href="/quiz" className={cn(buttonVariants())}>
          Esercita i quiz
        </Link>
      </div>
    </div>
  );
}
