const mysql = require('mysql2/promise'),
  process = require('process'),
  beforeRender = async (request, _response) => {
    const now = new Date(),
      currentYear = now.getFullYear(),
      currentMonth = now.getMonth();

    let month = currentMonth - 1, year;

    if (month <= 0) {
      month = 12;
      year = currentYear - 1;
    } else {
      year = currentYear;
    }

    const queryTemplate =
      'SELECT count(*) AS lead_count, `source` FROM `leads` ' +
      'WHERE YEAR(`created_at`) = ? AND MONTH(`created_at`) = ? ' +
      'GROUP BY `source`;',
      dbConnection = await mysql.createConnection({
        host: process.env.mysql.host,
        user: process.env.mysql.user,
        password: process.env.mysql.password,
        database: process.env.mysql.apiDatabase,
      }),
      [
        rows,
        fields,
      ] = await dbConnection.query(queryTemplate, [year, month]);

    request.data = { rows, fields };

    console.log(request.data);
  };
