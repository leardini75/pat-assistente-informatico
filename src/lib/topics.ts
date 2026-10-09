import type { SubjectKey } from "./exam";

export type StudyTopic = {
  id: string;
  subject: SubjectKey;
  title: string;
  summary: string;
  bullets: string[];
  remember: string;
};

export const STUDY_TOPICS: StudyTopic[] = [
  {
    id: "t-cad",
    subject: "tecnico",
    title: "CAD — Codice dell'Amministrazione Digitale",
    summary:
      "Il D.Lgs. 82/2005 è il telaio normativo della PA digitale: principi, destinatari, AgID, RTD e diritti di cittadinanza digitale.",
    bullets: [
      "Destinatari: pubbliche amministrazioni; molte disposizioni si estendono a gestori di servizi pubblici e società controllate.",
      "AgID: Agenzia per l'Italia Digitale — linee guida, standard, monitoraggio, cataloghi.",
      "RTD (Responsabile per la Transizione Digitale): figura obbligatoria che guida digitalizzazione, interoperabilità e sicurezza nell'ente.",
      "Diritti di cittadinanza digitale: uso delle tecnologie nei rapporti con la PA è un diritto; accesso ai servizi online, identità digitale, domicilio digitale.",
      "Principi: digital first / once only, accessibilità, sicurezza, trasparenza, riuso, open source preferito quando possibile.",
      "Istanze telematiche: CAD elenca canali (PEC, SPID/CIE, app IO, portali) per presentare domande alla PA.",
    ],
    remember:
      "In risposta: norma (CAD) → principio/diritto → soggetto responsabile (AgID/RTD) → effetto pratico per cittadino o ente.",
  },
  {
    id: "t-doc-digitale",
    subject: "tecnico",
    title: "Documento digitale e firme",
    summary:
      "Documento informatico, validità, conservazione e scala delle firme elettroniche (eIDAS / CAD).",
    bullets: [
      "Documento informatico: rappresentazione informatica di atti, fatti o dati giuridicamente rilevanti.",
      "Valore probatorio cresce con firme e procedure di formazione/conservazione.",
      "Firma elettronica semplice < avanzata < qualificata; la firma digitale italiana è tipicamente una firma elettronica qualificata basata su chiavi asimmetriche e certificato.",
      "PEC: strumento di trasmissione con valore legale di raccomandata; non è di per sé una firma sul contenuto.",
      "Conservazione: requisiti di integrità, leggibilità nel tempo, metadati; responsabilità del titolare del trattamento documentale.",
    ],
    remember:
      "Non confondere trasmissione (PEC) con sottoscrizione (firma). Per confidenzialità cifrare con chiave pubblica del destinatario; per autenticità firmare con chiave privata del mittente.",
  },
  {
    id: "t-eidas",
    subject: "tecnico",
    title: "eIDAS 2.0 — identità, firme, PEC e SERCQ",
    summary:
      "Il regolamento eIDAS (e aggiornamento 2.0) armonizza identità digitali e servizi fiduciari in UE.",
    bullets: [
      "Identità digitali: SPID e CIE come mezzi di identificazione elettronica; livelli di garanzia basso/significativo/alto.",
      "Firme elettroniche e sigilli: requisiti tecnici e giuridici comuni.",
      "Servizi fiduciari: certificati, marca temporale, PEC/servizi di recapito elettronico certificato.",
      "SERCQ: Servizio Elettronico di Recapito Certificato Qualificato — evoluzione europea del recapito certificato.",
      "Wallet europeo di identità digitale (EUDI): obiettivo eIDAS 2.0 per attributi e credenziali verificabili.",
    ],
    remember:
      "Collega sempre mezzo di identificazione (SPID/CIE) → livello di garanzia → servizio fiduciario (firma/PEC/SERCQ).",
  },
  {
    id: "t-riuso",
    subject: "tecnico",
    title: "Acquisizione e riuso del software (linee guida AgID)",
    summary:
      "Prima di comprare o sviluppare, la PA deve valutare riuso e open source secondo CAD e linee guida AgID.",
    bullets: [
      "Obbligo di valutare soluzioni già disponibili nella PA (catalogo del riuso) prima di nuovo sviluppo.",
      "Preferenza per software open source quando economicamente e tecnicamente conveniente.",
      "Modelli di licenza: copyleft (es. GPL), permissive (MIT, Apache), proprietarie — impatto su obblighi di condividere modifiche.",
      "Lock-in: dipendenza da fornitore/formato; mitigazioni = standard aperti, exit strategy, portabilità dei dati.",
      "Flusso tipico: assessment → riuso/OS → evento sviluppo → pubblicazione a riuso.",
    ],
    remember:
      "Schema risposta: obbligo di valutazione → catalogo riuso → licenza → rischio lock-in → misura di mitigazione.",
  },
  {
    id: "t-cloud",
    subject: "tecnico",
    title: "Cloud — IaaS, PaaS, SaaS e PA",
    summary:
      "Modelli di erogazione e responsabilità condivisa; per la PA anche qualificazione ACN e Polo Strategico Nazionale.",
    bullets: [
      "IaaS: risorse infrastrutturali virtuali (compute, storage, rete) — l'ente gestisce SO e applicativi.",
      "PaaS: piattaforma di sviluppo/runtime — l'ente gestisce codice e dati, non l'infrastruttura sottostante.",
      "SaaS: applicativo pronto via rete — l'ente configura utenti/permessi, non patcha l'infrastruttura.",
      "On-premise vs cloud: controllo vs elasticità/costi operativi; attenzione a classi di dati e residenza.",
      "Classificazione dati PA (ordinario / critico / strategico) guida dove possono stare i dati.",
      "PSN (Polo Strategico Nazionale) e cloud qualificati ACN: vincoli di adozione per molte PA.",
    ],
    remember:
      "In SaaS la patch dell'infrastruttura NON è in capo all'amministrazione utente. Chiediti sempre: cosa gestisco io?",
  },
  {
    id: "t-interop",
    subject: "tecnico",
    title: "Interoperabilità applicativa",
    summary:
      "Far dialogare sistemi diversi: tecnica, semantica e organizzativa; API REST, PDND e once-only.",
    bullets: [
      "Interoperabilità tecnica: protocolli, formati, API (spesso RESTful: risorse + HTTP + JSON).",
      "Interoperabilità semantica: stesso significato dei dati (ontologie, vocabolari controllati).",
      "CRUD: Create, Read, Update, Delete — operazioni base sulle risorse.",
      "PDND (Piattaforma Digitale Nazionale Dati): hub per scambio dati tra soggetti abilitati via API.",
      "Once-only: il cittadino non ridà dati già in possesso della PA; richiede interoperabilità e basi dati di qualità.",
      "Endpoint esempio: https://api.ente.example/rest/nome-api/v1/resources/1234 → risorsa id 1234 nella collezione resources.",
    ],
    remember:
      "Non confondere PDND (condivisione dati via API) con backup o autenticazione. Once-only = conseguenza pratica dell'interoperabilità.",
  },
  {
    id: "t-sql",
    subject: "tecnico",
    title: "Database relazionali e SQL",
    summary:
      "Modello relazionale, chiavi, normalizzazione, SQL di base e ACID — livello operativo da assistente.",
    bullets: [
      "Tabella = relazione; riga = tupla; colonna = attributo; chiave primaria identifica univocamente.",
      "Chiave esterna: referenza tra tabelle; supporta integrità referenziale.",
      "SQL: SELECT/FROM/WHERE, JOIN, INSERT/UPDATE/DELETE; aggregazioni (COUNT, SUM) e GROUP BY.",
      "Normalizzazione: ridurre ridondanze (1NF, 2NF, 3NF in sintesi).",
      "ACID: Atomicità, Consistenza, Isolamento, Durabilità delle transazioni.",
      "Indici: accelerano le letture a costo di spazio e scritture più lente.",
      "SQL injection: rischio se input non parametrizzati — mitigare con prepared statement.",
    ],
    remember:
      "Per una sintetica: modello relazionale → chiave/integrità → esempio SQL → ACID o sicurezza (injection) se chiesto.",
  },
  {
    id: "t-osi",
    subject: "tecnico",
    title: "Reti e modello OSI",
    summary:
      "Stack a 7 livelli, TCP/IP, indirizzamento e servizi di rete essenziali in ambito PA.",
    bullets: [
      "OSI: Fisico, Data Link, Rete, Trasporto, Sessione, Presentazione, Applicazione.",
      "TCP/IP tipico: Network (IP) / Transport (TCP-UDP) / Application (HTTP, DNS, SMTP…).",
      "LAN vs WAN; switch (L2) vs router (L3); firewall filtra traffico (stateful blocca connessioni non autorizzate).",
      "DNS risolve nomi in IP; DHCP assegna configurazione; NAT traduce indirizzi.",
      "HTTPS = HTTP su TLS: confidenzialità e integrità del canale client-server.",
      "Porte note: 80/443 web, 22 SSH, 25/587 mail, 53 DNS.",
    ],
    remember:
      "Firewall ≠ antivirus. Firewall filtra rete; antivirus analizza malware su endpoint. CIA: Confidenzialità, Integrità, Disponibilità.",
  },
  {
    id: "t-virt",
    subject: "tecnico",
    title: "Virtualizzazione: VM e container",
    summary:
      "Isolamento delle risorse, densità, orchestrazione — linguaggio tipico delle prove PAT recenti.",
    bullets: [
      "VM: hypervisor virtualizza hardware; ogni VM ha SO guest completo.",
      "Container: condivide il kernel dell'host; incapsula runtime e dipendenze dell'app sopra il SO.",
      "Vantaggi container: leggerezza, portabilità, deploy rapido; attenzione a sicurezza dell'host condiviso.",
      "Orchestrazione (es. Kubernetes): scheduling, scaling, self-healing di container.",
      "Scalabilità verticale (più risorse a un nodo) vs orizzontale (più nodi).",
      "Business continuity vs disaster recovery: continuità operativa vs ripristino dopo disastro.",
    ],
    remember:
      "Container ≠ hypervisor multi-OS: il container non gestisce direttamente l'hardware e tipicamente non ospita SO guest diversi come una VM.",
  },
  {
    id: "t-security",
    subject: "tecnico",
    title: "Sicurezza di base (utile a quiz e orale)",
    summary:
      "Anche se non è elenco separato nel bando Assistente, compare nelle prove affini PAT e rafforza cloud/reti/CAD.",
    bullets: [
      "Triade CIA: Confidenzialità, Integrità, Disponibilità.",
      "Crittografia simmetrica vs asimmetrica; hashing non invertibile (password con salt + KDF).",
      "Attacchi tipici: phishing, ransomware, DDoS, SQL injection, XSS.",
      "MFA, least privilege, patching, backup 3-2-1.",
      "Privacy by design / by default (GDPR) e misure tecniche minime.",
    ],
    remember:
      "Password: mai in chiaro; hash iterativo con salt. Per autenticità del messaggio si firma con chiave privata.",
  },
  {
    id: "t-statuto",
    subject: "istituzionale",
    title: "Ordinamento statutario della PAT",
    summary:
      "Elementi di autonomia speciale e leggi provinciali 2 e 3 del 2003 — materia tipica dell'orale.",
    bullets: [
      "Statuto speciale: autonomie legislative e amministrative differenziate rispetto alle Regioni a statuto ordinario.",
      "L.P. 5 marzo 2003, n. 2 e n. 3: assetto istituzionale e riordino/organizzazione dell'autonomia.",
      "Organi: Consiglio provinciale, Presidente, Giunta; rapporti con Comuni e Comunità di valle.",
      "Competenze proprie e concorrenti; principio di sussidiarietà nell'organizzazione territoriale.",
      "In orale: evita elenchi nozionistici — collega autonomia → organizzazione → servizio al cittadino.",
    ],
    remember:
      "Apri con «autonomia speciale», cita L.P. 2 e 3/2003, poi un esempio concreto di organizzazione dei servizi.",
  },
  {
    id: "t-ptpct",
    subject: "istituzionale",
    title: "Anticorruzione e trasparenza (PIAO)",
    summary:
      "Il Piano per la prevenzione della corruzione e per la trasparenza è allegato al PIAO provinciale.",
    bullets: [
      "PIAO: Piano Integrato di Attività e Organizzazione — contiene anche la sezione anticorruzione/trasparenza.",
      "RPCT: Responsabile della Prevenzione della Corruzione e della Trasparenza.",
      "Misure: mappatura rischi, rotazione (ove possibile), whistleblowing, formazione, monitoraggio.",
      "Trasparenza: pubblicazione obbligatoria e accessi (documentale, civico, generalizzato) nel quadro nazionale e provinciale.",
      "Conflitto di interessi e inconferibilità/incompatibilità: temi ricorrenti in orale.",
    ],
    remember:
      "Schema: PIAO → allegato anticorruzione/trasparenza → RPCT → misura concreta + esempio IT (es. accessi ai sistemi).",
  },
  {
    id: "t-comportamento",
    subject: "istituzionale",
    title: "Codice di comportamento e disciplinare",
    summary:
      "Delibera G.P. n. 1514/2024, CCPL e codice disciplinare: doveri del dipendente provinciale.",
    bullets: [
      "Codice di comportamento: regali, rapporti con il pubblico, uso di beni/informazioni, social, trasparenza.",
      "CCPL vigente: inquadramento, diritti/doveri, orario, ferie, relazioni sindacali (livello essenziale).",
      "Responsabilità disciplinare: tipicità delle sanzioni, contraddittorio, proporzionalità.",
      "Codice di condotta contro le molestie: prevenzione, segnalazione, tutela della persona segnalante.",
      "Per profili IT: doveri su riservatezza dei dati, uso corretto degli strumenti, segnalazione incidenti.",
    ],
    remember:
      "Collega sempre dovere di comportamento → possibile illecito disciplinare → garanzia del procedimento. Se IT: riservatezza e uso degli strumenti.",
  },
];

export function getTopicsBySubject(subject: SubjectKey | "all"): StudyTopic[] {
  if (subject === "all") return STUDY_TOPICS;
  return STUDY_TOPICS.filter((t) => t.subject === subject);
}
