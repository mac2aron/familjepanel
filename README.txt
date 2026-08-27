FAMILJEPANEL V4

ÄNDRINGAR
- Trafiklab- och ResRobot-nycklar flyttas till Cloudflare Worker.
- På en ny mobil/webbläsare behöver du därför bara:
  1. Worker-adressen
  2. PANEL_TOKEN
- Kalendern visar nu Kommande 7 dagar från i dag, inte bara innevarande kalendervecka.
- Buss och tåg anropas genom Workern.

CLOUDFLARE
1. Lägg till Secret: TRAFIKLAB_KEY
2. Lägg till Secret: RESROBOT_KEY
3. Öppna CLOUDFLARE_V4_PATCH.txt.
4. Lägg in de två routes som anges där i din BEFINTLIGA Worker.
5. Lägg in handleBus() och handleTrains() före authorized().
6. Deploy.

VIKTIGT
Ersätt inte hela din fungerande kalenderparser med en kortare Worker. Patcha den befintliga Workern enligt instruktionen ovan.

GITHUB PAGES
Ersätt:
- index.html
- manifest.webmanifest
- sw.js

Commit till main, vänta på Pages och kör Ctrl+F5.

Därefter öppnar du inställningar och trycker Spara.
