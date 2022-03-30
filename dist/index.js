"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.create = exports.filterProperty = exports.dequal = exports.debounce = void 0;
var Form_1 = __importStar(require("./Form"));
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return Form_1.create; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return utils_1.debounce; } });
Object.defineProperty(exports, "dequal", { enumerable: true, get: function () { return utils_1.dequal; } });
Object.defineProperty(exports, "filterProperty", { enumerable: true, get: function () { return utils_1.filterProperty; } });
exports.default = Form_1.default;
exports.types = __importStar(require("./types"));
