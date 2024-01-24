"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());
var PORT = 4000;
var con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    port: "3306",
    database: "typescriptcrud"
});
con.connect(function (err) {
    if (err) {
        console.log("Database not connected...");
    }
    else {
        console.log("Database in connected....");
    }
});
app.post('/typeScriptpost', function (req, res) {
    var data = req.body;
    var sql = "INSERT into crudtypescript set ?";
    con.query(sql, data, function (err, result) {
        if (err) {
            console.log("Data is not posted...");
            res.json(err);
        }
        else {
            console.log("Data is posted...");
            res.json(result);
        }
    });
});
app.get('/typeScriptget/:id', function (req, res) {
    var id = req.params.id;
    var sql = "SELECT * from crudtypescript where id = ?";
    con.query(sql, id, function (err, result) {
        if (err) {
            console.log("Data is not getting...");
            res.json(err);
        }
        else {
            console.log("Data is getting...");
            res.json(result);
        }
    });
});
app.put('/typeScriptupdate/:id', function (req, res) {
    var data = req.body;
    var id = req.params.id;
    var sql = "UPDATE  crudtypescript SET ? WHERE id =?";
    con.query(sql, [data, id], function (err, result) {
        if (err) {
            console.log("Data is not updated...");
            res.json(err);
        }
        else {
            console.log("Data is updated...");
            res.json(result);
        }
    });
});
app.delete('/typeScriptdelete/:id', function (req, res) {
    var id = req.params.id;
    var sql = "delete from crudtypescript where id = ?";
    con.query(sql, id, function (err, result) {
        if (err) {
            console.log("Data is not deleted...");
            res.json(err);
        }
        else {
            console.log("Data is deleted...");
            res.json(result);
        }
    });
});
app.listen(PORT, function () {
    console.log("Port is running on ".concat(PORT, "..."));
});
