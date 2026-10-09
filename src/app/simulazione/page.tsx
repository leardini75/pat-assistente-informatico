import { ExamSimulation } from "@/components/exam-simulation";
import { EXAM } from "@/lib/exam";

export default function SimulazionePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">Simulazione</h1>
        <p className="mt-2 text-muted-foreground">
          Formato didattico della prova scritta: timer {EXAM.provaUnica.durationMinutes} minuti,{" "}
          {EXAM.provaUnica.quizCount} quiz e {EXAM.provaUnica.shortCount} sintetiche, soglia{" "}
          {EXAM.provaUnica.passScore}/30.
        </p>
      </header>
      <ExamSimulation />
    </div>
  );
}
