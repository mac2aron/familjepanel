FAMILJEPANEL V4.2

Fix:
- Tågkortet kräver inte längre en lokal ResRobot-nyckel.
- ResRobot hämtas via Cloudflare Workern med RESROBOT_KEY som Secret.
- Panelen behöver endast Worker-adress + PANEL_TOKEN.
- Skol- och bussrutiner är fortfarande filtrerade från kalenderlistorna.
- Kalendern visar Kommande 7 dagar.

GitHub:
Ersätt index.html och sw.js (manifest.webmanifest är oförändrad).
Commit till main och kör Ctrl+F5 när Pages uppdaterats.
