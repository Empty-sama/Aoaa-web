"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const app = (0, express_1.default)();
const path = (0, path_1.join)(__dirname, '..', 'frontend');
const about = (0, path_1.join)(__dirname, '..', 'about');
app.use('/' || '/home', express_1.default.static(path));
app.use('/about', express_1.default.static(about));
app.all('*', (req, res) => res.sendStatus(404));
app.listen(8000);
//# sourceMappingURL=index.js.map