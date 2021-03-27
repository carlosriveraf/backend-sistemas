const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.95.232.216',
  database: 'airelimpio',
  user: 'admin',
  password: 'admin'
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!")
})

module.exports = connection