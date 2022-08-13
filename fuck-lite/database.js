"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor(_dbname, _dbpath = ".") {
        this._data = {};
        this.fs = require("fs");
        this._dbname = _dbname;
        this._dbpath = _dbpath;
    }
    load() {
        this.fs.access(`${this._dbpath}/${this._dbname}.data`, this.fs.constants.F_OK, (err) => {
            if (!err) {
                this._data = JSON.parse(this.fs.readFileSync(`${this._dbpath}/${this._dbname}.data`, "UTF-8"));
            }
            else {
                this.fs.writeFileSync(`${this._dbpath}/${this._dbname}.data`, "{}");
            }
        });
    }
    write(_content, _dbname, _entry, _id = 0) {
        if (!this._data[_dbname]) {
            this._data[_dbname] = {};
        }
        if (!this._data[_dbname][_entry]) {
            this._data[_dbname][_entry] = [];
        }
        this._data[_dbname][_entry][_id] = _content;
        this.fs.writeFileSync(`${this._dbpath}/${this._dbname}.data`, JSON.stringify(this._data));
    }
    read(_dbname, _entry, _id = 0) {
        return this._data[_dbname][_entry][_id];
    }
    getLength(_dbname, _entry) {
        return this._data[_dbname][_entry].length;
    }
}
exports.Store = Store;
