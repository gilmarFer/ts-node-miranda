"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDefaultMiss = exports.increaseMiss = exports.addMiss = exports.updateMiss = exports.deleteMiss = exports.allMiss = void 0;
var misses_1 = __importDefault(require("../db/mongo/models/misses"));
var misses_2 = __importDefault(require("../db/mongo/models/misses"));
var defaultJson = __importStar(require("../utils/default_json"));
var allMiss = function (req, res) {
    misses_2.default.find(function (err, misses) {
        if (err) {
            res.send('Error!');
        }
        else {
            res.send(misses);
        }
    });
};
exports.allMiss = allMiss;
var deleteMiss = function (req, res) {
    misses_2.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ msg: 'Successfully Deleted miss' });
        }
    });
};
exports.deleteMiss = deleteMiss;
var updateMiss = function (req, res) {
    misses_2.default.findByIdAndUpdate(req.params.id, req.body, function (err, miss) {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ msg: 'Successfully update miss' });
        }
    });
};
exports.updateMiss = updateMiss;
var addMiss = function (req, res) {
    var miss = new misses_1.default(req.body);
    miss.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(miss);
        }
    });
};
exports.addMiss = addMiss;
var increaseMiss = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var count, newView;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                count = 0;
                return [4 /*yield*/, misses_2.default.findById(req.body.id, function (err, user) { return (count = parseInt(user['view'])); })];
            case 1:
                _a.sent();
                newView = { view: count + 1 };
                misses_2.default.findByIdAndUpdate(req.body.id, newView, function (err, miss) {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json({ msg: 'Successfully update miss' });
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
exports.increaseMiss = increaseMiss;
var addDefaultMiss = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, _a, actualMiss, miss;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                misses_2.default.find(function (err, misses) {
                    if (misses.length > 0) {
                        res.send('Error, misses default already add');
                        return;
                    }
                });
                _i = 0, _a = defaultJson.defaultJson;
                _b.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                actualMiss = _a[_i];
                miss = new misses_1.default(actualMiss);
                return [4 /*yield*/, miss.save()];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                res.json({ msg: 'success' });
                return [2 /*return*/];
        }
    });
}); };
exports.addDefaultMiss = addDefaultMiss;
