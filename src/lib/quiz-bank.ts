import type { SubjectKey } from "./exam";

export type QuizQuestion = {
  id: string;
  subject: SubjectKey;
  topic: string;
  stem: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
};

/**
 * Banca quiz livello medio-alto.
 * Regole: opzioni di lunghezza simile; distrattori credibili;
 * la corretta NON è sistematicamente la più lunga.
 * In sessione le opzioni vengono rimescolate.
 */
export const QUIZ_BANK: QuizQuestion[] = [
  {
    id: "tec-cad-01",
    subject: "tecnico",
    topic: "CAD · Ambito",
    stem: "Una norma del CAD rivolta alle PA:",
    options: [
      "vincola solo i Ministeri, mai le Province autonome",
      "può estendersi a gestori di servizi pubblici",
      "si applica sempre a qualunque privato",
      "è derogabile con delibera comunale",
    ],
    correct: 1,
    explanation:
      "Destinatari tipici sono le PA; molte disposizioni si estendono a gestori di servizi pubblici e società controllate, nei casi previsti — non a «tutti i privati».",
  },
  {
    id: "tec-cad-02",
    subject: "tecnico",
    topic: "CAD · RTD / DPO",
    stem: "RTD e DPO differiscono perché:",
    options: [
      "coincidono sempre per obbligo di legge",
      "il DPO approva le gare IT dell’ente",
      "RTD cura la digitalizzazione, DPO i dati",
      "il RTD sostituisce il DPO sotto i 50 dip.",
    ],
    correct: 2,
    explanation:
      "Mandati distinti (CAD vs GDPR). Possono collaborare, ma non sono la stessa figura.",
  },
  {
    id: "tec-cad-03",
    subject: "tecnico",
    topic: "CAD · Once only",
    stem: "«Once only» richiede alla PA di:",
    options: [
      "usare un solo applicativo per tutti gli enti",
      "cancellare i dati dopo la prima lettura",
      "archiviare tutto in un unico magazzino",
      "non ridomandare dati già detenuti altrove",
    ],
    correct: 3,
    explanation:
      "Il cittadino non deve ridare informazioni già in possesso della PA, grazie all’interoperabilità.",
  },
  {
    id: "tec-cad-04",
    subject: "tecnico",
    topic: "CAD · PEC vs firma",
    stem: "Un’istanza inviata via PEC:",
    options: [
      "ha prova di recapito, non equivale alla firma",
      "vale come firma digitale sul contenuto",
      "garantisce cifratura end-to-end del testo",
      "è ammissibile solo senza protocollo",
    ],
    correct: 0,
    explanation:
      "PEC = trasmissione con valenza di raccomandata; firma e confidenzialità sono profili distinti.",
  },
  {
    id: "tec-cad-05",
    subject: "tecnico",
    topic: "CAD · Riuso",
    stem: "Prima di un nuovo sviluppo software la PA:",
    options: [
      "deve acquistare solo prodotti proprietari",
      "valuta riuso e open source già disponibili",
      "attende tre anni di sperimentazione AgID",
      "lascia la scelta al solo fornitore uscente",
    ],
    correct: 1,
    explanation:
      "CAD e linee guida AgID impongono la valutazione preventiva di riuso/OS.",
  },
  {
    id: "tec-cad-06",
    subject: "tecnico",
    topic: "CAD · AgID",
    stem: "Quale attività è tipica di AgID?",
    options: [
      "giudicare i ricorsi al TAR sulle gare cloud",
      "rilasciare firme digitali ai cittadini",
      "adottare linee guida per la PA digitale",
      "gestire tutti i data center regionali",
    ],
    correct: 2,
    explanation:
      "AgID emana regole tecniche/linee guida e monitora; non è giudice né CA di firme.",
  },
  {
    id: "tec-firma-01",
    subject: "tecnico",
    topic: "eIDAS · Scala",
    stem: "Ordine di affidabilità delle firme elettroniche:",
    options: [
      "qualificata → avanzata → semplice",
      "avanzata → semplice → qualificata",
      "semplice → qualificata → avanzata",
      "semplice → avanzata → qualificata",
    ],
    correct: 3,
    explanation:
      "Al vertice c’è la firma elettronica qualificata (es. firma digitale italiana).",
  },
  {
    id: "tec-firma-02",
    subject: "tecnico",
    topic: "Crittografia · Firma",
    stem: "Per autenticare l’autore di un messaggio si usa:",
    options: [
      "la chiave privata del mittente (poi verifica)",
      "la chiave pubblica del mittente per firmare",
      "una password simmetrica condivisa in chat",
      "solo un hash SHA-256 senza alcuna chiave",
    ],
    correct: 0,
    explanation:
      "Si firma con la privata; si verifica con la pubblica. La cifratura per confidenzialità usa la pubblica del destinatario.",
  },
  {
    id: "tec-firma-03",
    subject: "tecnico",
    topic: "Crittografia · Confidenzialità",
    stem: "Per confidenzialità verso un destinatario noto:",
    options: [
      "si firma con la chiave privata del destinatario",
      "si pubblica il messaggio in open data",
      "si cifra con la chiave pubblica del destinatario",
      "si invia in chiaro su HTTP porta 80",
    ],
    correct: 2,
    explanation:
      "Solo chi ha la privata corrispondente può decifrare. Firma ≠ cifratura.",
  },
  {
    id: "tec-firma-04",
    subject: "tecnico",
    topic: "Password · Storage",
    stem: "Le password in archivio andrebbero salvate:",
    options: [
      "in chiaro in una tabella SQL dedicata",
      "con AES invertibile e chiave unica globale",
      "come hash one-way con salt e KDF lento",
      "identiche per tutti per semplificare i backup",
    ],
    correct: 2,
    explanation:
      "Hash/KDF + salt; mai chiaro né cifratura facilmente revertibile senza necessità.",
  },
  {
    id: "tec-firma-05",
    subject: "tecnico",
    topic: "eIDAS · SERCQ",
    stem: "Il SERCQ, rispetto alla PEC, è:",
    options: [
      "un protocollo Wi-Fi per gli uffici PA",
      "il sostituto immediato di SPID e CIE",
      "un formato di firma digitale italiano",
      "un recapito elettronico certificato UE",
    ],
    correct: 3,
    explanation:
      "SERCQ = servizio di recapito certificato qualificato nel quadro europeo eIDAS.",
  },
  {
    id: "tec-firma-06",
    subject: "tecnico",
    topic: "Documento · Conservazione",
    stem: "La conservazione a norma punta a:",
    options: [
      "comprimere ogni file di almeno il 90%",
      "garantire leggibilità e integrità nel tempo",
      "convertire ogni atto in fogli Excel",
      "eliminare i metadati per semplificare",
    ],
    correct: 1,
    explanation:
      "Integrità, leggibilità e reperibilità nel tempo (con metadati), non compressione.",
  },
  {
    id: "tec-cloud-01",
    subject: "tecnico",
    topic: "Cloud · SaaS",
    stem: "In SaaS, chi tipicamente patcha l’hypervisor?",
    options: [
      "l’ente utente su ogni macchina virtuale",
      "AgID con accesso diretto ai nodi",
      "il fornitore del servizio cloud",
      "il RTD senza alcun contratto",
    ],
    correct: 2,
    explanation:
      "In SaaS l’infrastruttura resta al provider; l’ente gestisce uso, accessi e dati di business.",
  },
  {
    id: "tec-cloud-02",
    subject: "tecnico",
    topic: "Cloud · IaaS→PaaS",
    stem: "Passando da IaaS a PaaS l’ente tipicamente:",
    options: [
      "cede SO/runtime e resta su codice e dati",
      "gestisce i rack fisici del provider",
      "non può più eseguire codice proprio",
      "deve abbandonare SPID per login locali",
    ],
    correct: 0,
    explanation:
      "PaaS sposta SO e piattaforma sul provider; applicazione e dati restano al cliente.",
  },
  {
    id: "tec-cloud-03",
    subject: "tecnico",
    topic: "Cloud · Classi dati",
    stem: "I dati «strategici» rispetto ai «critici»:",
    options: [
      "coincidono con quelli già in open data",
      "possono stare su qualsiasi cloud estero",
      "hanno vincoli ancora più stringenti",
      "riguardano solo le password Wi-Fi",
    ],
    correct: 2,
    explanation:
      "Scala tipica: ordinario < critico < strategico, con tutele crescenti.",
  },
  {
    id: "tec-cloud-04",
    subject: "tecnico",
    topic: "Cloud · Qualificazione",
    stem: "La qualificazione cloud per la PA serve a:",
    options: [
      "valutare solo l’aspetto grafico del portale",
      "selezionare servizi idonei sul piano sicurezza",
      "sostituire integralmente il codice dei contratti",
      "esentare l’ente da qualunque valutazione DPIA",
    ],
    correct: 1,
    explanation:
      "Seleziona servizi ammissibili rispetto a requisiti tecnici e di sicurezza (quadro ACN/cataloghi).",
  },
  {
    id: "tec-cloud-05",
    subject: "tecnico",
    topic: "Cloud · Lock-in",
    stem: "Quale misura riduce il lock-in SaaS?",
    options: [
      "formati chiusi e non documentati",
      "divieto di backup fuori dal tenant",
      "export periodico e clausole di exit",
      "un solo admin condiviso in chat",
    ],
    correct: 2,
    explanation:
      "Portabilità dei dati, standard aperti e exit strategy contrastano il lock-in.",
  },
  {
    id: "tec-cloud-06",
    subject: "tecnico",
    topic: "Cloud · Shared responsibility",
    stem: "In IaaS, l’hardening del SO guest spetta tipicamente:",
    options: [
      "sempre e solo al provider, senza eccezioni",
      "ad AgID in sostituzione del cliente",
      "al Garante privacy con accesso root",
      "all’ente cliente, salvo servizi managed",
    ],
    correct: 3,
    explanation:
      "Shared responsibility: in IaaS il guest OS è in capo al cliente, salvo managed espliciti.",
  },
  {
    id: "tec-interop-01",
    subject: "tecnico",
    topic: "PDND",
    stem: "La PDND abilita principalmente:",
    options: [
      "il backup incrementale dei client",
      "lo scambio dati via API tra soggetti abilitati",
      "il login social con account Google",
      "la stampa centralizzata dei provvedimenti",
    ],
    correct: 1,
    explanation:
      "Hub di interoperabilità API tra PA/soggetti autorizzati, non backup né login social.",
  },
  {
    id: "tec-interop-02",
    subject: "tecnico",
    topic: "Semantica",
    stem: "Due sistemi usano HTTPS/JSON ma significati diversi per «stato». È un problema di:",
    options: [
      "interoperabilità solo del cavo fisico",
      "assenza di DNS nell’ente",
      "interoperabilità semantica",
      "mancanza di un firewall L2",
    ],
    correct: 2,
    explanation:
      "Il canale tecnico funziona; manca l’accordo sul significato dei dati.",
  },
  {
    id: "tec-interop-03",
    subject: "tecnico",
    topic: "REST",
    stem: "PUT /v1/pratiche/42 con body completo tipicamente:",
    options: [
      "cancella tutta la collezione /v1/pratiche",
      "crea una risorsa con id casuale",
      "aggiorna/sostituisce la risorsa 42",
      "apre una sessione TCP senza HTTP",
    ],
    correct: 2,
    explanation:
      "L’URI identifica la risorsa; PUT/PATCH aggiornano, DELETE elimina, POST spesso crea.",
  },
  {
    id: "tec-interop-04",
    subject: "tecnico",
    topic: "HTTP · Idempotenza",
    stem: "Quale metodo è tipicamente idempotente?",
    options: [
      "POST di creazione (ripetuto crea duplicati)",
      "PUT ripetuto con lo stesso effetto",
      "CONNECT verso un proxy applicativo",
      "PATCH, sempre non idempotente",
    ],
    correct: 1,
    explanation:
      "GET, PUT, DELETE sono idempotenti; POST in generale no.",
  },
  {
    id: "tec-interop-05",
    subject: "tecnico",
    topic: "Piattaforme",
    stem: "Quale è una piattaforma abilitante nazionale?",
    options: [
      "un NAS USB da 2 TB in ufficio",
      "un PaaS commerciale non catalogato",
      "PagoPA",
      "un foglio Sheets personale",
    ],
    correct: 2,
    explanation:
      "PagoPA (come SPID, ANPR, PDND…) è piattaforma abilitante; un PaaS generico no.",
  },
  {
    id: "tec-interop-06",
    subject: "tecnico",
    topic: "REST · Stateless",
    stem: "Un’API REST «stateless» implica che:",
    options: [
      "il server tiene sessione sticky per utente",
      "è vietato usare token JWT",
      "ogni richiesta è autosufficiente",
      "le risorse non possono avere URI",
    ],
    correct: 2,
    explanation:
      "Niente stato di sessione lato server tra richieste; auth tipicamente nel token/header.",
  },
  {
    id: "tec-sql-01",
    subject: "tecnico",
    topic: "SQL · FK",
    stem: "Una FOREIGN KEY su una PRIMARY KEY assicura:",
    options: [
      "cifratura automatica delle colonne testo",
      "integrità referenziale tra le tabelle",
      "replicazione sincrona su tre DC",
      "indice full-text su ogni campo",
    ],
    correct: 1,
    explanation:
      "Impedisce riferimenti a chiavi inesistenti.",
  },
  {
    id: "tec-sql-02",
    subject: "tecnico",
    topic: "SQL · Isolamento",
    stem: "In ACID, «isolamento» significa che:",
    options: [
      "la rete viene interrotta a ogni COMMIT",
      "nel DBMS può esistere un solo utente",
      "le transazioni concorrenti non si disturbano",
      "i backup restano sospesi fino a fine mese",
    ],
    correct: 2,
    explanation:
      "Evita anomalie da concorrenza (dirty read ecc.), in base al livello impostato.",
  },
  {
    id: "tec-sql-03",
    subject: "tecnico",
    topic: "SQL · Normalizzazione",
    stem: "Separare gruppi ripetitivi in tabelle serve a:",
    options: [
      "ridurre ridondanza e anomalie di update",
      "eliminare l’uso di indici secondari",
      "rendere obbligatoria la denormalizzazione",
      "aumentare per definizione ogni SELECT",
    ],
    correct: 0,
    explanation:
      "Obiettivo della normalizzazione: meno ridondanza e anomalie.",
  },
  {
    id: "tec-sql-04",
    subject: "tecnico",
    topic: "SQL · Injection",
    stem: "Per mitigare la SQL injection è efficace:",
    options: [
      "concatenare l’input nella stringa SQL",
      "usare prepared statement / parametri",
      "nascondere l’URL admin senza auth",
      "disabilitare i log delle query",
    ],
    correct: 1,
    explanation:
      "I parametri separano codice e dati.",
  },
  {
    id: "tec-sql-05",
    subject: "tecnico",
    topic: "SQL · Indici",
    stem: "Molti indici su tabella write-heavy tipicamente:",
    options: [
      "migliorano sempre anche le scritture",
      "rendono superfluo avere una PRIMARY KEY",
      "aiutano le letture, ma costano in scrittura",
      "rendono inutile qualsiasi vincolo UNIQUE",
    ],
    correct: 2,
    explanation:
      "Costo di manutenzione degli indici ad ogni INSERT/UPDATE.",
  },
  {
    id: "tec-sql-06",
    subject: "tecnico",
    topic: "SQL · LEFT JOIN",
    stem: "LEFT JOIN A←B restituisce:",
    options: [
      "solo le righe presenti in entrambe",
      "tutte le righe di A, NULL se B non matcha",
      "solo le righe di B senza match in A",
      "il prodotto cartesiano senza filtro",
    ],
    correct: 1,
    explanation:
      "LEFT OUTER JOIN conserva il lato sinistro.",
  },
  {
    id: "tec-sql-07",
    subject: "tecnico",
    topic: "SQL · COUNT",
    stem: "COUNT(*) vs COUNT(colonna_nullable):",
    options: [
      "sono sempre identici su ogni tabella",
      "COUNT(col) conta le tabelle del catalogo",
      "COUNT(*) conta le righe; COUNT(col) salta i NULL",
      "COUNT(*) elimina i duplicati come DISTINCT",
    ],
    correct: 2,
    explanation:
      "COUNT(*) include tutte le righe; COUNT(espressione) ignora i NULL.",
  },
  {
    id: "tec-net-01",
    subject: "tecnico",
    topic: "Reti · DNS",
    stem: "«www.ente.it non risolve» è tipicamente un problema di:",
    options: [
      "livello fisico del cavo in rame",
      "servizio DNS (applicativo)",
      "solo dello switch core L2",
      "presentazione OSI senza TCP/IP",
    ],
    correct: 1,
    explanation:
      "Sintomo classico di DNS, servizio applicativo su UDP/TCP 53.",
  },
  {
    id: "tec-net-02",
    subject: "tecnico",
    topic: "Reti · UDP",
    stem: "UDP è preferibile a TCP quando:",
    options: [
      "serve ritrasmissione garantita e ordine",
      "serve il three-way handshake",
      "servono datagram a bassa latenza",
      "serve controllo di flusso end-to-end",
    ],
    correct: 2,
    explanation:
      "UDP è connectionless e tollera perdite; TCP offre affidabilità.",
  },
  {
    id: "tec-net-03",
    subject: "tecnico",
    topic: "Reti · HTTPS",
    stem: "HTTPS protegge principalmente:",
    options: [
      "da ogni SQL injection applicativa",
      "confidenzialità e integrità del canale",
      "dalla perdita di una chiavetta USB",
      "dalla cattiva usabilità del form",
    ],
    correct: 1,
    explanation:
      "TLS cifra/autentica il trasporto; non sostituisce i controlli applicativi.",
  },
  {
    id: "tec-net-04",
    subject: "tecnico",
    topic: "Reti · Firewall",
    stem: "Un firewall stateful inbound:",
    options: [
      "ferma da solo ogni SQL injection sul form",
      "elimina la necessità di auth applicativa",
      "non basta contro bug già raggiungibili",
      "sostituisce antivirus e MFA sugli endpoint",
    ],
    correct: 2,
    explanation:
      "Filtra flussi di rete; le vulnerabilità applicative richiedono altri controlli.",
  },
  {
    id: "tec-net-05",
    subject: "tecnico",
    topic: "Sicurezza · Ransomware",
    stem: "Un ransomware che cifra i file colpisce soprattutto:",
    options: [
      "solo la confidenzialità verso terzi",
      "la disponibilità (e spesso l’integrità)",
      "unicamente l’accessibilità WCAG",
      "il solo livello fisico del cablaggio",
    ],
    correct: 1,
    explanation:
      "File inutilizzabili → disponibilità; spesso anche integrità. La C se c’è esfiltrazione.",
  },
  {
    id: "tec-net-06",
    subject: "tecnico",
    topic: "Reti · NAT",
    stem: "Il NAT tipicamente:",
    options: [
      "risolve i nomi di dominio in indirizzi IP",
      "assegna certificati X.509 agli utenti SPID",
      "traduce indirizzi privati e pubblici al bordo",
      "orchestra i pod all’interno di Kubernetes",
    ],
    correct: 2,
    explanation:
      "Network Address Translation; DNS è un altro servizio.",
  },
  {
    id: "tec-net-07",
    subject: "tecnico",
    topic: "Sicurezza · MFA",
    stem: "La MFA riduce soprattutto il rischio di:",
    options: [
      "account compromesso con sola password nota",
      "errori di sintassi nelle query parametrizzate",
      "guasti hardware del disco di backup",
      "violazioni WCAG sul contrasto colori",
    ],
    correct: 0,
    explanation:
      "Secondo fattore (OTP, chiave, biometria…) mitiga il furto di password.",
  },
  {
    id: "tec-net-08",
    subject: "tecnico",
    topic: "Reti · Porte",
    stem: "HTTPS standard usa tipicamente la porta:",
    options: ["80/UDP", "22/TCP", "443/TCP", "53/TCP esclusiva"],
    correct: 2,
    explanation: "HTTPS → 443/TCP; HTTP 80; SSH 22; DNS 53.",
  },
  {
    id: "tec-virt-01",
    subject: "tecnico",
    topic: "Virt · Container",
    stem: "Un container, rispetto a una VM tipica:",
    options: [
      "esegue sempre un hypervisor tipo 1 dedicato",
      "condivide il kernel host senza SO guest pieno",
      "gestisce le CPU fisiche senza kernel host",
      "impedisce qualsiasi isolamento tra processi",
    ],
    correct: 1,
    explanation:
      "I container condividono il kernel; le VM hanno SO guest su hypervisor.",
  },
  {
    id: "tec-virt-02",
    subject: "tecnico",
    topic: "Virt · Scale-out",
    stem: "Scale-out di un microservizio significa tipicamente:",
    options: [
      "aggiungere solo RAM a un unico nodo",
      "aumentare il numero di repliche/istanze",
      "disabilitare i probe di liveness",
      "rimuovere l’ingress da Internet",
    ],
    correct: 1,
    explanation:
      "Orizzontale = più istanze; verticale = più risorse su un nodo.",
  },
  {
    id: "tec-virt-03",
    subject: "tecnico",
    topic: "Virt · Immagini",
    stem: "Buona pratica sulle immagini container:",
    options: [
      "includere chiavi SSH root nell’immagine",
      "eseguire tutto come root senza drop",
      "usare immagini minime, scansionate, senza secret",
      "pubblicare i secret nel registry pubblico",
    ],
    correct: 2,
    explanation:
      "Supply-chain e least privilege: immagini ridotte, scansione, secret fuori.",
  },
  {
    id: "tec-virt-04",
    subject: "tecnico",
    topic: "Virt · RPO",
    stem: "L’RPO misura:",
    options: [
      "il tempo massimo di ripristino del servizio (RTO)",
      "la massima perdita di dati tollerabile nel tempo",
      "il numero di container attivi nel cluster",
      "la banda del link WAN primario",
    ],
    correct: 1,
    explanation:
      "RPO = quanto indietro nei dati; RTO = quanto si può restare offline.",
  },
  {
    id: "tec-virt-05",
    subject: "tecnico",
    topic: "Virt · Hypervisor",
    stem: "Un hypervisor di tipo 1 tipicamente:",
    options: [
      "gira direttamente sull’hardware host",
      "è solo un’app utente in un SO desktop",
      "sostituisce DNS e DHCP nella LAN",
      "cifra obbligatoriamente tutto il BGP",
    ],
    correct: 0,
    explanation:
      "Type-1 bare metal vs type-2 hosted su SO ospitante.",
  },
  {
    id: "tec-acc-01",
    subject: "tecnico",
    topic: "WCAG",
    stem: "I quattro principi WCAG (POUR) sono:",
    options: [
      "portabile, open, unico, riusabile",
      "percepibile, utilizzabile, comprensibile, robusto",
      "pubblico, obbligatorio, urgente, ripetibile",
      "privato, opaco, unidirezionale, residenziale",
    ],
    correct: 1,
    explanation: "POUR: Perceivable, Operable, Understandable, Robust.",
  },
  {
    id: "tec-piano-01",
    subject: "tecnico",
    topic: "Piano triennale",
    stem: "«Cloud first» significa tipicamente che la PA:",
    options: [
      "vieta ogni elaborazione fuori sede",
      "valuta prioritariamente cloud qualificati",
      "obbliga laptop personali non gestiti",
      "elimina l’identità digitale",
    ],
    correct: 1,
    explanation:
      "Preferenza per cloud qualificato, non divieto assoluto di on-premise.",
  },
  {
    id: "tec-trap-01",
    subject: "tecnico",
    topic: "Firma + PEC",
    stem: "Documento firmato digitalmente e inviato via PEC:",
    options: [
      "è firmato due volte perché PEC = firma",
      "perde valore se non stampato in 24 ore",
      "combina sottoscrizione e prova di recapito",
      "non va conservato se la PEC è ok",
    ],
    correct: 2,
    explanation:
      "Firma = sottoscrizione; PEC = trasmissione. Funzioni distinte e complementari.",
  },
  {
    id: "tec-trap-02",
    subject: "tecnico",
    topic: "Open source AgID",
    stem: "La preferenza OS nelle linee guida AgID:",
    options: [
      "vieta sempre il software proprietario",
      "impone GPL su tutto il codice legacy",
      "va valutata; non è un ban del proprietario",
      "riguarda solo i SO dei PC desktop",
    ],
    correct: 2,
    explanation:
      "Favore per riuso/OS con analisi; non divieto assoluto del proprietario.",
  },
  {
    id: "tec-trap-03",
    subject: "tecnico",
    topic: "Integrità file",
    stem: "Per verificare che un file non sia stato alterato:",
    options: [
      "basta comprimerlo in ZIP",
      "si confronta con un hash di riferimento",
      "si cambia l’estensione in .txt",
      "si reinoltra in chiaro via HTTP",
    ],
    correct: 1,
    explanation:
      "Digest/hash (o firma) verificano l’integrità.",
  },
  {
    id: "ist-01",
    subject: "istituzionale",
    topic: "Autonomia PAT",
    stem: "L’autonomia speciale della PAT implica che:",
    options: [
      "non può adottare alcuna legge provinciale",
      "coincide di fatto con un Comune metropolitano",
      "ha poteri diversi da quelli delle Regioni ordinarie",
      "è priva sia di Consiglio sia di Giunta",
    ],
    correct: 2,
    explanation:
      "Statuto speciale = autonomia legislativa/amministrativa ampia e differenziata.",
  },
  {
    id: "ist-02",
    subject: "istituzionale",
    topic: "L.P. 2 e 3/2003",
    stem: "Le L.P. 2 e 3/2003 richiamate dal bando riguardano:",
    options: [
      "il codice penale dei reati informatici",
      "assetto istituzionale e organizzazione PAT",
      "il regolamento europeo eIDAS 2.0",
      "l’intero GDPR articolo per articolo",
    ],
    correct: 1,
    explanation:
      "Ordinamento statutario/organizzativo della Provincia, non privacy o penale.",
  },
  {
    id: "ist-03",
    subject: "istituzionale",
    topic: "PIAO",
    stem: "Il Piano anticorruzione/trasparenza della PAT:",
    options: [
      "sostituisce integralmente il CAD",
      "è adottato esclusivamente da AgID",
      "è allegato/integrato nel PIAO",
      "coincide con il solo CCPL",
    ],
    correct: 2,
    explanation:
      "Il bando lo richiama come allegato al PIAO.",
  },
  {
    id: "ist-04",
    subject: "istituzionale",
    topic: "RPCT vs RTD",
    stem: "RPCT rispetto al RTD:",
    options: [
      "è sempre la stessa persona per legge",
      "cura anticorruzione; RTD la digitalizzazione",
      "approva i certificati di firma dei cittadini",
      "sostituisce il Garante in giudizio",
    ],
    correct: 1,
    explanation:
      "Mandati diversi: trasparenza/anticorruzione vs transizione digitale.",
  },
  {
    id: "ist-05",
    subject: "istituzionale",
    topic: "FOIA",
    stem: "L’accesso civico generalizzato rispetto all’accesso L. 241:",
    options: [
      "consente di modificare i provvedimenti",
      "non richiede l’interesse diretto tipico",
      "sostituisce sempre le pubblicazioni",
      "è riservato ai soli dipendenti",
    ],
    correct: 1,
    explanation:
      "FOIA: chiunque, con limiti; L. 241: interesse diretto, concreto e attuale.",
  },
  {
    id: "ist-06",
    subject: "istituzionale",
    topic: "Regali",
    stem: "Regalo non modico da un fornitore IT: il dipendente tipicamente:",
    options: [
      "lo accetta se il software funziona",
      "lo condivide in ufficio senza traccia",
      "lo rifiuta o attiva la procedura prevista",
      "ne chiede il doppio al rinnovo",
    ],
    correct: 2,
    explanation:
      "I codici limitano i regali e prevedono rifiuto/consegna/segnalazione.",
  },
  {
    id: "ist-07",
    subject: "istituzionale",
    topic: "Disciplinare",
    stem: "Nel procedimento disciplinare è essenziale:",
    options: [
      "sanzione automatica senza difesa",
      "contraddittorio e proporzionalità",
      "pubblicazione su social personali",
      "autorizzazione preventiva di AgID",
    ],
    correct: 1,
    explanation:
      "Tipicità, contraddittorio e proporzionalità sono garanzie tipiche.",
  },
  {
    id: "ist-08",
    subject: "istituzionale",
    topic: "Credenziali",
    stem: "Condividere in chat pubblica una password di dominio viola tipicamente:",
    options: [
      "l’obbligo di pubblicazione open data",
      "il principio once only",
      "la regola ACID delle transazioni",
      "riservatezza e uso corretto degli strumenti",
    ],
    correct: 3,
    explanation:
      "Doveri di comportamento e sicurezza sulle credenziali.",
  },
  {
    id: "ist-09",
    subject: "istituzionale",
    topic: "Soglie bando",
    stem: "Soglia per superare scritta e orale (bando 2026):",
    options: ["21/30", "18/30", "24/30", "15/30"],
    correct: 1,
    explanation: "Almeno 18/30 per ciascuna prova; massimo finale 60.",
  },
  {
    id: "ist-10",
    subject: "istituzionale",
    topic: "Accesso civico semplice",
    stem: "L’accesso civico «semplice» serve a:",
    options: [
      "ottenere la pubblicazione di atti già dovuti",
      "accedere a qualsiasi atto senza alcun limite",
      "impugnare direttamente un’aggiudicazione al TAR",
      "sostituire in blocco l’accesso documentale 241",
    ],
    correct: 0,
    explanation:
      "Civico semplice = obbligo di pubblicazione inadempiuto; diverso da FOIA e da L. 241.",
  },
];

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Rimappa gli indici delle opzioni dopo lo shuffle. */
export function presentQuestion(q: QuizQuestion): QuizQuestion {
  const indexed = q.options.map((text, i) => ({ text, i }));
  const mixed = shuffle(indexed);
  const correct = mixed.findIndex((x) => x.i === q.correct) as 0 | 1 | 2 | 3;
  return {
    ...q,
    options: mixed.map((x) => x.text) as QuizQuestion["options"],
    correct,
  };
}

export function presentDeck(questions: QuizQuestion[]): QuizQuestion[] {
  return shuffle(questions).map(presentQuestion);
}

export function getQuizBySubject(subject: SubjectKey | "all"): QuizQuestion[] {
  if (subject === "all") return QUIZ_BANK;
  return QUIZ_BANK.filter((q) => q.subject === subject);
}

export function pickSimulationQuestions(): { quiz: QuizQuestion[] } {
  const tecnico = presentDeck(getQuizBySubject("tecnico")).slice(0, 18);
  return { quiz: tecnico };
}
