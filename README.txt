FAMILJEPANEL V5

NYTT
- Kompakt väderkort för Strängnäs uppe till höger om hälsningen på större skärmar.
- Aktuell temperatur.
- Upplevd temperatur.
- Vind i m/s.
- Nederbörd när det faktiskt regnar/snöar.
- Fyra prognospunkter över cirka sex timmar.
- Praktiskt väderråd, t.ex.:
  • Regnjacka – regn väntas runt 16:00
  • Blåsigt – upp till 10 m/s
  • Svalt – jacka kan vara skön
  • Soligt och varmt – solskydd kan vara bra
  • Snö möjlig
  • Åskrisk
- Open-Meteo används direkt och kräver ingen API-nyckel.
- På mobil lägger sig väderkortet kompakt under hälsningen.
- Panelens maxbredd är ökad till 980 px för bättre användning på surfplatta.

BEHÅLLER
- Kalender via Cloudflare Worker
- Kommande 7 dagar
- Skol- och bussrutiner filtrerade från kalenderlistorna
- Trafiklab och ResRobot via Worker
- Smarta bussresor
- Två tåg åt vardera hållet

GITHUB PAGES
Ersätt:
- index.html
- sw.js

manifest.webmanifest kan också ersättas.

Commit till main, vänta på Pages och kör Ctrl+F5.
