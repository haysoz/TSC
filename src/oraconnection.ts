import oracledb from 'oracledb';

// Define the connection configuration
const dbConfig = {
  user: 'your_username',
  password: 'your_password',
  connectString: 'your_host:your_port/your_service_name', // e.g., 'localhost:1521/XEPDB1'
};

async function connectToDatabase() {
  let connection;

  try {
    // Establish a connection to the database
    connection = await oracledb.getConnection(dbConfig);
    console.log('Successfully connected to Oracle Database!');

    // Execute a simple query
    const result = await connection.execute(`SELECT * FROM employees WHERE ROWNUM <= 5`);
    console.log('Query Result:', result.rows);

  } catch (err) {
    console.error('Error connecting to Oracle Database:', err);
  } finally {
    // Always close the connection
    if (connection) {
      try {
        await connection.close();
        console.log('Connection closed.');
      } catch (closeErr) {
        console.error('Error closing connection:', closeErr);
      }
    }
  }
}

// Call the function
connectToDatabase();
