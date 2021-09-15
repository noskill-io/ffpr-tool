"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt");
console.log("Hello World!");
prompt.get(["test"], (err, result) => {
    console.log("your result: " + result.test);
});
