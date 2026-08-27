FAMILJEPANEL V3

Nytt:
• Kalendern I dag / Den här veckan hämtas från Cloudflare Worker.
• Paneltoken sparas bara lokalt i webbläsaren.
• Buss: planerad tur före 60-minutersfönstret, Trafiklab inom fönstret.
• Buss visar I tid, +X min, Inställd eller Tidtabell när realtid saknas.
• Efter morgonresan växlar panelen automatiskt till eftermiddagen.
• Tisdag går eftermiddagsresan till Kulturskolan.
• Tåg: två åt varje håll, tydlig försening 09.18 → 09.24 +6 min, spår när det finns.
• Ny cache: familjepanel-v3.

GitHub:
Ersätt index.html, manifest.webmanifest och sw.js, commit till main, vänta på Pages och kör Ctrl+F5.
Öppna sedan inställningar, klistra in PANEL_TOKEN och tryck Spara.
