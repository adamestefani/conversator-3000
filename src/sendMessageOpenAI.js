const { Configuration, OpenAIApi } = require('openai');
const config = require('./config/config.json');

const sendMessageOpenAI = async (username, inputMessage) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const { chatInitialMood } = config.chatOpenAI;

  try {
    const messages = [{ role: 'system', content: chatInitialMood }];
    const maxTokens = process.env.OPENAI_CHAT_MAX_TOKENS ? parseInt(process.env.OPENAI_CHAT_MAX_TOKENS) : 100;

    messages.push({ role: 'user', content: inputMessage });

    console.log('messages:', messages);

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: maxTokens,
    });
    const { data } = response;
    console.log('ChatCompletion response usage:', data.usage);

    const responseMessage = data.choices[0].message;
    console.log('ChatCompletion response message:', responseMessage);

    const cleanResponse = responseMessage.content
      .replace(/  /g, ' ')
      .replace(/\!\n/g, '! ')
      .replace(/\?\n/g, '? ')
      .replace(/:\n/g, ': ')
      .replace(/\.\n/g, '. ')
      .replace(/,\n/g, ', ')
      .replace(/\n/g, '; ')
      .replace(/; ; /g, '; ');

    console.log('cleanResponse: ', cleanResponse);

    return cleanResponse;
  } catch (error) {
    if (error.response && error.response.data) {
      console.log('ChatCompletion error response:', error.response.data);
      return error.response.data;
    }
    console.log('ChatCompletion error:', error);
    return error;
  }
};

module.exports = sendMessageOpenAI;
