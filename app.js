"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fs = require("fs");
const func = require("./functions");
const app = {
    init: () => {
        if (!fs.existsSync("./app")) {
            fs.mkdirSync("app");
        }
    },
    aword: (req, res) => {
        if (!fs.existsSync("./app/aword")) {
            fs.mkdirSync("./app/aword");
            fs.writeFileSync("./app/aword/config.json", `[{"type":"default","default":true,"content":"aword.txt"}]`);
            fs.writeFileSync("./app/aword/aword.txt", `[{"txt":"Hello!"},{"txt":"This is the default Aword Txt."},{"txt":"Have a nice time."}]`);
        }
        const _config = JSON.parse(fs.readFileSync("./app/aword/config.json", "UTF-8"));
        let _type = "";
        let _default = "";
        let _path = "";
        let _aword = [];
        if (req.params.name) {
            _type = decodeURIComponent(req.params.name);
        }
        for (let i = 0; i < _config.length; i++) {
            if (_config[i]["default"]) {
                _default = `./app/aword/${_config[i]["content"]}`;
            }
            if (_config[i]["type"] == _type) {
                _path = `./app/aword/${_config[i]["content"]}`;
            }
        }
        if (!_path) {
            _path = _default;
        }
        _aword = JSON.parse(fs.readFileSync(_path, "UTF-8"));
        const _number = func.getRandomNumber(_aword.length);
        if (req.query.return == "txt") {
            res.send(_aword[_number]["txt"]);
        }
        else {
            res.send({ code: 200, msg: "success", data: { id: _number, content: _aword[_number]["txt"], author: _aword[_number]["author"] } });
        }
    },
    img: (req, res) => {
        if (!fs.existsSync("./app/image")) {
            fs.mkdirSync("./app/image");
        }
        if (fs.existsSync(`./app/image/${req.params.name}`)) {
            const _dir = fs.readdirSync(`./app/image/${req.params.name}`);
            if (_dir.length != 0) {
                const _number = func.getRandomNumber(_dir.length);
                console.log(_number);
                console.log(`${__dirname}/app/image/${req.params.name}/${_dir[_number]}`);
                res.sendFile(`${__dirname}/app/image/${req.params.name}/${_dir[_number]}`);
            }
            else {
                res.send({ code: 404, msg: "no found" });
            }
        }
        else {
            res.send({ code: 404, msg: "no found" });
        }
    },
    about: () => {
        const about = `Grass Free API [v1.0.0]\nCopyright (c) 2022 Grass Development Team.\n\nGrass Free API is a free api system for everyone. You can use it to do what you want without an api key.`;
        return about;
    }
};
exports.app = app;
