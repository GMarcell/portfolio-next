#!/usr/bin/env python3
"""Generate a minimal placeholder resume PDF for development purposes."""

# Minimal valid PDF that renders "GRAND MARCELL\nResume Placeholder" on one page
# This is a placeholder - replace with your actual resume PDF later.

pdf = """%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]
   /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 208 >>
stream
BT
/F1 28 Tf
50 700 Td
(GRAND MARCELL) Tj
/F1 14 Tf
50 660 Td
(Frontend Developer) Tj
/F1 11 Tf
50 630 Td
(grand1310marcell@gmail.com) Tj
50 612 Td
(linkedin.com/in/grandmarcell) Tj
50 594 Td
(github.com/GMarcell) Tj
/F1 12 Tf
50 560 Td
(--- Replace this file with your actual resume PDF ---) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000527 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
594
%%EOF
"""

import sys
import os

output_path = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public",
    "resume.pdf",
)

with open(output_path, "wb") as f:
    f.write(pdf.encode("latin-1"))

print(f"✅ Created placeholder resume at: {output_path}")
print(f"   Size: {os.path.getsize(output_path)} bytes")
print(f"   Replace this file with your actual resume PDF to make download buttons live.")
