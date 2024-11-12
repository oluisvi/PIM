const { Connection, Request } = require('tedious');

console.log("PyODBC está instalado e funcionando!");

const config = {
  server: 'RUAN-GALDINO\\PIMSQL',
  authentication: {
    type: 'default',
    options: {
      userName: 'sa',
      password: 'terrasmilpim'
    }
  },
  options: {
    database: 'TERRASMIL',
    encrypt: true,
    trustServerCertificate: true
  }
};

const connection = new Connection(config);

connection.on('connect', (err) => {
  if (err) {
    console.error("Erro na conexão ao banco de dados:");
    console.error(err);
    return;
  }

  // Exemplo de consulta
  const request = new Request("SELECT * FROM CLIENTE", (err, rowCount) => {
    if (err) {
      console.error("Erro na consulta:");
      console.error(err);
    } else {
      console.log(`Número de linhas retornadas: ${rowCount}`);
    }

    // Fechando a conexão
    connection.close();
  });

  request.on('row', (columns) => {
    const row = {};
    columns.forEach((column) => {
      row[column.metadata.colName] = column.value;
    });
    console.log(row);
  });

  connection.execSql(request);
});
const fetchData = require('./bd');

async function authenticateUser (username, password) {
  try {
      const result = await sql.query`SELECT * FROM users WHERE username = ${username}`;
      if (result.recordset.length === 0) {
          return false; // User not found
      }
      const user = result.recordset[0];
      // Compare the provided password with the stored hashed password
      const match = await bcrypt.compare(password, user.password);
      return match; // Returns true if the password matches
  } catch (err) {
      console.error('SQL query error:', err);
      throw err; // Rethrow the error to handle it in the calling function
  }
}

async function authenticateUser (username, password) {
  try {
      const result = await sql.query`SELECT * FROM users WHERE username = ${username} AND password = ${password}`;
      return result.recordset.length > 0; // Returns true if user exists
  } catch (err) {
      console.error('SQL query error:', err);
      throw err; // Rethrow the error to handle it in the calling function
  }
}

async function closeDatabaseConnection() {
  try {
      await sql.close();
      console.log('SQL Server connection closed');
  } catch (err) {
      console.error('Error closing SQL Server connection:', err);
  }
}


// Example usage in index.html or dashboard.html
fetchData("SELECT 'email' FROM CLIENTE", (rows) => {
  // Use the fetched data here
  console.log(rows);

  // Update the UI with the fetched data
  // For example, populate a table or display data on the page
});
