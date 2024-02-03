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
exports.openAiService = void 0;
const logger_1 = require("./logger");
const openAiService = (openai) => {
    const generateCode = (description) => __awaiter(void 0, void 0, void 0, function* () {
        // Interact with OpenAI API and return the generated code
        // ...
        logger_1.Logger.printLogs(`Description: ${description}`);
        // Placeholder for actual API interaction
        return `Generated code for: ${description}`;
    });
    return { generateCode };
};
exports.openAiService = openAiService;