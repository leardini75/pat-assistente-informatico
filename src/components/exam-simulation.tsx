"use client";

import { useEffect, useMemo, useState } from "react";
import { EXAM, SUBJECT_LABEL } from "@/lib/exam";
import { pickSimulationQuestions, type QuizQuestion } from "@/lib/quiz-bank";
import { getShortBySubject, type ShortPrompt } from "@/lib/sintetiche";
import { shuffle } from "@/lib/quiz-bank";
import { recordSimulation } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Phase = "intro" | "running" | "review";

type ShortSlot = {
  prompt: ShortPrompt;
  text: string;
  selfScore: number | null;
};

const letters = ["A", "B", "C", "D"] as const;

function formatTime(totalSec: number) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function ExamSimulation() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [shorts, setShorts] = useState<ShortSlot[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(EXAM.provaUnica.durationMinutes * 60);
  const [activeTab, setActiveTab] = useState<"quiz" | "sintetiche">("quiz");
  const [quizIndex, setQuizIndex] = useState(0);
  const [shortIndex, setShortIndex] = useState(0);

  function start() {
    const picked = pickSimulationQuestions();
    const tecnicoShort = shuffle(getShortBySubject("tecnico")).slice(0, 4);
    setQuiz(picked.quiz);
    setAnswers(Array(picked.quiz.length).fill(null));
    setShorts(
      tecnicoShort.map((prompt) => ({
        prompt,
        text: "",
        selfScore: null,
      }))
    );
    setSecondsLeft(EXAM.provaUnica.durationMinutes * 60);
    setQuizIndex(0);
    setShortIndex(0);
    setActiveTab("quiz");
    setPhase("running");
  }

  useEffect(() => {
    if (phase !== "running") return;
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          setPhase("review");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  const quizScore = useMemo(() => {
    return quiz.reduce((acc, q, i) => {
      return acc + (answers[i] === q.correct ? 1 : 0);
    }, 0);
  }, [quiz, answers]);

  const shortScore = useMemo(() => {
    return shorts.reduce((acc, s) => acc + (s.selfScore ?? 0), 0);
  }, [shorts]);

  const totalScore = quizScore + shortScore;
  const answeredQuiz = answers.filter((a) => a != null).length;
  const timedOut = secondsLeft <= 0 && phase === "review";

  function submitFinal() {
    recordSimulation(totalScore);
    setPhase("review");
  }

  if (phase === "intro") {
    return (
      <div className="rounded-xl border border-border/80 bg-card/80 p-6 shadow-sm">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          Simulazione prova scritta
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>
            {EXAM.provaUnica.quizCount} quiz tecnico-informatici — 1 punto ciascuno
          </li>
          <li>
            {EXAM.provaUnica.shortCount} risposte sintetiche (max{" "}
            {EXAM.provaUnica.shortMaxChars} battute) — autovalutazione fino a{" "}
            {EXAM.provaUnica.shortMaxPointsEach} punti
          </li>
          <li>
            Tempo: {EXAM.provaUnica.durationMinutes} minuti · Soglia:{" "}
            {EXAM.provaUnica.passScore}/30
          </li>
          <li>
            Formato didattico ispirato al bando (quesiti multipli + sintetiche) e alle prove
            PAT 2025
          </li>
        </ul>
        <Button className="mt-6" size="lg" onClick={start}>
          Inizia la simulazione
        </Button>
      </div>
    );
  }

  if (phase === "review") {
    const passed = totalScore >= EXAM.provaUnica.passScore;
    return (
      <div className="space-y-5">
        <div className="rounded-xl border border-border/80 bg-card/80 p-6 shadow-sm">
          <Badge variant={passed ? "default" : "secondary"}>
            {passed ? "Soglia orale raggiunta" : "Sotto soglia 18/30"}
          </Badge>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink">
            {totalScore}/{EXAM.provaUnica.maxScore}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Quiz: {quizScore}/{EXAM.provaUnica.quizCount} · Sintetiche (autovalutazione):{" "}
            {shortScore}/{EXAM.provaUnica.shortCount * EXAM.provaUnica.shortMaxPointsEach}
            {timedOut ? " · Tempo scaduto" : ""}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Il punteggio delle sintetiche è un&apos;autovalutazione: in sede d&apos;esame valuta la
            Commissione.
          </p>
          <Button className="mt-6" onClick={start}>
            Nuova simulazione
          </Button>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold">Correzione quiz</h3>
          {quiz.map((q, i) => {
            const ok = answers[i] === q.correct;
            return (
              <div
                key={q.id}
                className={cn(
                  "rounded-lg border p-4 text-sm",
                  ok ? "border-teal/40 bg-teal/5" : "border-destructive/30 bg-destructive/5"
                )}
              >
                <p className="font-medium text-ink">
                  {i + 1}. {q.stem}
                </p>
                <p className="mt-1 text-muted-foreground">
                  Tua: {answers[i] != null ? letters[answers[i]!] + ") " + q.options[answers[i]!] : "—"}
                </p>
                {!ok ? (
                  <p className="mt-1 text-teal">
                    Corretta: {letters[q.correct]}) {q.options[q.correct]}
                  </p>
                ) : null}
                <p className="mt-2 text-xs text-muted-foreground">{q.explanation}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // running
  const q = quiz[quizIndex];
  const short = shorts[shortIndex];
  const urgency = secondsLeft < 10 * 60;

  return (
    <div className="space-y-4">
      <div className="sticky top-14 z-30 -mx-4 flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-[color-mix(in_srgb,var(--background)_92%,transparent)] px-4 py-3 backdrop-blur-md sm:mx-0 sm:rounded-xl sm:border sm:px-4">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "font-mono text-xl font-semibold tabular-nums",
              urgency ? "animate-pulse-soft text-ember" : "text-ink"
            )}
          >
            {formatTime(secondsLeft)}
          </span>
          <span className="text-xs text-muted-foreground">
            Quiz {answeredQuiz}/{quiz.length}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={activeTab === "quiz" ? "default" : "outline"}
            onClick={() => setActiveTab("quiz")}
          >
            Quiz
          </Button>
          <Button
            size="sm"
            variant={activeTab === "sintetiche" ? "default" : "outline"}
            onClick={() => setActiveTab("sintetiche")}
          >
            Sintetiche
          </Button>
          <Button size="sm" variant="secondary" onClick={submitFinal}>
            Consegna
          </Button>
        </div>
      </div>

      <Progress
        value={((EXAM.provaUnica.durationMinutes * 60 - secondsLeft) /
          (EXAM.provaUnica.durationMinutes * 60)) *
          100}
        className="h-1"
      />

      {activeTab === "quiz" && q ? (
        <article className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm sm:p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge variant="secondary">Quiz {quizIndex + 1}/{quiz.length}</Badge>
            <Badge variant="outline">{SUBJECT_LABEL[q.subject]}</Badge>
          </div>
          <h2 className="font-heading text-xl font-semibold leading-snug text-ink">{q.stem}</h2>
          <ul className="mt-4 space-y-2">
            {q.options.map((opt, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() =>
                    setAnswers((prev) => {
                      const next = [...prev];
                      next[quizIndex] = i;
                      return next;
                    })
                  }
                  className={cn(
                    "flex w-full items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm",
                    answers[quizIndex] === i
                      ? "border-primary bg-primary/10"
                      : "border-border hover:bg-muted/50"
                  )}
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-muted font-mono text-xs font-semibold">
                    {letters[i]}
                  </span>
                  <span className="pt-0.5">{opt}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant="outline"
              disabled={quizIndex === 0}
              onClick={() => setQuizIndex((i) => i - 1)}
            >
              Indietro
            </Button>
            <Button
              variant="outline"
              disabled={quizIndex >= quiz.length - 1}
              onClick={() => setQuizIndex((i) => i + 1)}
            >
              Avanti
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-1">
            {quiz.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setQuizIndex(i)}
                className={cn(
                  "size-8 rounded-md text-xs font-medium",
                  i === quizIndex && "ring-2 ring-primary",
                  answers[i] != null ? "bg-primary/20 text-ink" : "bg-muted text-muted-foreground"
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </article>
      ) : null}

      {activeTab === "sintetiche" && short ? (
        <article className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm sm:p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge variant="secondary">
              Sintetica {shortIndex + 1}/{shorts.length}
            </Badge>
            <Badge variant="outline">{SUBJECT_LABEL[short.prompt.subject]}</Badge>
          </div>
          <h2 className="font-heading text-xl font-semibold text-ink">{short.prompt.title}</h2>
          <p className="mt-2 text-sm leading-relaxed">{short.prompt.prompt}</p>
          <textarea
            value={short.text}
            onChange={(e) => {
              const value = e.target.value;
              setShorts((prev) => {
                const next = [...prev];
                next[shortIndex] = { ...next[shortIndex], text: value };
                return next;
              });
            }}
            rows={12}
            className={cn(
              "mt-4 w-full resize-y rounded-lg border bg-background px-3 py-3 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/40",
              short.text.length > EXAM.provaUnica.shortMaxChars
                ? "border-destructive"
                : "border-border"
            )}
            placeholder="Scrivi la risposta sintetica…"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>Max {EXAM.provaUnica.shortMaxChars} battute</span>
            <span>
              {short.text.length}/{EXAM.provaUnica.shortMaxChars}
            </span>
          </div>

          <div className="mt-4 rounded-lg border border-dashed border-border p-3">
            <p className="text-xs text-muted-foreground">
              Autovalutazione (max {EXAM.provaUnica.shortMaxPointsEach}). Durante la simulazione
              puoi assegnarla subito per stimare il totale.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[0, 1, 2, 3].map((n) => (
                <Button
                  key={n}
                  size="sm"
                  variant={short.selfScore === n ? "default" : "outline"}
                  onClick={() =>
                    setShorts((prev) => {
                      const next = [...prev];
                      next[shortIndex] = { ...next[shortIndex], selfScore: n };
                      return next;
                    })
                  }
                >
                  {n}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant="outline"
              disabled={shortIndex === 0}
              onClick={() => setShortIndex((i) => i - 1)}
            >
              Indietro
            </Button>
            <Button
              variant="outline"
              disabled={shortIndex >= shorts.length - 1}
              onClick={() => setShortIndex((i) => i + 1)}
            >
              Avanti
            </Button>
          </div>
        </article>
      ) : null}
    </div>
  );
}
