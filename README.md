# danish-ais-map

https://amddaa.github.io/danish-ais-map/

Static maps of Danish Maritime Authority AIS traffic joined with World Port Index (Pub. 150) port records. Raw AIS and WPI data are loaded into TimescaleDB/PostGIS through an ETL pipeline. Analysis scripts then build port-call, route, and cluster dashboards. Processing stays in a private repository. This site is the published front end.
