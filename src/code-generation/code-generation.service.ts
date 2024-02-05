// src/code-generation/code-generation.service.ts
import { Injectable } from '@nestjs/common';
import OpenAIApi from 'openai';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

@Injectable()
export class CodeGenerationService {
  private openai: OpenAIApi;
  private readonly logger = new Logger(CodeGenerationService.name);

  constructor(private configService: ConfigService) {
    this.openai = new OpenAIApi({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async generateCode(description: string): Promise<JSON> {
    const introPrompt: string = `Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), generate a React component mockup for the following specifications: \n`;
    this.logger.log(`request :\n ${description}`);

    try {
      const gptResponse = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are Max a code generator.\nProvide your answer in JSON form. Reply with only the answer in JSON form and include no other commentary:\nGiven the following React components:\n[\n  {\n    "component": "RMGText",\n    "props": {\n      "content": "string"\n    }\n  },\n  {\n    "component": "RMGInput",\n    "props": {\n      "placeholder": "string",\n      "type": "string"\n    }\n  },\n  {\n    "component": "RMGImage",\n    "props": {\n      "src": "string",\n      "alt": "string",\n      "width": "string",\n      "height": "string"\n    }\n  },\n  {\n    "component": "RMGHeader",\n    "props": {\n      "text": "string"\n    }\n  },\n{\n    "component": "RMGSubtitle",\n    "props": {\n      "text": "string"\n    }\n  },\n  {\n    "component": "RMGButton",\n    "props": {\n      "title": "string",\n      "onClick": "() => void"\n    }\n  }\n]\ncreate a JSON array representing the structure and properties \nfor the user specifications:',
          },
          {
            role: 'user',
            content:
              "create a user profile card including a profile picture, user's full name, and a 'Follow' button.",
          },
          {
            role: 'assistant',
            content:
              '[\n  {\n    "component": "RMGImage",\n    "props": {\n      "src": "path/to/profile_picture.png",\n      "alt": "Profile Picture"\n    }\n  },\n  {\n    "component": "RMGText",\n    "props": {\n      "content": "John Doe"\n    }\n  },\n  {\n    "component": "RMGButton",\n    "props": {\n      "title": "Follow"\n    }\n  }\n]\n',
          },
          {
            role: 'user',
            content:
              'create signup form including fields for first name last name email ad password and a  submit button.',
          },
          {
            role: 'assistant',
            content:
              "[\n    {\n      component: 'RMGLabel',\n      props: {\n        content: 'First Name',\n      },\n    },\n    {\n      component: 'RMGInput',\n      props: {\n        type: 'text',\n        placeholder: 'Enter your first name',\n      },\n    },\n    {\n      component: 'RMGLabel',\n      props: {\n        content: 'Last Name',\n      },\n    },\n    {\n      component: 'RMGInput',\n      props: {\n        type: 'text',\n        placeholder: 'Enter your last name',\n      },\n    },\n    {\n      component: 'RMGLabel',\n      props: {\n        content: 'Email',\n      },\n    },\n    {\n      component: 'RMGInput',\n      props: {\n        type: 'email',\n        placeholder: 'Enter your email',\n      },\n    },\n    {\n      component: 'RMGLabel',\n      props: {\n        content: 'Password',\n      },\n    },\n    {\n      component: 'RMGInput',\n      props: {\n        type: 'password',\n        placeholder: 'Enter your password',\n      },\n    },\n    {\n      component: 'RMGButton',\n      props: {\n        title: 'Submit',\n      },\n    },\n  ]",
          },
          {
            role: 'user',
            content:
              " I'd like to create a home page for my recipe and cooking website",
          },
          {
            role: 'assistant',
            content:
              '[\n  {\n    "component": "RMGHeader",\n    "props": {\n      "text": "Welcome to My Recipe Kitchen"\n    }\n  },\n  {\n    "component": "RMGImage",\n    "props": {\n      "src": "path/to/homepage_image.jpg",\n      "alt": "Kitchen Image",\n      "width": "500px",\n      "height": "300px"\n    }\n  },\n  {\n    "component": "RMGText",\n    "props": {\n      "content": "Browse through our collection of delicious recipes and cooking tips!"\n    }\n  },\n  {\n    "component": "RMGButton",\n    "props": {\n      "title": "View Recipes",\n      "onClick": "() => void"\n    }\n  }\n]',
          },
          {
            role: 'user',
            content:
              'create an image gallery, come up with a title, subtitle and button for uploading more images.',
          },
          {
            role: 'assistant',
            content:
              "[\n    {\n      component: 'RMGHeader',\n      props: {\n        text: 'Image Gallery',\n      },\n    },\n    {\n      component: 'RMGText',\n      props: {\n        content: 'Browse through our collection of beautiful images',\n      },\n    },\n    {\n      component: 'RMGButton',\n      props: {\n        title: 'Upload Images',\n        onClick: '() => void',\n      },\n    },\n    {\n      component: 'RMGImage',\n      props: {\n        src: 'path/to/image1.jpg',\n        alt: 'Image 1',\n        width: '300px',\n        height: '200px',\n      },\n    },\n    {\n      component: 'RMGImage',\n      props: {\n        src: 'path/to/image2.jpg',\n        alt: 'Image 2',\n        width: '300px',\n        height: '200px',\n      },\n    },\n    {\n      component: 'RMGImage',\n      props: {\n        src: 'path/to/image2.jpg',\n        alt: 'Image 2',\n        width: '300px',\n        height: '200px',\n      },\n    },\n    {\n      component: 'RMGImage',\n      props: {\n        src: 'path/to/image2.jpg',\n        alt: 'Image 2',\n        width: '300px',\n        height: '200px',\n      },\n    },\n  ]",
          },
          {
            role: 'user',
            content: `${description}`,
          },
        ],
        temperature: 1,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      const generatedCodeString: string =
        gptResponse.choices[0].message.content || '';
      this.logger.log(`Generated code string:\n ${generatedCodeString}`);

      const generatedCode: JSON = JSON.parse(generatedCodeString);
      this.logger.log(`Generated code:\n ${generatedCode}`);
      return generatedCode;
    } catch (error) {
      this.logger.error('Error in codeGenerationService:', error);
      throw error;
    }
  }
}
