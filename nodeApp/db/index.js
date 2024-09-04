import mysql from 'mysql2/promise';



// Create the connection to database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'corvit_03_2024',
  });

  export {connection}
  