import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Logger } from './utils/logger';
import { generateCode } from './services/codeGenerationService'
dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

const port: number = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/generate-code', async (req: Request, res: Response) => {
  const description: string = req.body.description; // Expecting a description of the page to generate
  try {
    const generatedCode = await generateCode(description);
    Logger.printLogs(generatedCode);
    res.json({ code: generatedCode });
  } 
  catch (error) {
    console.error(error);
    res.status(500).send("Error processing your request");
  }
});

app.get('/', async (req: Request, res: Response) => {
  res.json({ test: "the endpoint is healthy" });
});
