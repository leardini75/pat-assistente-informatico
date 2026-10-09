import type { SubjectKey } from "./exam";

export type ShortPrompt = {
  id: string;
  subject: SubjectKey;
  title: string;
  prompt: string;
  /** Schema di risposta modello (per studio; non è la sola risposta corretta) */
  modelAnswer: string;
  keypoints: string[];
  source?: string;
};

export const SHORT_PROMPTS: ShortPrompt[] = [
  {
    id: "sa-tec-01",
    subject: "tecnico",
    title: "Firma digitale",
    prompt:
      "Nell'ambito del Codice dell'Amministrazione Digitale, illustri cosa si intende per firma digitale e come si colloca tra le firme elettroniche.",
    keypoints: [
      "Firma elettronica vs avanzata vs qualificata",
      "Chiavi pubblica/privata e certificato",
      "Integrità e autenticazione del sottoscrittore",
      "Differenza rispetto alla sola PEC",
    ],
    modelAnswer: `La firma digitale, nel quadro CAD/eIDAS, è una particolare firma elettronica qualificata basata su un sistema di chiavi crittografiche asimmetriche (una pubblica e una privata correlate) e su un certificato rilasciato da un prestatore di servizi fiduciari.

Consente di garantire autenticità del sottoscrittore e integrità del documento: ogni modifica del file invalida la verifica. Si distingue dalla firma elettronica «semplice» (minor valore probatorio) e non va confusa con la PEC, che attesta la trasmissione ma non sottoscrive di per sé il contenuto.

In una risposta da concorso conviene chiudere collegando firma digitale → documento informatico → conservazione e opponibilità ai terzi.`,
    source: "Quesito affine — orale/scritta Funzionario informatico PAT 2025",
  },
  {
    id: "sa-tec-02",
    subject: "tecnico",
    title: "Cloud IaaS / PaaS / SaaS",
    prompt:
      "Illustri le differenze tra i modelli di erogazione cloud IaaS, PaaS e SaaS, con un esempio di responsabilità a carico della Pubblica Amministrazione in ciascuno.",
    keypoints: [
      "Cosa fornisce il provider",
      "Cosa resta all'ente",
      "Esempio concreto per ciascun modello",
      "Impatto su patch e competenze IT",
    ],
    modelAnswer: `IaaS eroga risorse infrastrutturali virtualizzate (compute, storage, rete): l'ente gestisce tipicamente sistema operativo, middleware e applicativi. PaaS fornisce una piattaforma di esecuzione/sviluppo: l'ente si concentra su codice e dati. SaaS offre l'applicativo pronto all'uso: l'ente configura utenti, profili e processi, senza gestire patch dell'infrastruttura sottostante.

Esempi: macchine virtuali in un cloud qualificato (IaaS); ambiente di build/deploy gestito (PaaS); protocollo o suite collaborativa in abbonamento (SaaS).

Passando da IaaS a SaaS diminuiscono le competenze infrastrutturali richieste in house e aumenta la dipendenza dal provider: vanno gestiti lock-in, classificazione dei dati e clausole di uscita.`,
    source: "Programma bando Assistente 2026 + orale Funzionario 2025",
  },
  {
    id: "sa-tec-03",
    subject: "tecnico",
    title: "PDND e once-only",
    prompt:
      "Illustri il ruolo della Piattaforma Digitale Nazionale Dati (PDND) e il collegamento con il principio once-only.",
    keypoints: [
      "Scambio dati via API tra soggetti abilitati",
      "Interoperabilità",
      "Once-only: non ridare dati già noti alla PA",
      "Vantaggi per cittadino e amministrazione",
    ],
    modelAnswer: `La PDND è l'infrastruttura nazionale che abilita lo scambio di dati tra pubbliche amministrazioni e soggetti autorizzati tramite API, secondo regole di accreditamento e autorizzazione.

Il principio once-only prevede che il cittadino non debba fornire più volte alla PA informazioni già in possesso di un'altra amministrazione. La PDND è uno strumento concreto per realizzarlo: l'ente richiedente interroga la base dati competente invece di chiedere di nuovo il dato.

In conclusione: interoperabilità tecnica + regole di accesso = meno onere per l'utente e dati più coerenti.`,
    source: "Quesiti orali Funzionario informatico PAT 2025",
  },
  {
    id: "sa-tec-04",
    subject: "tecnico",
    title: "Interoperabilità REST",
    prompt:
      "Illustri le caratteristiche dello stile architetturale REST previsto dalle linee guida sull'interoperabilità tecnica delle PA, spiegando anche il significato di CRUD.",
    keypoints: [
      "Risorse identificate da URI",
      "Metodi HTTP",
      "Stateless",
      "CRUD = Create Read Update Delete",
      "Esempio di endpoint",
    ],
    modelAnswer: `REST (Representational State Transfer) organizza l'integrazione intorno a risorse indirizzabili tramite URI, manipolate con metodi HTTP (GET, POST, PUT/PATCH, DELETE), tipicamente con scambi in JSON e senza stato di sessione lato server (stateless).

CRUD indica le operazioni Create, Read, Update, Delete sulle risorse. Esempio: GET /v1/resources/1234 legge la risorsa 1234; PUT/PATCH la aggiorna; DELETE la elimina.

Per la PA REST favorisce standardizzazione, riuso delle API e integrazione con piattaforme come la PDND, a condizione di governare autenticazione, autorizzazione e qualità dei dati.`,
    source: "Linee guida interoperabilità / orale Funzionario 2025",
  },
  {
    id: "sa-tec-05",
    subject: "tecnico",
    title: "Database e ACID",
    prompt:
      "Illustri i principi di una base di dati relazionale e il significato delle proprietà ACID di una transazione.",
    keypoints: [
      "Tabelle, chiavi, integrità referenziale",
      "SQL di base",
      "Atomicità",
      "Consistenza",
      "Isolamento",
      "Durabilità",
    ],
    modelAnswer: `In un modello relazionale i dati sono organizzati in tabelle (relazioni) con chiavi primarie che identificano le righe e chiavi esterne che collegano le tabelle rispettando l'integrità referenziale. Il linguaggio SQL consente interrogazioni e aggiornamenti (SELECT/JOIN, INSERT/UPDATE/DELETE).

ACID descrive le proprietà delle transazioni: Atomicità (tutto o niente), Consistenza (rispetto dei vincoli), Isolamento (transazioni concorrenti non si disturbano indebitamente), Durabilità (gli effetti restano dopo il commit, anche a fronte di guasti).

Per un assistente informatico è utile collegare ACID a backup, recovery e prevenzione di aggiornamenti parziali in procedure amministrative.`,
    source: "Programma bando Assistente 2026",
  },
  {
    id: "sa-tec-06",
    subject: "tecnico",
    title: "Modello OSI",
    prompt:
      "Illustri i livelli del modello OSI e fornisca un esempio di protocollo o dispositivo per almeno quattro livelli.",
    keypoints: [
      "Sette livelli",
      "Esempi L2/L3/L4/L7",
      "Utilità per troubleshooting",
      "Rapporto con TCP/IP",
    ],
    modelAnswer: `Il modello OSI suddivide la comunicazione in sette livelli: Fisico, Data Link, Rete, Trasporto, Sessione, Presentazione, Applicazione.

Esempi: Data Link — Ethernet/switch; Rete — IP/router; Trasporto — TCP o UDP; Applicazione — HTTP/HTTPS, DNS, SMTP. Nella pratica si usa spesso il modello TCP/IP semplificato, ma OSI resta utile per localizzare i guasti (cavo, switching, routing, sessione applicativa).

In una PA, saper collocare firewall (filtraggio di rete/trasporto) e TLS (sicurezza del canale applicativo) evita confusioni tipiche in prova orale.`,
    source: "Programma bando Assistente 2026",
  },
  {
    id: "sa-tec-07",
    subject: "tecnico",
    title: "VM e container",
    prompt:
      "Illustri le differenze tra macchine virtuali e container e il ruolo dell'orchestrazione in un'applicazione cloud native.",
    keypoints: [
      "Hypervisor e SO guest",
      "Kernel condiviso nei container",
      "Densità e portabilità",
      "Orchestrazione (scaling, self-healing)",
    ],
    modelAnswer: `Una macchina virtuale è gestita da un hypervisor e include tipicamente un sistema operativo guest completo, con isolamento forte e overhead maggiore. Un container condivide il kernel dell'host e incapsula runtime e dipendenze dell'applicazione: è più leggero e portabile, ma richiede attenzione alla sicurezza dell'ambiente condiviso.

L'orchestrazione (es. Kubernetes) automatizza scheduling, aggiornamenti, scalabilità orizzontale e ripristino dei container. In un contesto PA supporta servizi elastici su cloud qualificato, a patto di governare immagini, secret e osservabilità.`,
    source: "Programma bando + orale Funzionario 2025",
  },
  {
    id: "sa-tec-08",
    subject: "tecnico",
    title: "CAD: AgID e RTD",
    prompt:
      "Illustri i ruoli di AgID e del Responsabile per la Transizione Digitale (RTD) nel quadro del CAD.",
    keypoints: [
      "AgID: linee guida e standard",
      "RTD: guida digitale nell'ente",
      "Diritti di cittadinanza digitale",
      "Esempio operativo",
    ],
    modelAnswer: `AgID è l'agenzia nazionale che definisce linee guida, standard e strumenti di monitoraggio per l'attuazione del CAD. Il RTD è la figura interna all'amministrazione che coordina la transizione digitale: interoperabilità, servizi online, sicurezza e allineamento al Piano triennale.

Il CAD riconosce ai cittadini diritti di cittadinanza digitale (accedere ai servizi online, usare identità e domicilio digitale). Esempio: il RTD promuove l'adozione di SPID/CIE e l'integrazione con piattaforme abilitanti, applicando le regole AgID.`,
    source: "Programma bando Assistente 2026",
  },
  {
    id: "sa-tec-09",
    subject: "tecnico",
    title: "Riuso del software",
    prompt:
      "Illustri i principi delle linee guida AgID sull'acquisizione e riuso del software e il concetto di lock-in.",
    keypoints: [
      "Valutazione preventiva del riuso",
      "Open source",
      "Catalogo del riuso",
      "Lock-in e mitigazioni",
    ],
    modelAnswer: `Prima di sviluppare o acquistare, la PA deve verificare se esistono soluzioni riusabili o open source adeguate, anche consultando i cataloghi del riuso. L'obiettivo è ridurre costi, tempi e dipendenze, valorizzando investimenti già fatti da altre amministrazioni.

Il lock-in è la difficoltà a cambiare fornitore o tecnologia per formati chiusi, API proprietarie o costi di uscita elevati. Si mitiga con standard aperti, portabilità dei dati, clausole contrattuali di exit e documentazione del codice.

Una risposta efficace chiude con un mini-flusso: assessment → riuso/OS → eventuale sviluppo → pubblicazione a riuso.`,
    source: "Programma bando Assistente 2026",
  },
  {
    id: "sa-tec-10",
    subject: "tecnico",
    title: "eIDAS e identità digitali",
    prompt:
      "Illustri gli elementi rilevanti del regolamento eIDAS 2.0 per una PA: identità digitali, firme elettroniche, PEC e SERCQ.",
    keypoints: [
      "Identificazione elettronica e livelli di garanzia",
      "Firme e servizi fiduciari",
      "PEC / recapito certificato",
      "SERCQ e prospettiva europea",
    ],
    modelAnswer: `eIDAS armonizza in UE l'identificazione elettronica e i servizi fiduciari. Per la PA italiana SPID e CIE sono mezzi di identità digitale con diversi livelli di garanzia. Le firme elettroniche (fino alla qualificata/digitale) e i certificati ne costituiscono il braccio documentale.

La PEC è lo strumento nazionale di recapito elettronico con valenza di raccomandata; SERCQ rappresenta l'evoluzione in chiave europea dei servizi di recapito certificato qualificato. eIDAS 2.0 spinge inoltre verso il wallet europeo di identità digitale.

In prova: collega sempre identità → firma/recapito → procedimento amministrativo digitale.`,
    source: "Programma bando Assistente 2026",
  },
  {
    id: "sa-tec-11",
    subject: "tecnico",
    title: "Sicurezza CIA",
    prompt:
      "Illustri i tre principi della sicurezza informatica (confidenzialità, integrità, disponibilità) con un esempio ciascuno in ambito PA.",
    keypoints: [
      "Confidenzialità",
      "Integrità",
      "Disponibilità",
      "Esempi concreti",
      "Controlli tipici",
    ],
    modelAnswer: `Confidenzialità: solo i soggetti autorizzati accedono ai dati (es. fascicoli con dati personali protetti da ACL e cifratura). Integrità: i dati non sono alterati indebitamente (es. log di protocollo e firme digitali). Disponibilità: i servizi restano usufruibili quando servono (es. ridondanza, backup e disaster recovery del portale dei servizi).

Controlli tipici: MFA e least privilege (C), hashing/firme e controlli di modifica (I), clustering e piani di continuità (A). Una buona risposta orale aggiunge un attacco di esempio (phishing, ransomware, DDoS) e la misura di contrasto.`,
    source: "Orale Funzionario informatico PAT 2025",
  },
  {
    id: "sa-tec-12",
    subject: "tecnico",
    title: "Documento informatico",
    prompt:
      "Illustri il concetto di documento informatico secondo il CAD e i fattori che ne influenzano l'efficacia probatoria.",
    keypoints: [
      "Definizione",
      "Formazione e immodificabilità",
      "Firme",
      "Conservazione",
      "Metadati",
    ],
    modelAnswer: `Il documento informatico è la rappresentazione informatica di atti, fatti o dati giuridicamente rilevanti. La sua efficacia dipende da modalità di formazione, eventuali firme elettroniche, completezza dei metadati e conservazione a norma che ne garantisca leggibilità e integrità nel tempo.

Un file non firmato può avere valore limitato; una firma qualificata/digitale e una conservazione corretta rafforzano l'opponibilità. Non confondere il documento con il canale di trasmissione (es. PEC): si possono combinarli, ma assolvono funzioni diverse.`,
    source: "Programma bando + orale Funzionario 2025",
  },

  // ——— Istituzionale ———
  {
    id: "sa-ist-01",
    subject: "istituzionale",
    title: "Autonomia speciale PAT",
    prompt:
      "Illustri gli elementi essenziali dell'ordinamento statutario della Provincia autonoma di Trento, con riferimento alle L.P. n. 2 e n. 3 del 2003.",
    keypoints: [
      "Autonomia speciale",
      "Organi principali",
      "L.P. 2 e 3/2003",
      "Rapporto con enti locali",
      "Esempio di impatto sui servizi",
    ],
    modelAnswer: `La Provincia autonoma di Trento gode di autonomia speciale, con poteri legislativi e amministrativi più ampi rispetto alle Regioni a statuto ordinario. Gli organi di vertice comprendono Consiglio, Presidente e Giunta.

Le leggi provinciali 5 marzo 2003, n. 2 e n. 3 articolano l'assetto istituzionale e l'organizzazione dell'autonomia, anche nei rapporti con Comuni e Comunità di valle secondo sussidiarietà. Per un profilo IT, l'autonomia si traduce nella capacità di progettare servizi digitali provinciali nel rispetto del quadro nazionale (CAD, piattaforme abilitanti) e delle regole locali di trasparenza e anticorruzione.`,
    source: "Programma orale bando Assistente 2026",
  },
  {
    id: "sa-ist-02",
    subject: "istituzionale",
    title: "PIAO e anticorruzione",
    prompt:
      "Illustri cosa sia il Piano per la prevenzione della corruzione e per la trasparenza della Provincia autonoma di Trento e il suo rapporto con il PIAO.",
    keypoints: [
      "PIAO",
      "Sezione/allegato anticorruzione e trasparenza",
      "RPCT",
      "Misure tipiche",
      "Collegamento al lavoro IT",
    ],
    modelAnswer: `Il PIAO (Piano Integrato di Attività e Organizzazione) integra pianificazione dell'ente; il Piano per la prevenzione della corruzione e per la trasparenza ne è allegato/sezione sostanziale.

L'RPCT coordina mappatura dei rischi, misure preventive (formazione, rotazione ove possibile, whistleblowing, controlli) e obblighi di pubblicazione. Per l'assistente informatico rilevante è la gestione degli accessi ai sistemi, la tracciabilità e la protezione dei dati trattati negli applicativi provinciali.`,
    source: "Programma orale bando Assistente 2026",
  },
  {
    id: "sa-ist-03",
    subject: "istituzionale",
    title: "Codice di comportamento",
    prompt:
      "Illustri i contenuti essenziali del codice di comportamento dei dipendenti provinciali e il collegamento con la responsabilità disciplinare.",
    keypoints: [
      "Delibera G.P. 1514/2024",
      "Doveri verso il pubblico e uso dei beni",
      "Regali e conflitti di interesse",
      "Procedimento disciplinare",
      "Profilo IT",
    ],
    modelAnswer: `Il codice di comportamento (delibera della Giunta provinciale n. 1514/2024) precisa doveri di correttezza, imparzialità, uso responsabile di beni e informazioni, gestione di regali e rapporti con il pubblico, anche online.

La violazione può attivare responsabilità disciplinare secondo il codice disciplinare e il CCPL, con garanzie di contraddittorio e proporzionalità della sanzione. Per chi lavora sui sistemi informatici assumono rilievo riservatezza, divieto di abusi degli strumenti e doveri di segnalazione di incidenti o vulnerabilità.`,
    source: "Programma orale bando Assistente 2026",
  },
  {
    id: "sa-ist-04",
    subject: "istituzionale",
    title: "Molestie e clima organizzativo",
    prompt:
      "Illustri le finalità del codice di condotta contro le molestie e come un dipendente debba comportarsi in caso di segnalazione.",
    keypoints: [
      "Prevenzione",
      "Tutela della persona",
      "Canali di segnalazione",
      "Riservatezza",
      "Divieto di ritorsioni",
    ],
    modelAnswer: `Il codice di condotta contro le molestie mira a prevenire comportamenti lesivi della dignità della persona e a favorire emersione e contrasto dei casi, proteggendo chi segnala da ritorsioni.

Il dipendente deve conoscere i canali previsti, mantenere la riservatezza e collaborare alle verifiche senza secondary victimization. In un contesto di ufficio tecnico, il rispetto del codice si integra con un clima organizzativo basato su rispetto e professionalità, coerente anche con il codice di comportamento generale.`,
    source: "Programma orale bando Assistente 2026",
  },
];

export function getShortBySubject(subject: SubjectKey | "all"): ShortPrompt[] {
  if (subject === "all") return SHORT_PROMPTS;
  return SHORT_PROMPTS.filter((p) => p.subject === subject);
}
