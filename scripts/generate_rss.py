#!/usr/bin/env python3
"""
Generate RSS 2.0 Syndication Feed for CalculatorPensie.com
Channel 9: RSS 2.0 Syndication Feed (DA 90)
"""

import os
from datetime import datetime

OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "..", "public", "rss.xml")

ITEMS = [
    {
        "title": "Calculator Pensie 2026: Află Pensia de Stat conform Legii 360",
        "link": "https://calculatorpensie.com/",
        "description": "Calculează online pensia de stat în 2026. Află exact punctajul și valoarea pensiei pe baza noii Legi 360/2023.",
        "pubDate": "Wed, 03 Sep 2026 08:00:00 GMT"
    },
    {
        "title": "Calculator Pensie Anticipată 2026 | Află Penalizarea (Legea 360)",
        "link": "https://calculatorpensie.com/calculator-pensie-anticipata/",
        "description": "Calculează penalizarea aplicată pentru pensionarea anticipată în România. Află vârsta minimă și reducerea procentuală.",
        "pubDate": "Wed, 03 Sep 2026 08:00:00 GMT"
    },
    {
        "title": "Calculator Vârstă Pensionare 2026 | Data Exactă Limită de Vârstă",
        "link": "https://calculatorpensie.com/calculator-varsta-pensionare/",
        "description": "Calculează vârsta legală de pensionare în România pentru femei și bărbați. Află data exactă conform eșalonării oficiale.",
        "pubDate": "Wed, 03 Sep 2026 08:00:00 GMT"
    },
    {
        "title": "Calculator Puncte Pensie 2026 | Puncte de Stabilitate Noua Lege",
        "link": "https://calculatorpensie.com/calculator-puncte-pensie/",
        "description": "Calculează numărul total de puncte de pensie acumulate și punctele de stabilitate pentru vechime peste 25 de ani.",
        "pubDate": "Wed, 03 Sep 2026 08:00:00 GMT"
    },
    {
        "title": "Calculator Pensie Pilon 2 2026 | Capitalizare și Profit",
        "link": "https://calculatorpensie.com/calculator-pensie-pilon-2/",
        "description": "Calculează suma strânsă în contul tău de pensie privată obligatorie Pilonul II pe baza contribuției de 4.75%.",
        "pubDate": "Wed, 03 Sep 2026 08:00:00 GMT"
    },
    {
        "title": "Calculator Pensie Pilon 3 (Facultativă) 2026",
        "link": "https://calculatorpensie.com/calculator-pensie-pilon-3/",
        "description": "Calculează suma pe care o poți strânge în Pilonul III de pensii facultative. Vezi avantajele deductibilității fiscale.",
        "pubDate": "Wed, 03 Sep 2026 08:00:00 GMT"
    },
    {
        "title": "Program Excel Calcul Pensie 2026 (Download Gratuit)",
        "link": "https://calculatorpensie.com/program-excel-calcul-pensie/",
        "description": "Descarcă simulatorul Excel gratuit pentru pensia de stat 2026. Introdu salariul și calculează automat punctajul lunar.",
        "pubDate": "Wed, 03 Sep 2026 08:00:00 GMT"
    },
    {
        "title": "Top 5 Greșeli în Planificarea Pensiei",
        "link": "https://calculatorpensie.com/blog/top-5-greseli-planificare-pensie/",
        "description": "Află care sunt cele mai frecvente erori pe care le fac viitorii pensionari și cum să le eviți.",
        "pubDate": "Mon, 01 Sep 2026 09:00:00 GMT"
    },
    {
        "title": "Ghid Complet Calcul Pensie de Stat 2026",
        "link": "https://calculatorpensie.com/blog/ghid-calcul-pensie-stat-2026/",
        "description": "Ghid detaliat pas cu pas pentru calculul pensiei conform noii formule legislative.",
        "pubDate": "Mon, 01 Sep 2026 09:00:00 GMT"
    },
    {
        "title": "Pilonul 3 de Pensii: Avantaje Fiscale și Strategii de Economisire",
        "link": "https://calculatorpensie.com/blog/pilonul-3-avantaje-fiscale-strategii/",
        "description": "Tot ce trebuie să știi despre deductibilitatea fiscală și randamentul pensiei facultative.",
        "pubDate": "Mon, 01 Sep 2026 09:00:00 GMT"
    },
    {
        "title": "Pensia Anticipată 2026: Condiții, Penalizări și Excepții",
        "link": "https://calculatorpensie.com/blog/pensie-anticipata-conditii-penalizari/",
        "description": "Cine poate ieși mai devreme la pensie și cât se scade din cuantumul lunar.",
        "pubDate": "Mon, 01 Sep 2026 09:00:00 GMT"
    },
    {
        "title": "Stagiul de Cotizare și Cumpărarea Vechimii în Muncă",
        "link": "https://calculatorpensie.com/blog/stagiul-cotizare-cumparare-ani-munca/",
        "description": "Cât costă să cumperi ani de vechime în 2026 și care este procedura legală la CNPP.",
        "pubDate": "Mon, 01 Sep 2026 09:00:00 GMT"
    }
]

def generate_rss():
    items_xml = ""
    for it in ITEMS:
        items_xml += f"""    <item>
      <title><![CDATA[{it['title']}]]></title>
      <link>{it['link']}</link>
      <guid isPermaLink="true">{it['link']}</guid>
      <description><![CDATA[{it['description']}]]></description>
      <pubDate>{it['pubDate']}</pubDate>
    </item>\n"""

    rss_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Calculator Pensie România 2026 - Noutăți și Instrumente</title>
    <link>https://calculatorpensie.com/</link>
    <description>Simulatoare oficiale de pensie conform Legii 360/2023, analize legislative și ghiduri de planificare financiară.</description>
    <language>ro-ro</language>
    <lastBuildDate>{datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT')}</lastBuildDate>
    <atom:link href="https://calculatorpensie.com/rss.xml" rel="self" type="application/rss+xml" />
{items_xml}  </channel>
</rss>
"""
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write(rss_content)
    print(f"RSS 2.0 Feed generated at {OUTPUT_PATH}")

if __name__ == "__main__":
    generate_rss()
