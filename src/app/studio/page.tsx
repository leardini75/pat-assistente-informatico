import { STUDY_TOPICS } from "@/lib/topics";
import { SUBJECT_LABEL } from "@/lib/exam";
import { Badge } from "@/components/ui/badge";

export default function StudioPage() {
  const tecnico = STUDY_TOPICS.filter((t) => t.subject === "tecnico");
  const istituzionale = STUDY_TOPICS.filter((t) => t.subject === "istituzionale");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">Schede di studio</h1>
        <p className="mt-2 text-muted-foreground">
          Sintesi operative sul programma del bando 2026. Usa le schede prima dei quiz e come
          scaletta per le risposte sintetiche e l&apos;orale.
        </p>
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
      <div className="mt-4 space-y-4">
        {topics.map((t) => (
          <article
            key={t.id}
            className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm sm:p-6"
          >
            <div className="mb-2">
              <Badge variant="secondary">{SUBJECT_LABEL[t.subject]}</Badge>
            </div>
            <h3 className="font-heading text-xl font-semibold text-ink">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-ink">
              <span className="font-semibold">Da ricordare: </span>
              {t.remember}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
