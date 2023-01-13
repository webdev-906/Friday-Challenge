"use strict";
// middleware
// setting up express and mysql2
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql2_1 = __importDefault(require("mysql2"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// providing a connection with express/mysql
app.use((0, cors_1.default)());
// parsing JSON 
app.use(express_1.default.json());
// uses port 5001
const port = 5001;
// createPool allows you to have a memory of the mysql database
const db = mysql2_1.default.createPool({
    host: "localhost",
    user: 'root',
    password: 'mysql458!',
    database: 'classicmodels',
    connectionLimit: 10,
});
// Get all customers from mysql database that's listening on port 5001
app.get('/customers', (req, res) => {
    db.query('SELECT * FROM customers', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
});
app.listen(port, () => {
    console.log(`We are up and running on ${port}!`);
});
