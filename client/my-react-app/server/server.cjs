// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const config = {
  server: "LAPTOP-5KRRGCSH\\MSSQLSERVER01", // e.g., 'localhost'
  database: "evcare",
  options: {
    trustedConnection: true,
    encrypt: false, // Use this if you're on Azure
    trustServerCertificate: true, // Change to true for local dev / self-signed certs
  },
};

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // await sql.connect(config);
    // const result = await sql.query`SELECT * FROM User WHERE Username = ${username} AND Password = ${password}`;

    if (username.toLowerCase() === "viji" && password.toLowerCase() === "humber") {
      res.status(200).json({ message: 'Login successful', user: username });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await sql.close();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// **************************************************************************************************//

// const express = require('express');
// const mssql = require('mssql');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// const config = {
//   server: "LAPTOP-5KRRGCSH\\MSSQLSERVER01", // e.g., 'localhost'
//   database: "evcare",
//   options: {
//     trustedConnection: true,
//     encrypt: false, // Use this if you're on Azure
//     trustServerCertificate: true, // Change to true for local dev / self-signed certs
//   },
// };

// // API endpoint to handle login
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const sql = "SELECT * FROM [User] WHERE [Name] = '" + username + "'";
//     console.log("HIIIIIIIIIIII: ", sql);

//     // Connect to the database
//     await mssql.connect(config);

//     const request = new mssql.Request();
//     request.input('username', mssql.VarChar, username);

//     const result = await request.query(sql);

//     // Return the result
//     return res.json(result.recordset);
//   } catch (err) {
//     console.error('SQL error', err);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     // Close the connection
//     await mssql.close();
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });