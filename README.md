# PAT Info · Assistente informatico

Web app per studiare e esercitarsi al **concorso pubblico per esami** della Provincia autonoma di Trento per **n. 3 assunzioni** di **Assistente informatico/statistico – indirizzo informatico**, area degli istruttori, livello base, 1^ posizione retributiva.

## Cosa include

- **Schede di studio** sul programma ufficiale 2026 (CAD, documento digitale, riuso AgID, eIDAS 2.0, cloud, interoperabilità, SQL, reti/OSI, virtualizzazione) e sulle materie orali (Statuto PAT, PIAO/anticorruzione, codice di comportamento)
- **Banca quiz** a risposta multipla con spiegazioni
- **Allenamento risposte sintetiche** (limite 1800 battute, schemi modello, autovalutazione)
- **Simulazione prova scritta**: 18 quiz + 4 sintetiche, timer 120 minuti, soglia 18/30
- **Tracce e fonti**: bando 2026, Assistente 2022, prove Funzionario informatico PAT 2025
- Progressi salvati in locale nel browser

## Avvio locale

Su Windows puoi anche fare doppio clic su `avvia.bat` (cartella senza spazi, es. `C:\pat-info`).

```bash
npm install
npm run dev
```

Apri [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Pacchetto ZIP

Dalla pagina [Scarica](http://127.0.0.1:43127/scarica) oppure:

```bash
npm run zip
```

Genera `public/pat-assistente-informatico.zip` (senza `node_modules` e `.next`).

## Script

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Server di sviluppo (porta 43127) |
| `npm run build` | Build di produzione |
| `npm run start` | Avvio della build |
| `npm run lint` | ESLint |
| `npm run zip` | Rigenera lo zip scaricabile |

## Fonti

- [Bando ufficiale 2026](https://www.provincia.tn.it/Amministrazione/Lavora-con-noi/Concorso-Assistente-informatico-statistico-ind.-informatico)
- Prove pubbliche del [concorso Funzionario informatico/statistico 2025](https://www.provincia.tn.it/Amministrazione/Lavora-con-noi/Concorso-pubblico-per-6-Funzionari-indirizzo-informatico-statistico) (profilo affine, livello superiore)

## Nota

Materiale di studio **non ufficiale**. Il diario delle prove sarà pubblicato il **21 dicembre 2026**. Per date, criteri e documenti aggiornati consulta sempre il sito della Provincia.
