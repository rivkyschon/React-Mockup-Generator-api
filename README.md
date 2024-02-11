# Node.js OpenAI API Server

This project is a NestJS application that leverages OpenAI's GPT-3.5 model to generate code snippets from user descriptions. It exposes a RESTful API to receive requests and provide the generated code as a response.

## Features

- **OpenAI API Integration**: Engages with OpenAI's GPT models to dynamically generate code snippets in response to user inputs.
- **React Component Generation**: Formulates JSX snippets for React components tailored to specified user requirements.
- **CORS Support**: Configured to handle cross-origin requests, facilitating the integration with frontend applications hosted on separate domains.

## Libraries

- **nestjs**: A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- **cors**: A package for Node.js, providing middleware compatible with Connect/Express to enable CORS with various configuration options.
- **dotenv**: A dependency-free module that loads environment variables from a `.env` file into `process.env`.
- **openai**: The official Node.js client library for the OpenAI API.

## Installation and Setup

Execute these steps to configure the project locally. Ensure the availability of Node.js and npm in your environment.

1. **Clone the Repository**

   Clone the project from GitHub and navigate into the project directory:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
  

2. **Install dependencies**

   Inside the project directory, install the necessary npm packages:
   ```bash
      npm install
   ```

3. **Configure Environment Variable**

   Head over to https://platform.openai.com/api-keys and create your OPENAI_API_KEY.
   Create a .env file in the project's root directory and insert your OpenAI API key.

   ```bash
      OPENAI_API_KEY=your_openai_api_key_here
   ```
   
4. **Start the Server**
   
   Initiate the server using the command below. It will by default listen on port 5000.
   ```bash
   npm run start
   ```
   A confirmation message should appear, indicating that the server is operational and listening on the designated port.
   The server should now be running on http://localhost:5000 by default.
   
## Usage

  To generate code, make a POST request to /generate-code with a JSON body including the description of the page you want to generate:
  ```bash
    {
      "description": "I need a user profile page with a profile picture, user bio, and a 'Follow' button."
    }
```
  Use curl, Postman, or any HTTP client in your preferred programming language to send the request.

## Running the Tests
  Execute the automated tests with:
  ```bash
    npm run test
  ```
    

## Additional Information

- **Security Note**: Handle your OpenAI API key with utmost caution. Avoid exposing it in your codebase or including it in your version control system.
- **Server Port**: The server defaults to port 5000. Modify the server configuration if you need to use a different port.
- **Production Considerations**: While this setup is for demonstration purposes, consider implementing proper authentication, validation, error handling, and rate limiting for production environments.


## Contact

Rivky - [rivkyschon@outlook.co.il](mailto:your-email@example.com)

Project Link: [https://github.com/your-username/your-repository](https://github.com/rivkyschon/React-Mockup-Generator-api/)

## Acknowledgments

  - Thanks to anyone who contributed to the project.
  - Special thanks to the NestJS community and OpenAI for their support and inspiration.




