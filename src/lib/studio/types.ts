import type { SubjectKey } from "../exam";

export type StudyTerm = {
  term: string;
  def: string;
};

/** Un punto dell'argomento con materiale di studio completo */
export type StudyPoint = {
  id: string;
  title: string;
  /** Sintesi in 1–2 frasi */
  lead: string;
  /** Paragrafi di spiegazione */
  body: string[];
  /** Glossario essenziale */
  terms?: StudyTerm[];
  /** Cosa serve in prova (quiz / sintetica / orale) */
  examTip: string;
  /** Riferimenti normativi o fonti utili */
  refs?: string[];
};

export type StudyTopic = {
  id: string;
  subject: SubjectKey;
  title: string;
  summary: string;
  remember: string;
  points: StudyPoint[];
  /** Percorso pubblico del PDF dedicato, es. /studio-pdfs/t-cad.pdf */
  pdfHref: string;
};

/** Compatibilità con eventuale codice che legge ancora i bullets */
export function topicBullets(topic: StudyTopic): string[] {
  return topic.points.map((p) => p.title);
}
