"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var mongoose_1 = __importDefault(require("mongoose"));
// const uri = 'mongodb://127.0.0.1:27017/local';
var pass = process.env.MONG_PASS;
var dbName = process.env.DB_NAME;
var uri = "mongodb+srv://mo:" + pass + "@mo.73ws7.mongodb.net/" + dbName + "?retryWrites=true&w=majority";
var conn = mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Successfully Connected!');
    }
});
exports.default = conn;
