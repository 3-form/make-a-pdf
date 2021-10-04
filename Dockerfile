FROM jsreport/jsreport:2.11.0

COPY --chown=jsreport:jsreport server.js /app/server.js

RUN npm i --save mysql2

CMD ["bash", "/app/run.sh"]
