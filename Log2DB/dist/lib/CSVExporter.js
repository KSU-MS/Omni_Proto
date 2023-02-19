"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVExporter = void 0;
const fs_1 = require("fs");
class CSVExporter {
    constructor(path) {
        this.stream = fs_1.createWriteStream(path, { encoding: "utf8" });
    }
    // Incoming data is timestamp, id, value
    write(records) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!records || records.length === 0)
                return null;
            return new Promise((resolve, reject) => {
                const chunk = records
                    .map((signal) => signal.join(","))
                    .join("\n");
                this.stream.write(chunk, (err) => {
                    if (err)
                        console.error(err);
                    resolve();
                });
            });
        });
    }
    close() {
        this.stream.close();
    }
}
exports.CSVExporter = CSVExporter;
//# sourceMappingURL=CSVExporter.js.map