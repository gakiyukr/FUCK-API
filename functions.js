"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = void 0;
const getRandomNumber = (_max) => {
    return Math.floor(Math.random() * (_max)) + 0;
};
exports.getRandomNumber = getRandomNumber;
