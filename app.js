const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

require('dotenv').config();
const OpenAI = require('openai');
const dummy = ["sk-Y6fJavYlx", "7UYnRKEWrzOT3Blbk", "FJcyYSC3Dq41V2BCVrStd1"]

const openai = new OpenAI(dummy.join());

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/generate-code', async (req, res) => {
  const description = req.body.description;  // Expecting a description of the page to generate
  const prompt = `Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), generate a React component mockup for the following specifications:`;
  
  console.log('====================================');
  console.log(`key:  ${process.env.OPENAI_API_KEY}`);

  console.log('====================================');
  console.log(` ${prompt} : ${description}`);
  console.log('====================================');
  
  try {
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "you are marv a code generator that answers request with code only. you do not explain the code you provide. you return a code snippet in the form of a div element with the necessary components in it. do not return any logic beyond that.\n\n"
        },
        {
          "role": "user",
          "content": "Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), Create a JSX snippet for the following specifications:\nCreate a JSX snippet for a user profile card including a profile picture, user's full name, and a 'Follow' button."
        },
        {
          "role": "assistant",
          "content": "<div className=\"flex flex-col items-center p-4\">\n  <RMGImage src=\"path/to/profile_picture.png\" alt=\"Profile Picture\" />\n\t<RMGText content=\"John Doe\" ></RMGText>\n\t<RMGButton title=\"Follow\" onClick={()=>alert(\"hi\")} />\n</div>\n"
        },
        {
          "role": "user",
          "content": "Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), Create a JSX snippet for the following specifications:\nI'd like to create a login page with an email input, password input, and a submit button."
        },
        {
          "role": "assistant",
          "content": "<div><RMGInput type='email' placeholder='Enter your email' /><RMGInput type='password' placeholder='Enter your password' /><RMGButton title='Submit' /></div>"
        },
        {
          "role": "user",
          "content": "Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), Create a JSX snippet for the following specifications:\ncreate signup form including fields for first name last name email ad password and a  submit button.\n"
        },
        {
          "role": "assistant",
          "content": "<div>\n  <div>\n    <RMGText content=\"First Name\" />\n    <RMGInput type=\"text\" placeholder=\"Enter your first name\" />\n  </div>\n  <div>\n    <RMGText content=\"Last Name\" />\n    <RMGInput type=\"text\" placeholder=\"Enter your last name\" />\n  </div>\n  <div>\n    <RMGText content=\"Email\" />\n    <RMGInput type=\"email\" placeholder=\"Enter your email\" />\n  </div>\n  <div>\n    <RMGText content=\"Password\" />\n    <RMGInput type=\"password\" placeholder=\"Enter your password\" />\n  </div>\n  <div>\n    <RMGButton title=\"Submit\" />\n  </div>\n</div>"
        },
        {
          "role": "user",
          "content": "Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), Create a JSX snippet for the following specifications:\n I'd like to create a login page with an email input, password input, and a submit button."
        },
        {
          "role": "assistant",
          "content": "<div>\n  <RMGText content=\"Email\" />\n  <RMGInput type=\"email\" placeholder=\"Enter your email\" />\n  <RMGText content=\"Password\" />\n  <RMGInput type=\"password\" placeholder=\"Enter your password\" />\n  <RMGButton title=\"Submit\" />\n</div>"
        }
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const generatedCode = gptResponse.choices[0].message.content;
    console.log('====================================');
    console.log(` ${generatedCode}`);
    console.log('====================================');
    res.json({ code: generatedCode });
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing your request");
  }
});


app.get('/', async (req, res) => {

  res.json({ test: "working!!!" });

});
