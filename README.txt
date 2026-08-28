FAMILJEPANEL V6 – SKOLLUNCH

NYTT
- Barnkortens "Efter skolan" är ersatt med "Skollunch".
- Siri: första rätten från Friskolan Askens aktuella meny.
- Axel: dagens rätt från Skolmaten.se RSS.
- Aktiviteter ligger fortsatt i kalenderdelen.
- Lunch hämtas via Cloudflare Worker och uppdateras automatiskt.
- Worker cache: 15 minuter.
- Panelen uppdaterar lunch var 30:e minut.
- På helg/lov visar panelen "Ingen skollunch idag".

GÖR SÅ HÄR

1. CLOUDFLARE
   - Öppna familjepanel-calendar → Edit code.
   - Ersätt HELA befintliga worker.js med innehållet i worker_v6_FULL.txt.
   - Deploy.
   - Inga nya Secrets behövs.

2. TESTA WORKERN
   GET:
   https://familjepanel-calendar.7ydb66wf9r.workers.dev/school-lunch

   Header:
   Authorization: Bearer DIN_PANEL_TOKEN

   Du ska få JSON med:
   siri.meal
   axel.meal
   errors

3. GITHUB PAGES
   När testet fungerar:
   - ersätt index.html
   - ersätt sw.js
   - commit till main
   - vänta på Pages
   - Ctrl+F5

OBS
Asken parsas från skolans publika HTML-sida.
Karlavagnen parsas från Skolmaten.se RSS.
Om någon av skolorna ändrar teknisk struktur kan den källan behöva justeras,
men den andra fortsätter fungera separat.
