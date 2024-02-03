import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodeGenerationService } from './code-generation/code-generation.service';
import { CodeGenerationModule } from './code-generation/code-generation.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    CodeGenerationModule,
  ],  controllers: [AppController],
  providers: [AppService, CodeGenerationService],
})
export class AppModule {}
