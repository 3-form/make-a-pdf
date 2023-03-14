FROM jsreport/jsreport:3.10.0

COPY --chown=jsreport:jsreport server.js /app/server.js
COPY --chown=jsreport:jsreport data /app/data

CMD ["bash", "/app/run.sh"]
