#!/usr/bin/env python3
"""
Generate a clean, UTF-8 diacritics-safe PDF guide for CalculatorPensie.com (2026)
"""

import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont


def register_unicode_fonts():
    font_regular = r"C:\Windows\Fonts\arial.ttf"
    font_bold = r"C:\Windows\Fonts\arialbd.ttf"
    font_italic = r"C:\Windows\Fonts\ariali.ttf"

    if os.path.exists(font_regular) and os.path.exists(font_bold):
        pdfmetrics.registerFont(TTFont("ArialUni", font_regular))
        pdfmetrics.registerFont(TTFont("ArialUni-Bold", font_bold))
        if os.path.exists(font_italic):
            pdfmetrics.registerFont(TTFont("ArialUni-Italic", font_italic))
        return "ArialUni", "ArialUni-Bold", (
            "ArialUni-Italic" if os.path.exists(font_italic) else "ArialUni"
        )
    return "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"


def generate_pdf():
    font_reg, font_bold, font_ital = register_unicode_fonts()
    output_path = os.path.join(
        os.path.dirname(__file__), "..", "public", "ghid-calcul-pensie-2026.pdf"
    )
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=36,
        bottomMargin=36,
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        "DocTitle",
        parent=styles["Heading1"],
        fontSize=20,
        leading=25,
        textColor=colors.HexColor("#1e3a8a"),
        fontName=font_bold,
        alignment=1,
        spaceAfter=8,
    )

    subtitle_style = ParagraphStyle(
        "DocSubTitle",
        parent=styles["Normal"],
        fontName=font_reg,
        fontSize=10.5,
        leading=15,
        textColor=colors.HexColor("#475569"),
        alignment=1,
        spaceAfter=14,
    )

    h2_style = ParagraphStyle(
        "SectionH2",
        parent=styles["Heading2"],
        fontSize=13,
        leading=17,
        textColor=colors.HexColor("#1e40af"),
        fontName=font_bold,
        spaceBefore=12,
        spaceAfter=6,
    )

    body_style = ParagraphStyle(
        "BodyDark",
        parent=styles["BodyText"],
        fontName=font_reg,
        fontSize=10,
        leading=14,
        textColor=colors.HexColor("#334155"),
        spaceAfter=7,
    )

    bullet_style = ParagraphStyle(
        "BulletLink",
        parent=styles["Normal"],
        fontName=font_reg,
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor("#1e293b"),
    )

    elements = []

    elements.append(
        Paragraph("Ghid Oficial Calcul Pensie România 2026", title_style)
    )
    elements.append(
        Paragraph(
            "Sinteză Metodologică conform Legii nr. 360/2023 & Legii nr. 141/2025 | VPR 2026: 81 RON<br/>"
            "Publicat de <a href='https://calculatorpensie.com/' color='#1d4ed8'><b><u>CalculatorPensie.com</u></b></a>",
            subtitle_style,
        )
    )
    elements.append(
        HRFlowable(
            width="100%",
            thickness=1.5,
            color=colors.HexColor("#cbd5e1"),
            spaceBefore=4,
            spaceAfter=12,
        )
    )

    elements.append(
        Paragraph("1. Formula Matematică a Pensiei de Stat (2026)", h2_style)
    )
    elements.append(
        Paragraph(
            "În anul 2026, cuantumul brut al pensiei de stat se determină înmulțind numărul total de puncte acumulate "
            "cu Valoarea Punctului de Referință (VPR = 81 RON, menținută prin OUG nr. 156/2024 și Legea nr. 141/2025):",
            body_style,
        )
    )
    elements.append(
        Paragraph(
            f"<font name='{font_bold}'>Pensie Brută = Număr Total de Puncte × VPR (81 RON)</font>",
            ParagraphStyle(
                "Formula",
                parent=body_style,
                fontName=font_bold,
                fontSize=11,
                textColor=colors.HexColor("#0f172a"),
                alignment=1,
            ),
        )
    )
    elements.append(
        Paragraph(
            "Parametri oficiali 2026: Salariu mediu brut de referință = 9.192 RON (Legea nr. 44/2026) | "
            "Pensie minimă garantată = 1.281 RON | CASS 10% aplicat exclusiv sumei peste 3.000 RON.",
            body_style,
        )
    )

    elements.append(
        Paragraph("2. Grila Punctelor de Stabilitate (Art. 85 Legea 360/2023)", h2_style)
    )
    elements.append(
        Paragraph(
            "Punctele de stabilitate recompensează stagiul de cotizare contributiv ce depășește 25 de ani:",
            body_style,
        )
    )

    table_data = [
        [
            Paragraph(f"<font name='{font_bold}'>Interval Stagiu Contributiv</font>", body_style),
            Paragraph(f"<font name='{font_bold}'>Puncte Acordate / An</font>", body_style),
            Paragraph(f"<font name='{font_bold}'>Plus Brut / An (la VPR 81 RON)</font>", body_style),
        ],
        [
            Paragraph("Până la 25 ani", body_style),
            Paragraph("0,00 puncte", body_style),
            Paragraph("0,00 RON", body_style),
        ],
        [
            Paragraph("Între 26 și 30 ani (5 ani)", body_style),
            Paragraph("0,50 puncte / an", body_style),
            Paragraph("+40,50 RON/an (+202,50 RON max.)", body_style),
        ],
        [
            Paragraph("Între 31 și 35 ani (5 ani)", body_style),
            Paragraph("0,75 puncte / an", body_style),
            Paragraph("+60,75 RON/an (+506,25 RON cumulat)", body_style),
        ],
        [
            Paragraph("Peste 35 ani", body_style),
            Paragraph("1,00 punct / an", body_style),
            Paragraph("+81,00 RON / an fără plafon", body_style),
        ],
    ]

    t = Table(table_data, colWidths=[185, 140, 195])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
                ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    elements.append(t)
    elements.append(Spacer(1, 12))

    elements.append(
        Paragraph("3. Calculatoare Interactive & Ghiduri Gratuite Online", h2_style)
    )

    tools_list = [
        "<a href='https://calculatorpensie.com/' color='#1d4ed8'><b><u>Calculator Pensie de Stat 2026</u></b></a> — Estimare brut/net cu VPR 81 Lei.",
        "<a href='https://calculatorpensie.com/calculator-varsta-pensionare/' color='#1d4ed8'><b><u>Calculator Vârstă de Pensionare</u></b></a> — Anexa nr. 5 și reducere mame.",
        "<a href='https://calculatorpensie.com/calculator-pensie-anticipata/' color='#1d4ed8'><b><u>Calculator Pensie Anticipată</u></b></a> — Grila 0,15%–0,40%/lună.",
        "<a href='https://calculatorpensie.com/calculator-puncte-pensie/' color='#1d4ed8'><b><u>Calculator Puncte de Stabilitate</u></b></a> — Calculul punctajului complet.",
        "<a href='https://calculatorpensie.com/calculator-pensie-pilon-2/' color='#1d4ed8'><b><u>Calculator Pilonul II</u></b></a> — Cotă 4,75% din brut.",
        "<a href='https://calculatorpensie.com/calculator-pensie-pilon-3/' color='#1d4ed8'><b><u>Calculator Pilonul III</u></b></a> — Deductibilitate 400 EUR/an.",
        "<a href='https://calculatorpensie.com/program-excel-calcul-pensie/' color='#1d4ed8'><b><u>Program Excel Calcul Pensie (.CSV)</u></b></a> — Tabel descărcabil gratuit.",
        "<a href='https://calculatorpensie.com/legislatie/' color='#1d4ed8'><b><u>Ghid Legislație 2026</u></b></a> — Legea nr. 360/2023 &amp; Legea nr. 141/2025.",
    ]

    for item in tools_list:
        elements.append(Paragraph(f"• {item}", bullet_style))
        elements.append(Spacer(1, 3))

    elements.append(Spacer(1, 10))
    elements.append(
        HRFlowable(
            width="100%",
            thickness=1,
            color=colors.HexColor("#e2e8f0"),
            spaceBefore=6,
            spaceAfter=6,
        )
    )
    elements.append(
        Paragraph(
            "CalculatorPensie.com — Instrument educativ independent, neafiliat CNPP. Actualizat noiembrie 2026.",
            ParagraphStyle("Footer", parent=subtitle_style, fontName=font_ital, fontSize=9),
        )
    )

    doc.build(elements)
    print(f"PDF generated cleanly at {output_path} ({os.path.getsize(output_path)} bytes)")


if __name__ == "__main__":
    generate_pdf()
