#!/usr/bin/env bash
# Re-measures Lighthouse scores (performance, accessibility, best-practices)
# for every project's production URL and prints the results.
#
# Used to refresh the `quality` values in data/portfolio.ts.
# Requires: a local Chrome/Chromium installation and Node.js >= 20.
#
# Run: bash scripts/measure-lighthouse.sh

set -uo pipefail

# Locate Chrome (override with CHROME_PATH if needed)
CHROME_PATH="${CHROME_PATH:-$(command -v google-chrome || command -v chromium || echo /usr/bin/google-chrome)}"

# slug|url
declare -A SITES=(
  [sunday-schedule]="https://multimedia-schedule.netlify.app/"
  [fittrack]="https://fittrack-nine-nu.vercel.app/"
  [leadflow]="https://leadflow-mu-eight.vercel.app/"
  [jobtracker]="https://jobtracker-ten-kappa.vercel.app/"
  [grandwealth]="https://grandwealth.vercel.app/"
)

OUTDIR="$(mktemp -d)"
trap 'rm -rf "$OUTDIR"' EXIT

for slug in sunday-schedule fittrack leadflow jobtracker grandwealth; do
  echo "▸ Measuring $slug …"
  if npx -y lighthouse "${SITES[$slug]}" \
    --only-categories=performance,accessibility,best-practices \
    --output=json --output-path="$OUTDIR/$slug.json" \
    --chrome-path="$CHROME_PATH" \
    --chrome-flags="--headless=new --no-sandbox --disable-dev-shm-usage --disable-gpu --hide-scrollbars" \
    --quiet; then
    echo "  ✓ done"
  else
    echo "  ✗ measurement failed for $slug"
    rm -f "$OUTDIR/$slug.json"
  fi
done

echo ""
echo "── Lighthouse scores (mobile) ──"
for slug in sunday-schedule fittrack leadflow jobtracker grandwealth; do
  if [ ! -f "$OUTDIR/$slug.json" ]; then
    echo "$slug: measurement failed"
    continue
  fi
  node -e "
    const d = require('$OUTDIR/$slug.json');
    const c = d.categories;
    if (!c) { console.log('$slug: measurement failed'); process.exit(0); }
    console.log(
      '$slug'.padEnd(16),
      'perf:' + Math.round(c.performance.score * 100),
      'a11y:' + Math.round(c.accessibility.score * 100),
      'best-practices:' + Math.round(c['best-practices'].score * 100)
    );
  "
done
