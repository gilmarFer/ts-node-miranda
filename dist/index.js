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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var missesController = __importStar(require("./controllers/missController"));
var versionController = __importStar(require("./controllers/versionController"));
var cors_1 = __importDefault(require("cors"));
var mongoseConnect_1 = __importDefault(require("./db/mongo/mongoseConnect"));
// Our Express APP config
var app = express_1.default();
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });
app.use(cors_1.default());
app.use(express_1.default.json());
app.set('port', process.env.PORT || 3000);
mongoseConnect_1.default;
function admMiddleware(req, res, next) {
    if (req.body.key == process.env.KEY)
        next();
    else {
        res.statusCode = 401;
        res.json({ error: 'Unauthorized' });
    }
}
// API Endpoints
app.get('/masses', missesController.allMiss);
app.post('/addDefaultMasses', admMiddleware, missesController.addDefaultMiss);
app.post('/masses', admMiddleware, missesController.addMiss);
app.put('/masses/:id', admMiddleware, missesController.updateMiss);
app.put('/increase', missesController.increaseMiss);
app.delete('/masses/:id', admMiddleware, missesController.deleteMiss);
app.get('/version', versionController.version);
app.put('/version', admMiddleware, versionController.updateVersion);
app.put('/plusVersion', admMiddleware, versionController.plusVersion);
app.listen(process.env.PORT || 3000, function () {
    console.log("App is running on http://localhost:" + process.env.PORT);
});
