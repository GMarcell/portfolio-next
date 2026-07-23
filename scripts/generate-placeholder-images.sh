#!/usr/bin/env bash
# Generates SVG placeholder images for the portfolio.
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

# ── Project screenshot placeholders ─────────────────────────
declare -A PROJECTS
PROJECTS[sunday-schedule]="#3f6b52"
PROJECTS[fittrack]="#1e3a5f"
PROJECTS[leadflow]="#0f2942"
PROJECTS[jobtracker]="#14532d"
PROJECTS[grandwealth]="#78350f"

for slug in "${!PROJECTS[@]}"; do
  color="${PROJECTS[$slug]}"
  cat > "$OUTDIR/project-${slug}.svg" << SVG
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <rect width="600" height="400" fill="${color}"/>
  <rect x="40" y="30" width="520" height="340" rx="8" fill="rgba(0,0,0,0.15)"/>
  <circle cx="70" cy="58" r="6" fill="rgba(255,255,255,0.2)"/>
  <circle cx="92" cy="58" r="6" fill="rgba(255,255,255,0.2)"/>
  <circle cx="114" cy="58" r="6" fill="rgba(255,255,255,0.2)"/>
  <rect x="40" y="80" width="520" height="180" rx="4" fill="rgba(0,0,0,0.1)"/>
  <rect x="60" y="104" width="120" height="16" rx="3" fill="rgba(255,255,255,0.15)"/>
  <rect x="60" y="130" width="240" height="24" rx="4" fill="rgba(255,255,255,0.12)"/>
  <rect x="60" y="164" width="480" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
  <rect x="60" y="180" width="380" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
  <rect x="60" y="196" width="420" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
  <rect x="60" y="220" width="160" height="28" rx="4" fill="rgba(255,255,255,0.1)"/>
  <rect x="60" y="320" width="60" height="20" rx="4" fill="rgba(255,255,255,0.08)"/>
  <rect x="130" y="320" width="60" height="20" rx="4" fill="rgba(255,255,255,0.08)"/>
  <rect x="200" y="320" width="60" height="20" rx="4" fill="rgba(255,255,255,0.08)"/>
</svg>
SVG
done

echo "✅ Generated $(ls "$OUTDIR" | wc -l) placeholder images in $OUTDIR/"
ls -lh "$OUTDIR"
