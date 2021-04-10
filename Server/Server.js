const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 8888;
const app = expres();
const endPointRoot = 'API/v1/';

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    multipleStatements: true
});