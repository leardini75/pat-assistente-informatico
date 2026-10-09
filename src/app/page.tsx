import type { ReactNode } from "react";
import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { ProgressPanel } from "@/components/progress-panel";
import { EXAM } from "@/lib/exam";
import { QUIZ_BANK } from "@/lib/quiz-bank";
import { SHORT_PROMPTS } from "@/lib/sintetiche";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, ClipboardCheck, Download, PenLine, Timer } from "lucide-react";

export default function HomePage() {
  return (
    <div className="grain relative overflow-hidden">
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <div className="max-w-3xl animate-rise">
          <p className="font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            {EXAM.brand.split(" ")[0]}{" "}
            <span className="text-primary">{EXAM.brand.split(" ")[1]}</span>
          </p>
          <div className="hero-underline mt-3 h-1 w-28 rounded-full bg-primary" />
          <h1 className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
            Studio ed esercitazione per il concorso{" "}
            <span className="font-medium text-ink">{EXAM.title}</span> — {EXAM.subtitle}.{" "}
            {EXAM.ente}, {EXAM.posti} posti.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Prova scritta e orale (soglia {EXAM.provaUnica.passScore}/30). Materiale costruito sul
            bando 2026 e sulle prove pubbliche del Funzionario informatico PAT 2025.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 animate-rise-delay">
            <Link
              href="/simulazione"
              className={cn(buttonVariants({ size: "lg" }), "gap-1.5")}
            >
              Simula la prova
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/quiz"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Esercita i quiz
            </Link>
            <a
              href="/pat-assistente-informatico.zip"
              download="pat-assistente-informatico.zip"
              className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "gap-1.5")}
            >
              <Download className="size-4" />
              Scarica ZIP
            </a>
          </div>
        </div>

        <div className="mt-12 max-w-xl animate-rise-delay-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Al diario delle prove · {EXAM.diarioLabel}
          </p>
          <Countdown />
          <p className="mt-3 text-xs text-muted-foreground">{EXAM.diarioNote}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Domande di partecipazione entro il {EXAM.domandaDeadline}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-6">
          <ProgressPanel />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PathCard
            href="/studio"
            icon={<BookOpen className="size-5" />}
            title="Schede studio"
            body="CAD, eIDAS, cloud, SQL, reti, virtualizzazione e materie orali PAT."
          />
          <PathCard
            href="/quiz"
            icon={<ClipboardCheck className="size-5" />}
            title={`${QUIZ_BANK.length} quiz`}
            body="Banca domande a 4 opzioni, con spiegazione dopo ogni risposta."
          />
          <PathCard
            href="/sintetiche"
            icon={<PenLine className="size-5" />}
            title={`${SHORT_PROMPTS.length} sintetiche`}
            body="Tracce da 1800 battute ispirate alle domande orali PAT 2025."
          />
          <PathCard
            href="/simulazione"
            icon={<Timer className="size-5" />}
            title={`Simulazione ${EXAM.provaUnica.durationMinutes}′`}
            body={`${EXAM.provaUnica.quizCount} quiz + ${EXAM.provaUnica.shortCount} sintetiche, soglia ${EXAM.provaUnica.passScore}/30.`}
          />
        </div>

        <div className="mt-10 rounded-xl border border-border/70 bg-card/60 p-5 sm:p-6">
          <h2 className="font-heading text-xl font-semibold text-ink">Materie del concorso</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-primary">
                {EXAM.subjects.tecnico.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {EXAM.subjects.tecnico.focus}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">
                {EXAM.subjects.istituzionale.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {EXAM.subjects.istituzionale.focus}
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{EXAM.scoringNote}</p>
          <p className="mt-2 text-xs text-muted-foreground">{EXAM.sourcesNote}</p>
        </div>
      </section>
    </div>
  );
}

function PathCard({
  href,
  icon,
  title,
  body,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border/70 bg-card/70 p-5 transition hover:border-primary/40 hover:bg-card"
    >
      <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h2 className="font-heading text-lg font-semibold text-ink">{title}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </Link>
  );
}
