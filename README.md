# Node.js OpenAI API Server

This Node.js server leverages the OpenAI API to generate code snippets based on user-defined specifications. The server, built on Express, incorporates CORS to manage cross-origin requests. It's structured to receive POST requests with descriptive content and return JSX snippets, utilizing React components, as per the requirements.

## Features

- **OpenAI API Integration**: Engages with OpenAI's GPT models to dynamically generate code snippets in response to user inputs.
- **React Component Generation**: Formulates JSX snippets for React components tailored to specified user requirements.
- **CORS Support**: Configured to handle cross-origin requests, facilitating the integration with frontend applications hosted on separate domains.

## Libraries

- **express**: A streamlined and adaptable Node.js web application framework, offering a comprehensive feature set for both web and mobile applications.
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
   
   Initiate the server using the command below. It will default to listening on port 5000.
   ```bash
   npm start
   ```
   A confirmation message should appear, indicating that the server is operational and listening on the designated port.

 5. **Accessing the Server**

      With the server active, it's accessible at http://localhost:5000. Utilize tools like Postman, or your frontend application, to send POST requests to the /generate-code       endpoint, accompanied by the necessary payload.

## Additional Information

- **Security Note**: Handle your OpenAI API key with utmost caution. Avoid exposing it in your codebase or including it in your version control system.
- **Server Port**: The server defaults to port 5000. Modify the server configuration if you need to use a different port.
- **Production Considerations**: While this setup is for demonstration purposes, consider implementing proper authentication, validation, error handling, and rate limiting for production environments.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Rivky - [rivkyschon@outlook.co.il](mailto:your-email@example.com)

Project Link: [https://github.com/your-username/your-repository](https://github.com/rivkyschon/React-Mockup-Generator-api/)

## Acknowledgments

- [OpenAI](https://openai.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- And everyone who contributes to open-source projects!

