import { Test, TestingModule } from '@nestjs/testing';
import { CodeGenerationService } from './code-generation.service';
import { ConfigService } from '@nestjs/config';

describe('CodeGenerationService', () => {
  let service: CodeGenerationService;

  // Mock implementation of the ConfigService
  const mockConfigService = {
    get: jest.fn((key: string) => {
      if (key === 'OPENAI_API_KEY') {
        return 'test_api_key'; // Replace with your test API key
      }
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // Include the actual service
      providers: [
        CodeGenerationService,
        // Provide the mock implementation
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    service = module.get<CodeGenerationService>(CodeGenerationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
