#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NAME="pat-assistente-informatico"
OUT_DIR="$ROOT/public"
OUT_FILE="$OUT_DIR/${NAME}.zip"
TMP="$(mktemp -d)"
STAGE="$TMP/$NAME"

mkdir -p "$OUT_DIR" "$STAGE"

# Copia selettiva senza dipendenze, build e git
shopt -s dotglob nullglob
for item in "$ROOT"/*; do
  base="$(basename "$item")"
  case "$base" in
    node_modules|.next|.git|.vercel|agent-tools|public) continue ;;
  esac
  if [[ "$base" == *.zip ]]; then continue; fi
  cp -a "$item" "$STAGE/"
done

mkdir -p "$STAGE/public"
if [[ -d "$ROOT/public" ]]; then
  for item in "$ROOT/public"/*; do
    [[ -e "$item" ]] || continue
    base="$(basename "$item")"
    [[ "$base" == *.zip ]] && continue
    cp -a "$item" "$STAGE/public/"
  done
fi

# Non includere lo zip dentro se stesso
rm -f "$STAGE/public/${NAME}.zip" "$STAGE/${NAME}.zip"

cd "$TMP"
rm -f "$OUT_FILE"
zip -r -q "$OUT_FILE" "$NAME"
rm -rf "$TMP"

BYTES="$(wc -c < "$OUT_FILE" | tr -d ' ')"
echo "Creato $OUT_FILE ($BYTES bytes)"
