const { Configuration, OpenAIApi } = require("openai");
const config = require('../../config/default.json');

class OpenAIService {
  constructor() {
    const configuration = new Configuration({
      apiKey: config.openai.apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async generateText(prompt) {
    try {
      const response = await this.openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        max_tokens: 100
      });
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error generating AI response:', error);
      return null;
    }
  }
}

module.exports = OpenAIService;
