

// middleware
// setting up express and mysql2

import express from 'express'; 
import mysql from 'mysql2';
import cors from 'cors';


const app = express();
// providing a connection with express/mysql
app.use(cors());
// parsing JSON 
app.use(express.json());


// uses port 5001
const port =  5001;

// createPool allows you to have a memory of the mysql database
const db = mysql.createPool({
  host: "localhost", 
  user: 'root',
  password: 'mysql458!',
  database: 'classicmodels',
  connectionLimit: 10, 
})

// Get all customers from mysql database that's listening on port 5001
app.get('/customers', (req: any, res: any) => {
  db.query('SELECT * FROM customers', (err: any, result: any) => {
    if (err){
      console.log(err)
    }
  console.log(result);
  });
});


app.listen(port, () => {
  console.log(`We are up and running on ${port}!`);
})


