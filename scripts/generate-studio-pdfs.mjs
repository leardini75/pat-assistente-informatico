/**
 * Genera PDF scaricabili per ogni argomento Studio + dispense complete.
 * Uso: node scripts/generate-studio-pdfs.mjs
 *
 * Carica i topic via tsx/register oppure, in fallback, esegue un piccolo
 * bridge TypeScript con npx tsx.
 */
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "studio-pdfs");
const bridge = path.join(__dirname, "_studio-topics-bridge.ts");

fs.mkdirSync(outDir, { recursive: true });

// Bridge temporaneo: esporta JSON dei topic
fs.writeFileSync(
  bridge,
  `
import { STUDY_TOPICS } from "../src/lib/studio";
process.stdout.write(JSON.stringify(STUDY_TOPICS));
`
);

const result = spawnSync(
  "npx",
  ["tsx", bridge],
  { cwd: root, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 }
);

fs.unlinkSync(bridge);

if (result.status !== 0) {
  console.error(result.stderr || result.stdout);
  process.exit(result.status ?? 1);
}

const topics = JSON.parse(result.stdout);
const require = createRequire(import.meta.url);
const PDFDocument = require("pdfkit");

function writeTopicPdf(topic, filePath, { cover = true } = {}) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      margin: 50,
      size: "A4",
      info: {
        Title: topic.title,
        Author: "PAT Assistente informatico — schede di studio",
        Subject: topic.summary,
      },
    });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

    if (cover) {
      doc
        .fillColor("#1a2332")
        .font("Helvetica-Bold")
        .fontSize(11)
        .text("PAT · Assistente informatico / statistico", { align: "left" });
      doc
        .moveDown(0.3)
        .fillColor("#5c6b7a")
        .font("Helvetica")
        .fontSize(9)
        .text(
          topic.subject === "tecnico"
            ? "Materia tecnico-informatica"
            : "Materia istituzionale (orale)"
        );
      doc.moveDown(1.2);
      doc
        .fillColor("#0f172a")
        .font("Helvetica-Bold")
        .fontSize(20)
        .text(topic.title, { width: pageWidth });
      doc.moveDown(0.6);
      doc
        .fillColor("#334155")
        .font("Helvetica")
        .fontSize(11)
        .text(topic.summary, { width: pageWidth, align: "justify" });
      doc.moveDown(0.8);
      doc
        .fillColor("#0f172a")
        .font("Helvetica-Bold")
        .fontSize(10)
        .text("Da ricordare");
      doc
        .fillColor("#475569")
        .font("Helvetica-Oblique")
        .fontSize(10)
        .text(topic.remember, { width: pageWidth, align: "justify" });
      doc.moveDown(1);
      doc
        .strokeColor("#cbd5e1")
        .moveTo(doc.page.margins.left, doc.y)
        .lineTo(doc.page.width - doc.page.margins.right, doc.y)
        .stroke();
      doc.moveDown(1);
    }

    topic.points.forEach((point, idx) => {
      if (doc.y > doc.page.height - 140) doc.addPage();

      doc
        .fillColor("#0b3d5c")
        .font("Helvetica-Bold")
        .fontSize(13)
        .text(`${idx + 1}. ${point.title}`, { width: pageWidth });
      doc.moveDown(0.35);
      doc
        .fillColor("#1e293b")
        .font("Helvetica-Bold")
        .fontSize(10)
        .text(point.lead, { width: pageWidth, align: "justify" });
      doc.moveDown(0.4);

      for (const para of point.body) {
        if (doc.y > doc.page.height - 100) doc.addPage();
        doc
          .fillColor("#334155")
          .font("Helvetica")
          .fontSize(10)
          .text(para, { width: pageWidth, align: "justify" });
        doc.moveDown(0.35);
      }

      if (point.terms?.length) {
        if (doc.y > doc.page.height - 120) doc.addPage();
        doc
          .fillColor("#0f172a")
          .font("Helvetica-Bold")
          .fontSize(10)
          .text("Glossario");
        doc.moveDown(0.25);
        for (const t of point.terms) {
          if (doc.y > doc.page.height - 80) doc.addPage();
          doc
            .fillColor("#0f172a")
            .font("Helvetica-Bold")
            .fontSize(9)
            .text(t.term, { continued: true, width: pageWidth });
          doc
            .fillColor("#475569")
            .font("Helvetica")
            .text(` — ${t.def}`, { width: pageWidth });
          doc.moveDown(0.2);
        }
        doc.moveDown(0.2);
      }

      if (doc.y > doc.page.height - 90) doc.addPage();
      doc
        .fillColor("#1e3a5f")
        .font("Helvetica-Bold")
        .fontSize(9)
        .text("In prova: ", { continued: true, width: pageWidth });
      doc.font("Helvetica").text(point.examTip, { width: pageWidth });

      if (point.refs?.length) {
        doc
          .fillColor("#64748b")
          .font("Helvetica")
          .fontSize(8)
          .text(`Riferimenti: ${point.refs.join(" · ")}`, {
            width: pageWidth,
          });
      }
      doc.moveDown(1.1);
    });

    doc.end();
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

