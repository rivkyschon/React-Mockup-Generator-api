// src/code-generation/code-generation.controller.ts
import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { CodeGenerationService } from './code-generation.service';
import { Response } from 'express';

@Controller()
export class CodeGenerationController {
  constructor(private readonly codeGenerationService: CodeGenerationService) {}

  @Post('/generate-code')
  async generateCode(@Body('description') description: string, @Res() res: Response) {
    try {
      const generatedCode = await this.codeGenerationService.generateCode(description);
      res.json({ code: generatedCode });
    } catch (error) {
      res.status(500).send("Error processing your request");
    }
  }

  @Get('/')
  getHealthCheck() {
    return { test: "this endpoint is healthy" };
  }
}
