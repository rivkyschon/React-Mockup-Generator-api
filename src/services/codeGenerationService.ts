import OpenAIApi from 'openai';

const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY 
  });

export async function generateCode(description: string): Promise<string> {
  const introPrompt:string = `Given a list of React components (RMGButton, RMGInput, RMGText, RMGHeader, RMGTable), generate a React component mockup for the following specifications: \n`;
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
          "content": `${introPrompt} Create a JSX snippet for a user profile card including a profile picture, user's full name, and a 'Follow' button.`
        },
        {
          "role": "assistant",
          "content": "<div className=\"flex flex-col items-center p-4\"> <RMGImage src=\"path/to/profile_picture.png\" alt=\"Profile Picture\" /><RMGText content=\"John Doe\" ></RMGText><RMGButton title=\"Follow\" onClick={()=>alert(\"hi\")} /></div>"
        },
        {
          "role": "user",
          "content": `${introPrompt} I'd like to create a login page with an email input, password input, and a submit button.`
        },
        {
          "role": "assistant",
          "content": "<div><RMGInput type='email' placeholder='Enter your email' /><RMGInput type='password' placeholder='Enter your password' /><RMGButton title='Submit' /></div>"
        },
        {
          "role": "user",
          "content": `${introPrompt} create signup form including fields for first name last name email ad password and a  submit button.\n`
        },
        {
          "role": "assistant",
          "content": "<div>  <div>    <RMGText content=\"First Name\" />    <RMGInput type=\"text\" placeholder=\"Enter your first name\" /> </div> <div>   <RMGText content=\"Last Name\" />    <RMGInput type=\"text\" placeholder=\"Enter your last name\" />  </div>  <div> <RMGText content=\"Email\" />   <RMGInput type=\"email\" placeholder=\"Enter your email\" /> </div> <div>  <RMGText content=\"Password\" />   <RMGInput type=\"password\" placeholder=\"Enter your password\" />  </div>  <div>    <RMGButton title=\"Submit\" /> </div></div>"
        },
        {
          "role": "user",
          "content": `${introPrompt}I'd like to create a login page with an email input, password input, and a submit button.`
        },
        {
          "role": "assistant",
          "content": "<div>  <RMGText content=\"Email\" />  <RMGInput type=\"email\" placeholder=\"Enter your email\" />  <RMGText content=\"Password\" />  <RMGInput type=\"password\" placeholder=\"Enter your password\" />  <RMGButton title=\"Submit\" /></div>"
        },
        {
          "role": "user",
          "content":`${introPrompt} ${description}`
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const generatedCode: string = gptResponse.choices[0].message.content || '';
    return generatedCode;

  } catch (error) {
    console.error('Error in codeGenerationService:', error);
    throw error;
  }
}
