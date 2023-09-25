const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 377;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});

const mysql = require('mysql2/promise');
const conection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    database: 'conferir com emerson',
    user: 'root',
    password: ''
});

