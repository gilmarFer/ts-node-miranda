"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionSchema = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var mongoose_1 = __importDefault(require("mongoose"));
exports.VersionSchema = new mongoose_1.default.Schema({
    version: { type: Number, required: true },
});
var Version = mongoose_1.default.model('Version', exports.VersionSchema);
exports.default = Version;