function writeCombinedPdf(topics, filePath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      margin: 50,
      size: "A4",
      info: {
        Title: "Dispense complete — Studio PAT Assistente informatico",
        Author: "PAT Assistente informatico — schede di studio",
      },
    });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);
    const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

    doc
      .fillColor("#0f172a")
      .font("Helvetica-Bold")
      .fontSize(22)
      .text("Dispense complete di studio", { width: pageWidth });
    doc.moveDown(0.4);
    doc
      .fillColor("#475569")
      .font("Helvetica")
      .fontSize(11)
      .text(
        "Materiale per prova scritta e orale — Assistente informatico / statistico, Provincia autonoma di Trento.",
        { width: pageWidth }
      );
    doc.moveDown(0.6);
    doc
      .fillColor("#334155")
      .fontSize(10)
      .text(`${topics.length} argomenti · materiale punto per punto con glossario e suggerimenti d'esame.`, {
        width: pageWidth,
      });
    doc.moveDown(1);
    doc.font("Helvetica-Bold").fontSize(12).fillColor("#0f172a").text("Indice");
    doc.moveDown(0.4);
    topics.forEach((t, i) => {
      doc
        .font("Helvetica")
        .fontSize(10)
        .fillColor("#1e293b")
        .text(
          `${i + 1}. ${t.title} (${t.points.length} punti) — ${
            t.subject === "tecnico" ? "tecnico" : "istituzionale"
          }`
        );
    });

    // Helper: append each topic content on new pages
    async function appendAll() {
      for (const topic of topics) {
        doc.addPage();
        doc
          .fillColor("#1a2332")
          .font("Helvetica-Bold")
          .fontSize(11)
          .text("PAT · Assistente informatico / statistico");
        doc
          .moveDown(0.3)
          .fillColor("#5c6b7a")
          .font("Helvetica")
          .fontSize(9)
          .text(
            topic.subject === "tecnico"
              ? "Materia tecnico-informatica"
              : "Materia istituzionale (orale)"
          );
        doc.moveDown(1);
        doc
          .fillColor("#0f172a")
          .font("Helvetica-Bold")
          .fontSize(18)
          .text(topic.title, { width: pageWidth });
        doc.moveDown(0.5);
        doc
          .fillColor("#334155")
          .font("Helvetica")
          .fontSize(10)
          .text(topic.summary, { width: pageWidth, align: "justify" });
        doc.moveDown(0.5);
        doc
          .fillColor("#0f172a")
          .font("Helvetica-Bold")
          .fontSize(10)
          .text("Da ricordare");
        doc
          .fillColor("#475569")
          .font("Helvetica-Oblique")
          .fontSize(10)
          .text(topic.remember, { width: pageWidth, align: "justify" });
        doc.moveDown(0.8);

        topic.points.forEach((point, idx) => {
          if (doc.y > doc.page.height - 140) doc.addPage();
          doc
            .fillColor("#0b3d5c")
            .font("Helvetica-Bold")
            .fontSize(12)
            .text(`${idx + 1}. ${point.title}`, { width: pageWidth });
          doc.moveDown(0.3);
          doc
            .fillColor("#1e293b")
            .font("Helvetica-Bold")
            .fontSize(10)
            .text(point.lead, { width: pageWidth, align: "justify" });
          doc.moveDown(0.35);
          for (const para of point.body) {
            if (doc.y > doc.page.height - 100) doc.addPage();
            doc
              .fillColor("#334155")
              .font("Helvetica")
              .fontSize(10)
              .text(para, { width: pageWidth, align: "justify" });
            doc.moveDown(0.3);
          }
          if (point.terms?.length) {
            if (doc.y > doc.page.height - 100) doc.addPage();
            doc
              .fillColor("#0f172a")
              .font("Helvetica-Bold")
              .fontSize(9)
              .text("Glossario");
            doc.moveDown(0.2);
            for (const t of point.terms) {
              if (doc.y > doc.page.height - 70) doc.addPage();
              doc
                .fillColor("#0f172a")
                .font("Helvetica-Bold")
                .fontSize(9)
                .text(t.term, { continued: true, width: pageWidth });
              doc
                .fillColor("#475569")
                .font("Helvetica")
                .text(` — ${t.def}`, { width: pageWidth });
              doc.moveDown(0.15);
            }
            doc.moveDown(0.2);
          }
          if (doc.y > doc.page.height - 80) doc.addPage();
          doc
            .fillColor("#1e3a5f")
            .font("Helvetica-Bold")
            .fontSize(9)
            .text("In prova: ", { continued: true, width: pageWidth });
          doc.font("Helvetica").text(point.examTip, { width: pageWidth });
          if (point.refs?.length) {
            doc
              .fillColor("#64748b")
              .font("Helvetica")
              .fontSize(8)
              .text(`Riferimenti: ${point.refs.join(" · ")}`, {
                width: pageWidth,
              });
          }
          doc.moveDown(0.9);
        });
      }
      doc.end();
    }

    appendAll().catch(reject);
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

async function main() {
  console.log(`Generazione PDF per ${topics.length} argomenti…`);
  for (const topic of topics) {
    const fileName = path.basename(topic.pdfHref);
    const filePath = path.join(outDir, fileName);
    await writeTopicPdf(topic, filePath);
    console.log(`  ✓ ${fileName}`);
  }
  const combined = path.join(outDir, "dispense-complete.pdf");
  await writeCombinedPdf(topics, combined);
  console.log(`  ✓ dispense-complete.pdf`);
  console.log(`Fatto. Output in ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
