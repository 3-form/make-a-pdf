FROM jsreport/jsreport:2.11.0

COPY --chown=jsreport:jsreport server.js /app/server.js
COPY --chown=jsreport:jsreport data /app/data

RUN npm i --save \
  jsreport-fs-store \
  jsreport-fs-store-aws-s3-persistence

CMD ["bash", "/app/run.sh"]
