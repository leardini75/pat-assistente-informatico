import Link from "next/link";
import { Download, FolderOpen, Terminal } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ZIP_HREF = "/pat-assistente-informatico.zip";

export default function ScaricaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="mb-8 max-w-2xl">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Scarica l&apos;app
        </h1>
        <p className="mt-2 text-muted-foreground">
          Pacchetto completo da usare offline su un altro computer. Serve Node.js 20 o 22.
        </p>
      </header>

      <div className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm sm:p-6">
        <a
          href={ZIP_HREF}
          download="pat-assistente-informatico.zip"
          className={cn(buttonVariants({ size: "lg" }), "gap-2")}
        >
          <Download className="size-4" />
          Scarica ZIP
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          File: <code className="text-ink">pat-assistente-informatico.zip</code>
        </p>
      </div>

      <section className="mt-8 space-y-4">
        <h2 className="font-heading text-xl font-semibold text-ink">Come usarlo</h2>

        <article className="rounded-xl border border-border/80 bg-card/70 p-5">
          <div className="mb-2 flex items-center gap-2 text-primary">
            <FolderOpen className="size-4" />
            <h3 className="font-semibold text-ink">Windows (più semplice)</h3>
          </div>
          <ol className="list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>Estrai lo zip in una cartella senza spazi (es. <code>C:\pat-info</code>).</li>
            <li>Doppio clic su <code>avvia.bat</code>.</li>
            <li>Apri nel browser <code>http://127.0.0.1:43127</code>.</li>
          </ol>
        </article>

        <article className="rounded-xl border border-border/80 bg-card/70 p-5">
          <div className="mb-2 flex items-center gap-2 text-primary">
            <Terminal className="size-4" />
            <h3 className="font-semibold text-ink">Da terminale</h3>
          </div>
          <pre className="mt-2 overflow-x-auto rounded-lg bg-ink px-4 py-3 font-mono text-sm text-primary-foreground">
{`npm install
npm run dev`}
          </pre>
          <p className="mt-2 text-sm text-muted-foreground">
            Poi apri <code>http://127.0.0.1:43127</code>. Dettagli anche in{" "}
            <code>ISTRUZIONI-INSTALLAZIONE.txt</code>.
          </p>
        </article>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        Torna alla{" "}
        <Link href="/" className="underline underline-offset-2 hover:text-foreground">
          home
        </Link>
        .
      </p>
    </div>
  );
}
