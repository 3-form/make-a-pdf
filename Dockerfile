FROM jsreport/jsreport:2.11.0

COPY --chown=jsreport:jsreport server.js /app/server.js

CMD ["bash", "/app/run.sh"]
