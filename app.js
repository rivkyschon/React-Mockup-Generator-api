const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

const openai = new OpenAI(process.env.OPENAI_API_KEY);
const port = 5000;

function printLogs(msg){
  console.log('====================================');
  console.log(msg);
  console.log('====================================');
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/generate-code', async (req, res) => {
  const description = req.body.description;  // Expecting a description of the page to generate
  const prompt = `Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), generate a React component mockup for the following specifications:`;
  
  printLogs(`key:  ${process.env.OPENAI_API_KEY}`);
  printLogs(` ${prompt} : ${description}`);

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
          "content": "<div className=\"flex flex-col items-center p-4\"> <RMGImage src=\"path/to/profile_picture.png\" alt=\"Profile Picture\" /><RMGText content=\"John Doe\" ></RMGText><RMGButton title=\"Follow\" onClick={()=>alert(\"hi\")} /></div>"
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
          "content": "<div>  <div>    <RMGText content=\"First Name\" />    <RMGInput type=\"text\" placeholder=\"Enter your first name\" /> </div> <div>   <RMGText content=\"Last Name\" />    <RMGInput type=\"text\" placeholder=\"Enter your last name\" />  </div>  <div> <RMGText content=\"Email\" />   <RMGInput type=\"email\" placeholder=\"Enter your email\" /> </div> <div>  <RMGText content=\"Password\" />   <RMGInput type=\"password\" placeholder=\"Enter your password\" />  </div>  <div>    <RMGButton title=\"Submit\" /> </div></div>"
        },
        {
          "role": "user",
          "content": "Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), Create a JSX snippet for the following specifications:\n I'd like to create a login page with an email input, password input, and a submit button."
        },
        {
          "role": "assistant",
          "content": "<div>  <RMGText content=\"Email\" />  <RMGInput type=\"email\" placeholder=\"Enter your email\" />  <RMGText content=\"Password\" />  <RMGInput type=\"password\" placeholder=\"Enter your password\" />  <RMGButton title=\"Submit\" /></div>"
        },
        {
          "role": "user",
          "content": `Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), Create a JSX snippet for the following specifications:\n ${description}`
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const generatedCode = gptResponse.choices[0].message.content;
    printLogs(generatedCode);
 
    res.json({ code: generatedCode });
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing your request");
  }
});


app.get('/', async (req, res) => {

  res.json({ test: "the endpoint is healthy" });

});
