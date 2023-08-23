"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
class Main {
    constructor() {
        this.app = (0, express_1.default)();
        this.path = (0, path_1.join)(__dirname, '../main');
        this.app.use('/', express_1.default.static(this.path));
        this.app.all('*', (req, res) => res.sendStatus(404));
        this.app.listen(3000, () => console.log('Running at Port http://localhost:3000'));
    }
}
exports.Main = Main;
//# sourceMappingURL=app.js.map