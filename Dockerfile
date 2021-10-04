FROM jsreport/jsreport:2.11.0

COPY --chown=jsreport:jsreport server.js /app/server.js

COPY --chown=jsreport:jsreport app/data/reports/ app/data/reports/

RUN npm i --save \
  jsreport-fs-store \
  mysql2

CMD ["bash", "/app/run.sh"]
