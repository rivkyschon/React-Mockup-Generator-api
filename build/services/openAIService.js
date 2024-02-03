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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAiService = void 0;
const openai_1 = __importDefault(require("openai"));
const logger_1 = require("../utils/logger");
const openaiApiKey = process.env.OPENAI_API_KEY || '';
const openai = new openai_1.default({ apiKey: openaiApiKey });
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
