import OpenAIApi from 'openai';
import { Logger } from '../utils/logger';

const openaiApiKey: string = process.env.OPENAI_API_KEY || '';
const openai = new OpenAIApi({ apiKey: openaiApiKey });


export const openAiService = (openai: OpenAIApi) => {
  const generateCode = async (description: string): Promise<string> => {
    // Interact with OpenAI API and return the generated code
    // ...
    Logger.printLogs(`Description: ${description}`);
    // Placeholder for actual API interaction
    return `Generated code for: ${description}`;
  };

  return { generateCode };
};
