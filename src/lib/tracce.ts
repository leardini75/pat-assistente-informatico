export type TraceItem = {
  id: string;
  ente: string;
  year: string;
  kind: "scritta" | "orale" | "criteri" | "bando";
  subject?: string;
  items: string[];
  note?: string;
};

export const TRACCE: TraceItem[] = [
  {
    id: "pat-2026-bando",
    ente: "Provincia autonoma di Trento",
    year: "2026",
    kind: "bando",
    subject: "Assistente informatico/statistico – indirizzo informatico",
    note:
      "Programma ufficiale della prova scritta e orale (bando per 3 posti, domande entro 23/10/2026).",
    items: [
      "Prova scritta: quesiti a risposta sintetica o multipla — soglia 18/30",
      "CAD: principi, destinatari, AgID, RTD, diritti di cittadinanza digitale",
      "Documento digitale",
      "Linee guida AgID su acquisizione e riuso del software (principi e licenze)",
      "eIDAS 2.0: identità digitali, firme elettroniche, PEC e SERCQ",
      "Cloud: IaaS, PaaS, SaaS",
      "Interoperabilità applicativa",
      "Database relazionali e SQL",
      "Telecomunicazioni su rete e modello OSI",
      "Virtualizzazione: macchine virtuali e container",
      "Orale: argomenti della scritta + Statuto PAT (L.P. 2 e 3/2003) + Piano anticorruzione/trasparenza (PIAO) + codice di comportamento (delib. 1514/2024), CCPL, disciplinare e codice anti-molestie",
      "Diario prove: pubblicazione prevista il 21 dicembre 2026 (preavviso ≥ 20 giorni)",
    ],
  },
  {
    id: "pat-2025-funz-scritta",
    ente: "Provincia autonoma di Trento",
    year: "2025",
    kind: "scritta",
    subject: "Funzionario informatico/statistico – indirizzo informatico",
    note:
      "Traccia pubblica della prova scritta del 29 ottobre 2025. Profilo superiore (cat. D) ma argomenti fortemente sovrapponibili: utile per allenare i quiz.",
    items: [
      "Notazioni per processi complessi (BPMN vs diagrammi UML)",
      "Firma digitale nel CAD",
      "Uso delle tecnologie nei rapporti con la PA: diritto",
      "Responsabilità nel modello SaaS",
      "Ruolo della PDND",
      "Principi del Piano triennale per l'informatica nella PA",
      "WCAG 2.1 e quattro principi (percepibile, utilizzabile, comprensibile, robusto)",
      "Scenari d'uso nella progettazione di servizi digitali",
      "Firewall stateful vs altri attacchi (injection, social engineering)",
      "Triade CIA; crittografia asimmetrica; ruolo di HTTPS",
      "Memorizzazione password (hash iterativo con salt)",
      "Tecnologie di sessione/autenticazione (cookie, bearer token, OpenID…)",
      "Modello IaaS; classificazione dati cloud PA; container",
      "Piattaforme abilitanti; endpoint REST; CRUD",
    ],
  },
  {
    id: "pat-2025-funz-orale",
    ente: "Provincia autonoma di Trento",
    year: "2025",
    kind: "orale",
    subject: "Funzionario informatico – selezione domande gruppo AI",
    note:
      "Estratto dalle domande orali pubbliche (indirizzo informatico). Ideali come tracce per le risposte sintetiche.",
    items: [
      "Illustri le proprietà ACID di una transazione",
      "Ruolo del processo ETL in un'architettura di business intelligence",
      "A cosa servono gli indici in un DBMS",
      "I tre principi della sicurezza informatica",
      "Differenza tra funzione crittografica invertibile e hashing",
      "Concetto di certificato elettronico in una PKI",
      "Documento informatico secondo il CAD",
      "PEC: garanzie in una comunicazione",
      "Classificazione dei dati nel regolamento cloud PA",
      "Ruolo di TLS; Polo Strategico Nazionale",
      "Interoperabilità semantica vs tecnica; principi WCAG",
      "Lock-in e strategie di mitigazione",
      "PDND, firma digitale, istanze telematiche, Difensore civico digitale",
      "INAD / INI-PEC; stile REST; orchestrazione container",
      "IaaS vs SaaS; on-premise vs IaaS; principi del Piano triennale",
      "Scalabilità orizzontale/verticale; cyberattacchi; once-only",
      "RTD; qualificazione cloud ACN; flusso di acquisizione e riuso software",
    ],
  },
  {
    id: "pat-2025-funz-materie",
    ente: "Provincia autonoma di Trento",
    year: "2025",
    kind: "bando",
    subject: "Funzionario informatico – programma scritta",
    note:
      "Materie del bando Funzionario 2025 (livello più alto): utili per approfondire oltre il programma Assistente.",
    items: [
      "CAD (D.Lgs. 82/2005)",
      "Piano triennale per l'informatica nella PA",
      "Progettazione servizi digitali: multicanalità, accessibilità, design",
      "Sicurezza informatica; privacy by design/default",
      "Piattaforme abilitanti e infrastrutture",
      "Modello di interoperabilità",
      "Project management e metodologie di sviluppo",
      "Basi di dati e business intelligence",
      "Cenni su tecnologie e modelli di IA",
    ],
  },
  {
    id: "pat-2022-assistente",
    ente: "Provincia autonoma di Trento",
    year: "2022",
    kind: "bando",
    subject: "Assistente informatico/statistico (informatico + statistico)",
    note:
      "Edizione precedente dello stesso profilo (6 posti: 3 informatico + 3 statistico). Stesso ente e figura; utile come riferimento storico di procedura (scritta + orale).",
    items: [
      "Domande: 9 novembre – 12 dicembre 2022",
      "Figura: Assistente informatico/statistico, categoria C, livello base",
      "Due indirizzi distinti con prove separate",
      "Riserve per volontari delle Forze armate",
      "Procedura per esami con formazione di graduatoria di merito",
    ],
  },
  {
    id: "pat-simulazione-didattica",
    ente: "Questa web app (criteri didattici)",
    year: "2026",
    kind: "criteri",
    note:
      "Il bando 2026 non fissa il numero esatto di quesiti. La simulazione adotta un formato realistico allineato alle prove PAT recenti.",
    items: [
      "18 quiz a risposta multipla (4 opzioni) sulle materie tecnico-informatiche — 1 punto ciascuno; errata/omessa = 0",
      "4 risposte sintetiche (max 1800 battute) — max 3 punti ciascuna in autovalutazione",
      "Punteggio massimo 30; soglia 18/30 come da bando",
      "Durata simulata: 120 minuti",
      "Per l'orale: esercitati anche sulle schede istituzionali e sulle tracce Funzionario 2025",
    ],
  },
];
