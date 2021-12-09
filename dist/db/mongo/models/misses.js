"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissSchema = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var mongoose_1 = __importDefault(require("mongoose"));
exports.MissSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    channel: { type: String, required: true },
    hours: { type: String, required: false },
    state: { type: String, required: false },
    mimState: { type: String, required: false },
    city: { type: String, required: false },
    site: { type: String, required: false },
    facebook: { type: String, required: false },
    instagram: { type: String, required: false },
    telegram: { type: String, required: false },
    view: { type: String, required: false },
    image: { type: String, required: false },
    masses: { type: String, required: false },
    rosary: { type: String, required: false },
    homily: { type: String, required: false },
    tags: { type: Array, required: true },
});
var Miss = mongoose_1.default.model('Miss', exports.MissSchema);
exports.default = Miss;
