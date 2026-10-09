import type { StudyTopic } from "./types";

export const ISTITUZIONALE_TOPICS: StudyTopic[] = [
  {
    id: "t-statuto",
    subject: "istituzionale",
    title: "Ordinamento statutario PAT",
    summary:
      "Autonomia speciale della Provincia autonoma di Trento, leggi provinciali 2 e 3 del 2003, organi e rapporti con gli enti locali: telaio tipico dell’orale istituzionale.",
    remember:
      "Apri con «autonomia speciale», cita L.P. 2 e 3/2003, collega organi → sussidiarietà → un esempio concreto di servizio (anche digitale) al cittadino.",
    pdfHref: "/studio-pdfs/t-statuto.pdf",
    points: [
      {
        id: "p-autonomia",
        title: "Autonomia speciale",
        lead:
          "La PAT non è una Regione a statuto ordinario: lo Statuto speciale le attribuisce poteri legislativi e amministrativi più ampi e differenziati.",
        body: [
          "La Provincia autonoma di Trento rientra nel sistema delle autonomie speciali italiane. A differenza delle Regioni a statuto ordinario, lo Statuto speciale (norme costituzionali di rango speciale) le riconosce competenze legislative e amministrative più estese e, in molte materie, una capacità di organizzazione interna autonoma. Per l’esame non serve citare articolo per articolo lo Statuto: conta capire che l’ordinamento provinciale è «speciale» e che le leggi provinciali possono disciplinare ampi settori della vita pubblica locale.",
          "L’autonomia si traduce in tre piani pratici: legislativo (leggi provinciali in materie attribuite), amministrativo (organizzazione degli uffici e dei servizi) e finanziario (risorse e programmazione proprie, nei limiti del quadro costituzionale e degli accordi con lo Stato). Per un Assistente informatico questo significa che piattaforme, regolamenti interni, piani digitali e regole di trasparenza si muovono spesso in un quadro provinciale, pur restando vincolati a norme nazionali e europee (CAD, GDPR, eIDAS, anticorruzione).",
          "In orale conviene evitare toni «separatisti» o slogan: l’autonomia speciale non significa indifferenza al diritto nazionale, ma poteri differenziati entro la Repubblica. Una frase efficace: «La PAT ha autonomia legislativa e amministrativa speciale; organizza i propri servizi, anche digitali, nel rispetto dello Statuto, delle L.P. di organizzazione e dei vincoli nazionali/UE».",
        ],
        terms: [
          {
            term: "Statuto speciale",
            def: "Fonte costituzionale che attribuisce a Trento (e Bolzano) poteri differenziati rispetto alle Regioni ordinarie.",
          },
          {
            term: "Autonomia legislativa",
            def: "Potere di adottare leggi provinciali nelle materie attribuite dallo Statuto e dalle norme di attuazione.",
          },
        ],
        examTip:
          "Quiz e orale: «poteri diversi dalle Regioni ordinarie», non «assenza di Consiglio/Giunta» né «coincide con un Comune».",
        refs: [
          "Statuto speciale per il Trentino-Alto Adige/Südtirol",
          "Programma orale bando Assistente informatico PAT",
        ],
      },
      {
        id: "p-lp-2-3",
        title: "L.P. 2 e 3 del 5 marzo 2003",
        lead:
          "Le due leggi provinciali del 5 marzo 2003 sono il riferimento organizzativo citato dal bando: assetto istituzionale e organizzazione dell’autonomia.",
        body: [
          "Il bando richiama espressamente le leggi provinciali 5 marzo 2003, n. 2 e n. 3. Non sono norme su privacy, firme o penale informatico: disciplinano l’assetto istituzionale della Provincia e l’organizzazione dell’autonomia, cioè come si articolano organi, funzioni e rapporti con il territorio. In prova, se ti chiedono «di cosa parlano le L.P. 2 e 3/2003?», la risposta corretta è l’ordinamento/organizzazione della PAT, non il CAD o il GDPR.",
          "Nella preparazione serve memorizzare la data e i numeri (5 marzo 2003, n. 2 e n. 3) e il ruolo: telaio dell’organizzazione provinciale post-riforma dell’autonomia. La L.P. 2 riguarda tipicamente l’assetto istituzionale; la L.P. 3 l’organizzazione dell’autonomia e i rapporti con gli enti locali. Non è necessario riprodurre l’intero testo: conta saperle collocare come fonti provinciali di organizzazione.",
          "Esempio da Assistente IT: quando l’ente progetta un servizio digitale «provinciale» (portale, anagrafe, protocollo, sistemi per Comunità o Comuni), lo fa dentro questo quadro organizzativo: chi decide, chi eroga, chi coordina. Le L.P. 2 e 3 spiegano il «chi» istituzionale; CAD e linee guida AgID spiegano il «come» digitale.",
        ],
        terms: [
          {
            term: "L.P. 5 marzo 2003, n. 2",
            def: "Legge provinciale sull’assetto istituzionale della PAT, richiamata nel programma d’esame.",
          },
          {
            term: "L.P. 5 marzo 2003, n. 3",
            def: "Legge provinciale sull’organizzazione dell’autonomia e sui rapporti con gli enti locali.",
          },
        ],
        examTip:
          "Schema risposta: citazione delle due L.P. → oggetto (assetto/organizzazione) → collegamento a organi o enti locali in una frase.",
        refs: ["L.P. 5 marzo 2003, n. 2", "L.P. 5 marzo 2003, n. 3"],
      },
      {
        id: "p-organi",
        title: "Organi e rapporti con gli enti locali",
        lead:
          "Consiglio, Presidente e Giunta sono gli organi di vertice; sul territorio contano Comuni e Comunità di valle.",
        body: [
          "Gli organi fondamentali della Provincia sono il Consiglio provinciale (organo legislativo e di indirizzo politico), il Presidente della Provincia (rappresentanza e direzione dell’esecutivo) e la Giunta provinciale (organo esecutivo collegiale). In orale basta una descrizione funzionale: il Consiglio adotta le leggi e gli atti di indirizzo; Presidente e Giunta governano l’amministrazione e attuano il programma. Non serve un organigramma completo dei dipartimenti.",
          "L’amministrazione provinciale si articola in strutture (dipartimenti, servizi, uffici) cui fanno capo anche le funzioni IT: help desk, gestione reti, applicazioni, sicurezza operativa. L’assistente informatico lavora in questa macchina amministrativa, non «fuori» dall’ordinamento: le decisioni su strumenti, fornitori e accessi seguono gerarchia, regolamenti e piani dell’ente.",
          "I rapporti con gli enti locali — Comuni e Comunità di valle — sono parte integrante dell’ordinamento trentino. Molti servizi al cittadino nascono da collaborazione o riparto di funzioni: sportelli, anagrafiche, sistemi informativi condivisi, supporto tecnologico. Un esempio concreto: un applicativo gestito a livello provinciale usato dai Comuni, oppure infrastrutture e standard comuni per l’interoperabilità territoriale.",
        ],
        terms: [
          {
            term: "Consiglio provinciale",
            def: "Organo legislativo e di indirizzo della PAT.",
          },
          {
            term: "Giunta provinciale",
            def: "Organo esecutivo collegiale che attua l’indirizzo politico-amministrativo.",
          },
          {
            term: "Comunità di valle",
            def: "Enti intermedi del territorio trentino che collaborano/ripartiscono funzioni con Provincia e Comuni.",
          },
        ],
        examTip:
          "Elenca i tre organi in una frase, poi aggiungi «rapporti con Comuni e Comunità» e un esempio di servizio condiviso.",
      },
      {
        id: "p-competenze",
        title: "Competenze e sussidiarietà",
        lead:
          "Le competenze provinciali e locali si ripartiscono secondo specialità e sussidiarietà: il livello più vicino al cittadino interviene quando è adeguato.",
        body: [
          "Oltre agli organi, l’orale può chiedere il riparto di funzioni: materie di competenza provinciale (proprie o differenziate rispetto allo Stato) e funzioni esercitate da Comuni e Comunità. Non è richiesta una mappa enciclopedica: conta il principio che l’autonomia speciale attribuisce alla PAT ampi spazi di disciplina e che l’organizzazione territoriale distribuisce i compiti sul territorio.",
          "Il principio di sussidiarietà orienta l’allocazione delle funzioni: si privilegia il livello di governo più vicino ai cittadini quando è in grado di svolgere efficacemente il compito; il livello superiore interviene per esigenze di unitarietà, equità o capacità. In Trentino questo principio si collega al ruolo delle Comunità di valle e dei Comuni rispetto alla Provincia.",
          "Per il profilo IT la sussidiarietà ha un volto operativo: chi ospita il dato, chi gestisce l’applicativo, chi autorizza gli accessi, chi pubblica in trasparenza. Un sistema «centrale» provinciale può supportare enti locali senza sostituirne le responsabilità amministrative; viceversa, soluzioni locali devono restare interoperabili e coerenti con standard e obblighi dell’ente.",
        ],
        terms: [
          {
            term: "Sussidiarietà",
            def: "Principio per cui le funzioni sono esercitate dal livello più vicino al cittadino, compatibilmente con efficacia e unitarietà.",
          },
          {
            term: "Competenza propria",
            def: "Ambito in cui la Provincia legifera e amministra in via autonoma, nei limiti dello Statuto e delle norme di attuazione.",
          },
        ],
        examTip:
          "Collega sussidiarietà → enti locali → esempio IT (piattaforma provinciale a supporto dei Comuni).",
      },
      {
        id: "p-orale-statuto",
        title: "Come rispondere all’orale",
        lead:
          "Meglio una catena logica breve che un elenco nozionistico: autonomia → L.P. → organi → servizio al cittadino.",
        body: [
          "Struttura consigliata in 60–90 secondi: (1) «La PAT gode di autonomia speciale rispetto alle Regioni ordinarie»; (2) «Le L.P. 2 e 3 del 5 marzo 2003 disciplinano assetto istituzionale e organizzazione dell’autonomia»; (3) «Organi di vertice: Consiglio, Presidente, Giunta; sul territorio Comuni e Comunità secondo sussidiarietà»; (4) chiusura con un esempio concreto.",
          "Esempio di chiusura IT: «Questa organizzazione consente di progettare servizi digitali provinciali — ad esempio portali o sistemi condivisi con i Comuni — rispettando trasparenza, anticorruzione e regole nazionali come il CAD». Così dimostri di non ripetere definizioni a vuoto, ma di collegare diritto e lavoro quotidiano.",
          "Errori da evitare: confondere L.P. 2/3 con GDPR o eIDAS; dire che la PAT «non ha poteri legislativi»; elencare dieci uffici senza spiegare il ruolo degli organi; dimenticare enti locali e sussidiarietà. Se la commissione approfondisce, riparti dal principio (autonomia/sussidiarietà) e scendi all’esempio, non al contrario.",
        ],
        examTip:
          "Memorizza la «scaletta a quattro passi» e un solo esempio IT: vale più di dieci definizioni sparse.",
        refs: ["Programma orale bando Assistente informatico PAT 2026"],
      },
    ],
  },
  {
    id: "t-ptpct",
    subject: "istituzionale",
    title: "Anticorruzione e trasparenza (PIAO)",
    summary:
      "PIAO provinciale, allegato anticorruzione/trasparenza, ruolo dell’RPCT, misure tipiche, accessi e conflitti di interesse — con esempi per chi lavora sui sistemi.",
    remember:
      "Schema: PIAO → allegato anticorruzione/trasparenza → RPCT → misura concreta + esempio IT (accessi, log, fornitori, pubblicazione dati).",
    pdfHref: "/studio-pdfs/t-ptpct.pdf",
    points: [
      {
        id: "p-piao",
        title: "PIAO e allegato anticorruzione/trasparenza",
        lead:
          "Il PIAO integra la pianificazione dell’ente; il Piano per la prevenzione della corruzione e per la trasparenza ne è allegato/sezione sostanziale.",
        body: [
          "Il PIAO (Piano Integrato di Attività e Organizzazione) è lo strumento con cui molte amministrazioni, inclusa la PAT nel quadro richiamato dal bando, riuniscono programmazione di attività, organizzazione, performance e — in allegato o sezione dedicata — prevenzione della corruzione e trasparenza. Non sostituisce il CAD né il contratto collettivo: è un piano di governance interna.",
          "Il «Piano anticorruzione e trasparenza» della Provincia va quindi presentato come parte del PIAO: definisce analisi dei rischi, misure preventive, obblighi di pubblicazione, monitoraggio e responsabilità. In quiz, la risposta corretta è che tale piano è allegato/integrato nel PIAO, non che lo adotta AgID o che coincide con il CCPL.",
          "Per l’assistente informatico il PIAO/allegato conta perché molte misure toccano i sistemi: censimento delle banche dati, regole di accesso, tracciatura, pubblicazione di documenti e dataset, gestione delle segnalazioni. Conoscere l’esistenza del piano e il suo collegamento al PIAO è il minimo per l’orale; saper fare un esempio operativo è il valore aggiunto.",
        ],
        terms: [
          {
            term: "PIAO",
            def: "Piano Integrato di Attività e Organizzazione dell’ente.",
          },
          {
            term: "PTPCT / sezione anticorruzione-trasparenza",
            def: "Documento (allegato o sezione del PIAO) che programma misure anticorruzione e obblighi di trasparenza.",
          },
        ],
        examTip:
          "Prima frase: «Il piano anticorruzione/trasparenza è allegato al PIAO provinciale»; poi RPCT e una misura.",
        refs: [
          "Quadro nazionale sul PIAO (D.L. 80/2021 e atti successivi)",
          "PIAO / allegato anticorruzione e trasparenza PAT",
        ],
      },
      {
        id: "p-rpct",
        title: "RPCT — Responsabile della prevenzione della corruzione e della trasparenza",
        lead:
          "L’RPCT coordina il sistema di prevenzione e trasparenza; non va confuso con l’RTD.",
        body: [
          "L’RPCT (Responsabile della Prevenzione della Corruzione e della Trasparenza) è la figura di riferimento per predisporre/aggiornare le misure, vigilare sull’attuazione, promuovere la trasparenza e gestire i flussi legati a segnalazioni e pubblicazioni, secondo il modello nazionale adattato all’ente. Non «sostituisce» dirigenti e dipendenti: ciascuno resta responsabile dei propri adempimenti.",
          "Distinzione d’esame: RPCT ≠ RTD. L’RTD (Responsabile per la Transizione Digitale) guida digitalizzazione, interoperabilità e innovazione dei servizi; l’RPCT cura anticorruzione e trasparenza. Possono collaborare (es. pubblicazione dati, sicurezza degli accessi, registro trattamenti collegato a rischi), ma i mandati restano distinti. Non sono la stessa persona «per legge».",
          "Esempio IT: se emerge un uso anomalo di utenze privilegiate su un gestionale di gare, l’assistente segnala al responsabile gerarchico/strutture competenti; l’RPCT interviene sul piano delle misure di prevenzione e degli obblighi di trasparenza/controllo, mentre eventuali aspetti tecnici di hardening restano al team IT/sicurezza. In orale basta mostrare di conoscere il canale e la differenza di ruoli.",
        ],
        terms: [
          {
            term: "RPCT",
            def: "Responsabile della Prevenzione della Corruzione e della Trasparenza.",
          },
          {
            term: "RTD",
            def: "Responsabile per la Transizione Digitale (CAD): digitalizzazione dell’ente, non anticorruzione.",
          },
        ],
        examTip:
          "Frase pronto-uso: «RPCT anticorruzione/trasparenza; RTD digitalizzazione — mandati diversi, possibile collaborazione».",
      },
      {
        id: "p-misure",
        title: "Misure tipiche: mappatura, rotazione, whistleblowing, formazione",
        lead:
          "Le misure preventive tipiche vanno spiegate con esempi concreti, soprattutto su accessi e processi IT.",
        body: [
          "La mappatura dei processi e dei rischi individua dove possono annidarsi corruzione, abuso d’ufficio o cattiva gestione (appalti IT, gestione utenze, affidamenti, liquidazioni, accesso a banche dati sensibili). Per chi lavora sui sistemi, «mappare» significa anche sapere quali applicativi toccano procedure a rischio e quali privilegi esistono.",
          "La rotazione del personale (ove possibile) riduce la cristallizzazione di poteri su pratiche sensibili; in ambito IT spesso si traduce in segregazione delle funzioni, rotazione su incarichi di amministrazione di sistemi critici, dual control su operazioni privilegiate, revisioni periodiche dei privilegi. Dove la rotazione classica è difficile (skill rare), si rafforzano controlli compensativi: log, approvazioni a quattro occhi, least privilege.",
          "Whistleblowing: canali di segnalazione di illeciti con tutele per il segnalante (riservatezza, divieto di ritorsioni), oggi anche alla luce della disciplina nazionale di recepimento UE. Formazione e monitoraggio chiudono il ciclo: il dipendente deve conoscere le misure; l’ente verifica l’attuazione. Esempio orale: «Su un applicativo di protocollo, misura = profili minimi, log degli accessi, formazione sul divieto di consultazioni personali, canale di segnalazione se si sospetta abuso».",
        ],
        terms: [
          {
            term: "Mappatura dei rischi",
            def: "Analisi dei processi dell’ente per individuare aree e eventi di rischio corruttivo.",
          },
          {
            term: "Whistleblowing",
            def: "Segnalazione di illeciti tramite canali protetti, con tutela del segnalante.",
          },
          {
            term: "Least privilege",
            def: "Principio per cui a ciascun utente si assegnano solo i permessi necessari al compito.",
          },
        ],
        examTip:
          "Elenca almeno tre misure e legane una al lavoro IT (accessi, log, fornitori).",
        refs: [
          "L. 190/2012 e aggiornamenti",
          "Disciplina whistleblowing (D.Lgs. 24/2023)",
        ],
      },
      {
        id: "p-accessi",
        title: "Trasparenza e i tre accessi",
        lead:
          "Obblighi di pubblicazione e tre vie di accesso: documentale (L. 241), civico semplice, civico generalizzato (FOIA).",
        body: [
          "La trasparenza impone di pubblicare in «Amministrazione trasparente» (o sezioni equivalenti) atti, dati e informazioni previsti dalla legge: organizzazione, bandi, pagamenti, incarichi, ecc. La pubblicazione riduce asimmetrie informative e supporta il controllo sociale. L’IT spesso abilita CMS, open data e flussi automatici di pubblicazione: errori tecnici possono diventare inadempienze di trasparenza.",
          "Accesso documentale (L. 241/1990): chi ha un interesse diretto, concreto e attuale può chiedere documenti del procedimento che lo riguarda, con i limiti di legge (es. segreti, privacy di terzi). Non è un diritto «di chiunque» a tutto il fascicolo pubblico.",
          "Accesso civico semplice: serve a ottenere la pubblicazione di documenti/dati che l’amministrazione avrebbe già dovuto pubblicare e non ha pubblicato. Accesso civico generalizzato (FOIA, D.Lgs. 33/2013 come novellato): chiunque può chiedere dati e documenti ulteriori rispetto a quelli oggetto di pubblicazione obbligatoria, salvo limiti (sicurezza, segreto, protezione dati, ecc.). In orale distingue sempre i tre: interesse qualificato (241) vs obbligo di pubblicazione inadempiuto (civico semplice) vs accesso generalizzato con limiti (FOIA).",
        ],
        terms: [
          {
            term: "Accesso documentale",
            def: "Accesso L. 241/1990 fondato su interesse diretto, concreto e attuale.",
          },
          {
            term: "Accesso civico semplice",
            def: "Richiesta di pubblicazione di ciò che doveva già essere pubblicato.",
          },
          {
            term: "FOIA / accesso civico generalizzato",
            def: "Accesso di chiunque a dati/documenti ulteriori, entro i limiti di legge.",
          },
        ],
        examTip:
          "Tabella mentale a tre colonne; una frase per tipo. Non dire che il FOIA «cancella» la 241 o le pubblicazioni.",
        refs: ["L. 241/1990", "D.Lgs. 33/2013 e s.m.i."],
      },
      {
        id: "p-conflitto",
        title: "Conflitto di interessi, inconferibilità e incompatibilità",
        lead:
          "Il conflitto di interessi e i regimi di inconferibilità/incompatibilità proteggono imparzialità e credibilità dell’azione amministrativa.",
        body: [
          "Esiste conflitto di interessi quando un interesse privato (proprio, familiare, di terzi legati) può interferire con il dovere di imparzialità. Va dichiarato e gestito: astensione, segnalazione al responsabile, riassegnazione della pratica. In ambito IT esempi tipici: partecipare alla valutazione di un software venduto da un parente; amministrare un sistema e insieme gestire il contratto con il fornitore senza controlli; usare informazioni riservate di gara per favorire un ex collega consulente.",
          "Inconferibilità e incompatibilità riguardano soprattutto incarichi dirigenziali e di vertice (e fattispecie normate): certi precedenti incarichi privati o politici possono rendere un incarico pubblico inconferibile (non attribuibile) o incompatibile (non cumulabile). Anche se l’assistente non è dirigente, in orale può essere chiesto il concetto: tutela preventiva dell’imparzialità prima e durante l’incarico.",
          "Collegamento operativo: registri delle dichiarazioni, controlli a campione, segregazione tra chi progetta requisiti di gara IT e chi ha rapporti personali con fornitori, tracciamento delle utenze. Se dubiti, non «risolvi da solo»: dichiara e chiedi indicazioni al responsabile. È una risposta da commissione: mostra prudenza e conoscenza delle procedure.",
        ],
        terms: [
          {
            term: "Conflitto di interessi",
            def: "Situazione in cui un interesse privato può compromettere l’imparzialità del dipendente/incaricato.",
          },
          {
            term: "Inconferibilità",
            def: "Preclusione ad assumere un incarico pubblico in presenza di determinate condizioni previste dalla legge.",
          },
          {
            term: "Incompatibilità",
            def: "Divieto di cumulare certi incarichi o attività con l’incarico pubblico rivestito.",
          },
        ],
        examTip:
          "Definisci il conflitto in una riga, fai un esempio IT, chiudi con dichiarazione/astensione.",
        refs: ["D.Lgs. 39/2013", "Codice di comportamento PAT / misure PIAO"],
      },
    ],
  },
  {
    id: "t-comportamento",
    subject: "istituzionale",
    title: "Codice di comportamento e disciplinare",
    summary:
      "Delibera G.P. 1514/2024, elementi di CCPL, responsabilità disciplinare, codice anti-molestie e doveri specifici per chi gestisce sistemi e dati.",
    remember:
      "Collega dovere di comportamento → possibile illecito disciplinare → garanzie del procedimento. Se IT: riservatezza, uso degli strumenti, segnalazione incidenti.",
    pdfHref: "/studio-pdfs/t-comportamento.pdf",
    points: [
      {
        id: "p-codice-1514",
        title: "Codice di comportamento (delibera G.P. 1514/2024)",
        lead:
          "Il codice provinciale precisa doveri di imparzialità, regali, rapporti con il pubblico, uso di beni e informazioni, anche sui social.",
        body: [
          "La delibera della Giunta provinciale n. 1514/2024 adotta/aggiorna il codice di comportamento dei dipendenti provinciali, in coerenza con i principi del codice nazionale (D.P.R. 62/2013 e s.m.i.) e con le specificità dell’ente. Non è un regolamento tecnico IT: è il catalogo dei doveri quotidiani di correttezza, lealtà, imparzialità e buon andamento.",
          "Temi tipici da ricordare: regali e altre utilità (di regola solo quelli d’uso di modico valore entro le soglie/regole interne; un regalo non modico da un fornitore IT si rifiuta o si attiva la procedura prevista, non si «divide in ufficio»); rapporti con il pubblico (cortesia, completezza delle informazioni, pari trattamento); uso di beni e strumentazioni dell’ente per finalità di servizio; tutela delle informazioni di cui si viene a conoscenza per ragioni d’ufficio.",
          "I social e la comunicazione online rientrano nel perimetro: il dipendente non deve ledere il prestigio dell’amministrazione, rivelare dati riservati o assumere comportamenti che confondano opinioni personali e posizione istituzionale quando parla «in quanto dipendente». Esempio: pubblicare screenshot di una pratica o di una console di amministrazione è tipicamente vietato, anche se «per scherzo».",
        ],
        terms: [
          {
            term: "Delibera G.P. 1514/2024",
            def: "Atto della Giunta provinciale che disciplina il codice di comportamento dei dipendenti PAT richiamato dal bando.",
          },
          {
            term: "Modico valore",
            def: "Soglia/uso consentito per regali di cortesia entro i limiti del codice; oltre si rifiuta o si segue la procedura.",
          },
        ],
        examTip:
          "Cita la delibera 1514/2024 e tocca almeno regali, pubblico, beni/informazioni, social.",
        refs: [
          "Delibera G.P. n. 1514/2024",
          "D.P.R. 62/2013 e s.m.i. (codice nazionale)",
        ],
      },
      {
        id: "p-ccpl",
        title: "CCPL essenziale",
        lead:
          "Il contratto collettivo provinciale di lavoro inquadra il rapporto di lavoro: diritti, doveri, orario, istituti e relazioni sindacali — a livello essenziale per l’orale.",
        body: [
          "Il CCPL (Contratto Collettivo Provinciale di Lavoro) del personale provinciale disciplina gli istituti fondamentali del rapporto di lavoro: inquadramento, mansioni, orario, ferie e permessi, trattamento economico nei limiti del contratto, diritti sindacali, procedimenti collegati al rapporto di lavoro. Per l’esame da Assistente non serve conoscere tabelle retributive: serve sapere che esiste un telaio contrattuale che affianca legge e codice di comportamento.",
          "Rapporto tra fonti: la legge e il codice di comportamento fissano doveri di condotta e imparzialità; il CCPL regola il rapporto di lavoro e, insieme al codice disciplinare, le conseguenze sul piano disciplinare e organizzativo. Una violazione del codice di comportamento può rilevare disciplinarmente secondo le procedure previste.",
          "Esempio pratico: uso improprio dell’orario di lavoro per attività personali sui sistemi dell’ente, o rifiuto ingiustificato di rispettare procedure di sicurezza previste dall’amministrazione, possono toccare insieme dovere di diligenza (contratto) e doveri di comportamento (codice). In orale, una frase sul CCPL come «fonte del rapporto di lavoro provinciale» basta se poi colleghi al disciplinare.",
        ],
        terms: [
          {
            term: "CCPL",
            def: "Contratto Collettivo Provinciale di Lavoro del personale della PAT.",
          },
          {
            term: "Inquadramento",
            def: "Collocazione del dipendente in area/profilo professionale secondo il contratto.",
          },
        ],
        examTip:
          "Non entrare in dettagli retributivi: definisci il CCPL e collegalo a doveri + procedimento disciplinare.",
      },
      {
        id: "p-disciplinare",
        title: "Responsabilità disciplinare",
        lead:
          "Tipicità delle sanzioni, contraddittorio e proporzionalità sono le tre parole-chiave del procedimento disciplinare.",
        body: [
          "La responsabilità disciplinare nasce dalla violazione di doveri di servizio previsti da legge, contratto e codice di comportamento. Le sanzioni devono essere tipiche: cioè previste dall’ordinamento (richiamo, censura, multa, sospensione, licenziamento, ecc. secondo i casi), non inventate dal responsabile del procedimento. Serve contestazione degli addebiti in modo chiaro e tempestivo.",
          "Il contraddittorio è garanzia essenziale: il dipendente deve poter conoscere gli addebiti, presentare difese, produrre documenti, farsi assistere. Non esiste «sanzione automatica senza difesa». La proporzionalità impone di graduare la sanzione alla gravità del fatto, alle circostanze, all’eventuale recidiva e all’intensità del danno o del pericolo per l’ente e i cittadini.",
          "Esempio IT: la prima condivisione colposa di una password in chat interna non confidenziale non si tratta come un licenziamento «automatico» senza istruttoria; al tempo stesso, l’esfiltrazione dolosa di dati o l’abuso reiterato di privilegi può giustificare provvedimenti gravi. In orale insiste su: tipicità → contraddittorio → proporzionalità.",
        ],
        terms: [
          {
            term: "Tipicità",
            def: "Le sanzioni e le fattispecie rilevanti devono essere previste dall’ordinamento disciplinare/contrattuale.",
          },
          {
            term: "Contraddittorio",
            def: "Diritto del dipendente di difendersi rispetto agli addebiti contestati.",
          },
          {
            term: "Proporzionalità",
            def: "Adeguatezza della sanzione alla gravità del fatto e alle circostanze.",
          },
        ],
        examTip:
          "Se il quiz parla di procedimento disciplinare, cerca «contraddittorio e proporzionalità».",
      },
      {
        id: "p-molestie",
        title: "Codice di condotta contro le molestie",
        lead:
          "Prevenzione, emersione, tutela della persona segnalante e divieto di ritorsioni: clima organizzativo e dignità della persona.",
        body: [
          "Il codice di condotta contro le molestie (richiamato dal programma d’esame insieme al codice di comportamento) mira a prevenire comportamenti lesivi della dignità della persona — molestie sessuali, mobbing, discriminazioni — e a favorire segnalazione e intervento dell’ente. Non è un tema «extra»: fa parte dei doveri di ambiente di lavoro sicuro e rispettoso.",
          "Il dipendente deve conoscere i canali di segnalazione previsti, mantenere la riservatezza sulle informazioni di cui viene a conoscenza, collaborare alle verifiche e astenersi da ritorsioni o secondary victimization verso chi segnala o testimonia. Anche chi non è vittima ha doveri di non partecipare a climates ostili e di non minimizzare fatti rilevanti.",
          "In un ufficio tecnico o CED il rispetto del codice si traduce in professionalità quotidiana: linguaggio, scherzi, chat di gruppo, gestione dei turni e dei carichi. La competenza tecnica non giustifica comportamenti lesivi. In orale: finalità (prevenzione/tutela) → canali → riservatezza → no ritorsioni.",
        ],
        terms: [
          {
            term: "Molestia",
            def: "Comportamento indesiderato che lede dignità, libertà o serenità della persona sul lavoro.",
          },
          {
            term: "Divieto di ritorsioni",
            def: "Protezione di chi segnala o collabora alle verifiche da misure punitive o discriminatorie.",
          },
        ],
        examTip:
          "Cinque parole: prevenzione, canali, tutela, riservatezza, no ritorsioni.",
      },
      {
        id: "p-doveri-it",
        title: "Doveri IT: riservatezza, strumenti, incidenti",
        lead:
          "Per l’assistente informatico i doveri di comportamento si concentrano su dati, credenziali, uso degli strumenti e segnalazione degli incidenti.",
        body: [
          "Riservatezza: chi amministra sistemi vede spesso dati personali, sanitari, tributari, contenuti di ticket e configurazioni di sicurezza. Vale il divieto di consultazioni personali («curiosare» pratiche di conoscenti), di estrazioni non autorizzate, di condividere credenziali o screenshot sensibili. Le password di dominio in chat pubblica o in ticket aperti violano tipicamente riservatezza e uso corretto degli strumenti.",
          "Uso degli strumenti: PC, server, cloud, caselle di posta, VPN e account di amministrazione sono beni dell’ente. Servono all’attività di servizio; installazioni abusive, mining, navigazione illecita, bypass dei controlli di sicurezza o uso di utenze condivise «per comodità» espongono a rischio disciplinare e di sicurezza. Least privilege e tracciabilità non sono solo buone pratiche tecniche: sono anche adempimenti di comportamento.",
          "Incidenti e vulnerabilità: sospetto phishing, ransomware, perdita di device, accesso anomalo, errore che espone dati vanno segnalati subito ai canali previsti (help desk/security/responsabile), senza nascondere l’accaduto e senza avviare «rimedi fai-da-te» che cancellano le prove. In orale puoi chiudere così: «Riservatezza dei dati, uso corretto degli strumenti, segnalazione tempestiva degli incidenti: è il nucleo comportamentale del profilo IT».",
        ],
        terms: [
          {
            term: "Utenza privilegiata",
            def: "Account con elevati poteri di amministrazione; richiede tutele rafforzate e divieto di condivisione.",
          },
          {
            term: "Incidente di sicurezza",
            def: "Evento che compromette o minaccia riservatezza, integrità o disponibilità di sistemi/dati; va segnalato.",
          },
        ],
        examTip:
          "Porta sempre un esempio concreto (password, log, phishing). Collega codice di comportamento → rischio disciplinare → procedura di segnalazione.",
        refs: [
          "Codice di comportamento PAT (delibera G.P. 1514/2024)",
          "Policy interne su accettabile use e incident response (ove adottate)",
        ],
      },
    ],
  },
];
