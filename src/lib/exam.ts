/** Metadati del concorso Assistente informatico/statistico – indirizzo informatico (PAT 2026) */

export const EXAM = {
  title: "Assistente informatico/statistico",
  subtitle: "Indirizzo informatico · Area istruttori · Livello base",
  ente: "Provincia autonoma di Trento",
  posti: 3,
  brand: "PAT Info",
  domandaDeadline: "23 ottobre 2026 ore 23:59",
  diarioIso: "2026-12-21T12:00:00+01:00",
  diarioLabel: "21 dicembre 2026",
  diarioNote:
    "In quella data saranno pubblicati data, sede e orario della prova scritta (preavviso ≥ 20 giorni).",
  /** Formato didattico della prova scritta (quesiti multipli + sintetiche) */
  provaUnica: {
    dateLabel: "diario ufficiale 21 dicembre 2026",
    timeLabel: "data prova da pubblicare",
    venue: "Sede e orario saranno indicati sul sito della Provincia",
    iso: "2026-12-21T12:00:00+01:00",
    durationMinutes: 120,
    passScore: 18,
    maxScore: 30,
    quizCount: 18,
    quizTecnico: 18,
    quizIstituzionale: 0,
    quizAdmin: 18,
    quizCommercial: 0,
    quizPointsEach: 1,
    shortCount: 4,
    shortTecnico: 4,
    shortIstituzionale: 0,
    shortMaxPointsEach: 3,
    shortMaxChars: 1800,
  },
  subjects: {
    tecnico: {
      label: "Materie tecnico-informatiche",
      focus:
        "CAD, documento digitale, riuso software AgID, eIDAS 2.0, cloud, interoperabilità, SQL, reti/OSI, virtualizzazione",
    },
    istituzionale: {
      label: "Materie istituzionali (orale)",
      focus:
        "Statuto PAT (L.P. 2 e 3/2003), Piano anticorruzione/trasparenza (PIAO), codice di comportamento, CCPL e disciplinare",
    },
  },
  scoringNote:
    "Il bando prevede quesiti a risposta sintetica o multipla, con soglia 18/30 per scritta e orale. La simulazione didattica usa 18 quiz (1 punto) + 4 risposte sintetiche (max 3 punti), totale 30.",
  officialUrl:
    "https://www.provincia.tn.it/Amministrazione/Lavora-con-noi/Concorso-Assistente-informatico-statistico-ind.-informatico",
  sourcesNote:
    "Contenuti basati sul bando 2026 e sulle prove pubbliche del concorso Funzionario informatico/statistico PAT (ottobre–novembre 2025), profilo affine a livello superiore.",
} as const;

export type SubjectKey = "tecnico" | "istituzionale";

export const SUBJECT_LABEL: Record<SubjectKey, string> = {
  tecnico: "Tecnico",
  istituzionale: "Istituzionale",
};
