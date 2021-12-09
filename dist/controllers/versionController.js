"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plusVersion = exports.updateVersion = exports.version = void 0;
var version_1 = __importDefault(require("../db/mongo/models/version"));
var version = function (req, res) {
    version_1.default.find(function (err, version) {
        if (version.length == 0) {
            addVersion(1);
            res.json({ version: 1 });
            return;
        }
        if (err) {
            res.send('Error!');
        }
        else {
            res.send(version);
        }
    });
};
exports.version = version;
var updateVersion = function (req, res) {
    var versionID;
    version_1.default.find(function (err, version) {
        if (version.length == 0)
            res.send('No version found');
        versionID = version[0]['_id'];
        version_1.default.findByIdAndUpdate(versionID, req.body, function (err, ver) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ msg: 'Successfully update version' });
            }
        });
    });
};
exports.updateVersion = updateVersion;
var plusVersion = function (req, res) {
    var versionID;
    var currentVersion;
    version_1.default.find(function (err, version) {
        if (version.length == 0)
            res.send('No version found');
        versionID = version[0]['_id'];
        currentVersion = version[0]['version'];
        version_1.default.findByIdAndUpdate(versionID, { version: currentVersion + 1 }, function (err, ver) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({
                    msg: 'Successfully update version to ' + (currentVersion + 1),
                });
            }
        });
    });
};
exports.plusVersion = plusVersion;
var addVersion = function (cv) {
    var ver = new version_1.default({ version: cv });
    ver.save();
};
