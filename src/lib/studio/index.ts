import type { SubjectKey } from "../exam";
import type { StudyTopic } from "./types";
import { TECHNICO_TOPICS } from "./topics-tecnico";
import { ISTITUZIONALE_TOPICS } from "./topics-istituzionale";

export type { StudyPoint, StudyTerm, StudyTopic } from "./types";
export { topicBullets } from "./types";

export const STUDY_TOPICS: StudyTopic[] = [
  ...TECHNICO_TOPICS,
  ...ISTITUZIONALE_TOPICS,
];

export function getTopicsBySubject(subject: SubjectKey | "all"): StudyTopic[] {
  if (subject === "all") return STUDY_TOPICS;
  return STUDY_TOPICS.filter((t) => t.subject === subject);
}

export function getTopicById(id: string): StudyTopic | undefined {
  return STUDY_TOPICS.find((t) => t.id === id);
}
