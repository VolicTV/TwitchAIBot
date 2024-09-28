const OpenAIService = require('../services/openAIService');

class AIProcessor {
  constructor() {
    this.openAIService = new OpenAIService();
  }

  async processMessage(message, userInfo) {
    // Here you would implement logic to decide whether to respond
    // For now, let's respond to every message
    return this.generateResponse(message, userInfo);
  }

  async generateResponse(message, userInfo) {
    const prompt = `User ${userInfo.username} said: "${message}". Generate a friendly response.`;
    return this.openAIService.generateText(prompt);
  }
}

module.exports = AIProcessor;
