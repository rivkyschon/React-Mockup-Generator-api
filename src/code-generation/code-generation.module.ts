// src/code-generation/code-generation.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CodeGenerationService } from './code-generation.service';
import { CodeGenerationController } from './code-generation.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      // Your configuration here, if any
    }),
  ],
  controllers: [CodeGenerationController],
  providers: [CodeGenerationService]
})
export class CodeGenerationModule {}
