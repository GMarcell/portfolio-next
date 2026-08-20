#!/usr/bin/env bash
# Generates the profile placeholder SVG for the portfolio.
# Run: bash scripts/generate-placeholder-images.sh

set -euo pipefail

OUTDIR="public/images"

mkdir -p "$OUTDIR"

# ── Profile picture (GM initials on accent bg) ──────────────
cat > "$OUTDIR/profile.svg" << 'SVG'
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
  <rect width="320" height="320" fill="#b8862b"/>
  <text x="160" y="175" font-family="system-ui, sans-serif" font-size="96" font-weight="800" fill="#f8f4ed" text-anchor="middle" letter-spacing="-2">GM</text>
</svg>
SVG

echo "✅ Generated $(ls "$OUTDIR" | wc -l) placeholder image(s) in $OUTDIR/"
ls -lh "$OUTDIR"
