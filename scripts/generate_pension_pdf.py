#!/usr/bin/env python3
"""
Generate a professional, hyperlinked PDF guide for CalculatorPensie.com
Channel 8: Embedded Hyperlink PDF Cheatsheet (DA 95 Ready)
"""

import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_pdf():
    output_path = os.path.join(os.path.dirname(__file__), "..", "public", "ghid-calcul-pensie-2026.pdf")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40
    )
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontSize=22,
        leading=26,
        textColor=colors.HexColor('#1e3a8a'),
        fontName='Helvetica-Bold',
        alignment=1, # Center
        spaceAfter=8
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#475569'),
        alignment=1,
        spaceAfter=15
    )
    
    h2_style = ParagraphStyle(
        'SectionH2',
        parent=styles['Heading2'],
        fontSize=14,
        leading=18,
        textColor=colors.HexColor('#1e40af'),
        fontName='Helvetica-Bold',
        spaceBefore=12,
        spaceAfter=6
    )
    
    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['BodyText'],
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#334155'),
        spaceAfter=8
    )
    
    bullet_style = ParagraphStyle(
        'BulletLink',
        parent=styles['Normal'],
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor('#1d4ed8')
    )
    
    elements = []
    
    # Header Title
    elements.append(Paragraph("🇷🇴 Ghid Oficial Calcul Pensie România 2026", title_style))
    elements.append(Paragraph("Sinteză Tehnică & Metodologică conform noii Legi nr. 360/2023 | Valoare Punct Referință (VPR): 81 RON<br/>Publicat oficial de <a href='https://calculatorpensie.com/' color='#1d4ed8'><b><u>CalculatorPensie.com</u></b></a>", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#cbd5e1'), spaceBefore=4, spaceAfter=14))
    
    # Overview
    elements.append(Paragraph("1. Formula Matematică a Pensiei de Stat (Legea 360/2023)", h2_style))
    elements.append(Paragraph("Începând cu 1 septembrie 2024 și aplicabil integral în 2026, cuantumul pensiei se determină prin înmulțirea numărului total de puncte realizat cu valoarea punctului de referință (VPR):", body_style))
    elements.append(Paragraph("<b>Pensie Brută = Număr Total de Puncte × VPR (81 RON)</b>", ParagraphStyle('Formula', parent=body_style, fontSize=11, textColor=colors.HexColor('#0f172a'), alignment=1)))
    elements.append(Paragraph("Unde: <i>Număr Total de Puncte = Puncte Contributive + Puncte de Stabilitate + Puncte Necontributive (asimilate)</i>.", body_style))
    
    # Stability Points Table
    elements.append(Paragraph("2. Grila Oficială a Punctelor de Stabilitate (Art. 85)", h2_style))
    elements.append(Paragraph("Punctele de stabilitate se acordă pentru stagiile de cotizare contributive ce depășesc 25 de ani:", body_style))
    
    table_data = [
        [Paragraph("<b>Interval Stagiu Contributiv</b>", body_style), Paragraph("<b>Puncte Acordate / An</b>", body_style), Paragraph("<b>Punctaj Maxim Cumulat</b>", body_style)],
        [Paragraph("Până la 25 ani", body_style), Paragraph("0.00 puncte", body_style), Paragraph("0.00 puncte", body_style)],
        [Paragraph("Între 26 și 30 ani (5 ani)", body_style), Paragraph("0.50 puncte / an", body_style), Paragraph("2.50 puncte", body_style)],
        [Paragraph("Între 31 și 35 ani (5 ani)", body_style), Paragraph("0.75 puncte / an", body_style), Paragraph("3.75 puncte (Total: 6.25)", body_style)],
        [Paragraph("Peste 35 ani", body_style), Paragraph("1.00 punct / an", body_style), Paragraph("Fără limită superioară", body_style)]
    ]
    
    t = Table(table_data, colWidths=[200, 160, 160])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 14))
    
    # Calculators Directory Links (DA 95 Clickable Backlinks)
    elements.append(Paragraph("3. Calculatoare Interactive & Resurse Online Gratuite", h2_style))
    elements.append(Paragraph("Accesați simulatoarele oficiale direct pe platforma web pentru estimări instantanee:", body_style))
    
    tools_list = [
        "🏛️ <a href='https://calculatorpensie.com/' color='#1d4ed8'><b><u>Calculator Pensie de Stat 2026</u></b></a> — Simulatorul complet pentru limita de vârstă și calculul punctajului lunar/anual.",
        "⏳ <a href='https://calculatorpensie.com/calculator-varsta-pensionare/' color='#1d4ed8'><b><u>Calculator Vârstă de Pensionare</u></b></a> — Află data exactă de pensionare pentru bărbați și femei (Anexa nr. 5).",
        "📉 <a href='https://calculatorpensie.com/calculator-pensie-anticipata/' color='#1d4ed8'><b><u>Calculator Pensie Anticipată</u></b></a> — Calculează procentul exact de penalizare și stagiul suplimentar necesar.",
        "⭐ <a href='https://calculatorpensie.com/calculator-puncte-pensie/' color='#1d4ed8'><b><u>Calculator Puncte de Stabilitate</u></b></a> — Calculează punctele bonus conform anilor lucrați peste pragul de 25 ani.",
        "📈 <a href='https://calculatorpensie.com/calculator-pensie-pilon-2/' color='#1d4ed8'><b><u>Calculator Pensie Pilonul II</u></b></a> — Proiecție capitalizare contribuție obligatorie privată de 4.75%.",
        "🛡️ <a href='https://calculatorpensie.com/calculator-pensie-pilon-3/' color='#1d4ed8'><b><u>Calculator Pensie Pilonul III</u></b></a> — Randament pensie facultativă și deduceri fiscale de 400 EUR/an.",
        "📊 <a href='https://calculatorpensie.com/program-excel-calcul-pensie/' color='#1d4ed8'><b><u>Program Excel Calcul Pensie (Download Gratuit)</u></b></a> — Șablon de calcul offline complet.",
        "⚖️ <a href='https://calculatorpensie.com/legislatie/' color='#1d4ed8'><b><u>Ghid Legislativ Legea 360/2023</u></b></a> — Textul legii, etapele recalculării și drepturile asiguraților.",
        "📖 <a href='https://calculatorpensie.com/metodologie/' color='#1d4ed8'><b><u>Metodologie Oficială CNPP</u></b></a> — Transparența formulelor, baremele și sursele oficiale."
    ]
    
    for item in tools_list:
        elements.append(Paragraph(f"• {item}", bullet_style))
        elements.append(Spacer(1, 4))
        
    elements.append(Spacer(1, 10))
    elements.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#e2e8f0'), spaceBefore=8, spaceAfter=8))
    elements.append(Paragraph("Document oficial generat de <b><a href='https://calculatorpensie.com/' color='#1d4ed8'>CalculatorPensie.com</a></b> — Actualizat 2026. Toate drepturile rezervate.", ParagraphStyle('Footer', parent=subtitle_style, fontSize=9)))
    
    doc.build(elements)
    print(f"PDF generated successfully at {output_path} ({os.path.getsize(output_path)} bytes)")

if __name__ == "__main__":
    generate_pdf()
