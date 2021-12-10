FROM jsreport/jsreport:2.11.0

COPY --chown=jsreport:jsreport server.js /app/server.js
COPY --chown=jsreport:jsreport data /app/data

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=

RUN npm i --save

CMD ["bash", "/app/run.sh"]
