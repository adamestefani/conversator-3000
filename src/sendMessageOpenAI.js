const { Configuration, OpenAIApi } = require('openai');
const config = require('./config/config.json');

const sendMessageOpenAI = async (username, inputMessage) => {
  const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION_ID,
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const { chatInitialMood } = config.chatOpenAI;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: chatInitialMood },
        { role: `user-${username}`, content: inputMessage },
      ],
      max_tokens: process.env.OPENAI_CHAT_MAX_TOKENS,
    });
    console.log('TEST --- ChatCompletion response:', response);
    console.log('TEST --- response message:', response.data.choices[0].message);

    return { response: response.data.choices[0].message };
  } catch (error) {
    console.log('TEST --- ChatCompletion error:', error);
    return { error: error };
  }
};

module.exports = sendMessageOpenAI;
