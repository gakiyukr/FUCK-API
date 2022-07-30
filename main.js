#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const app_1 = require("./app");
const fs = require("fs");
const express = require("express");
const http = require("https");
const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const _data = new database_1.Store("data", "./config");
let _port = 9000;
if (!fs.existsSync("config")) {
    fs.mkdirSync("config");
}
if (!fs.existsSync("temp")) {
    fs.mkdirSync("temp");
}
_data.load();
if (fs.existsSync("config.json")) {
    const _config = JSON.parse(fs.readFileSync("config.json"));
    if (_config["port"] && typeof _config["port"] == "number" && _config["port"] > 0 && _config["port"] <= 65535) {
        _port = _config["port"];
    }
}
console.log("Grass Free API [v1.0.0]\nCopyright (c) 2022 Grass Development Team.");
const server = new express();
app_1.app.init();
server.get("/api/v1/aword/:name", (req, res) => {
    app_1.app.aword(req, res);
});
server.get("/api/v1/image/:name", (req, res) => {
    app_1.app.img(req, res);
});
server.listen(_port);
const commandRead = () => {
    input.question("> ", (command) => {
        switch (command) {
            case 'exit':
                process.exit();
            case 'about':
                console.log(app_1.app.about());
                break;
            default:
                console.log('Invalid command, please enter correctly command.');
        }
        return commandRead();
    });
};
commandRead();
