const OpenAIService = require('../services/openAIService');

class AIProcessor {
  constructor() {
    this.openAIService = new OpenAIService();
    this.userContexts = new Map(); // In-memory storage for user contexts
  }

  async processMessage(message, userInfo) {
    return this.generateResponse(message, userInfo);
  }

  async generateResponse(message, userInfo) {
    const userContext = await this.getUserContext(userInfo.username);
    const prompt = `
      User ${userInfo.username} said: "${message}".
      User context: ${JSON.stringify(userContext)}
      Channel context: ${await this.getChannelContext()}
      Generate a friendly and contextually appropriate response.
    `;
    return this.openAIService.generateText(prompt);
  }

  async getUserContext(username) {
    if (!this.userContexts.has(username)) {
      this.userContexts.set(username, {
        chatHistory: [],
        preferences: {},
        lastSeen: null,
        messageCount: 0
      });
    }

    const userContext = this.userContexts.get(username);

    // Update user context
    userContext.lastSeen = new Date();
    userContext.messageCount++;

    // Add the current message to chat history (limit to last 10 messages)
    userContext.chatHistory.push(message);
    if (userContext.chatHistory.length > 10) {
      userContext.chatHistory.shift();
    }

    // Update user preferences based on message content (example implementation)
    this.updateUserPreferences(userContext, message);

    return userContext;
  }

  updateUserPreferences(userContext, message) {
    // This is a simple example of updating user preferences
    // You can expand this based on your specific needs
    if (message.toLowerCase().includes('game')) {
      userContext.preferences.interestedInGames = true;
    }
    if (message.toLowerCase().includes('music')) {
      userContext.preferences.interestedInMusic = true;
    }
    // Add more preference updates based on message content
  }

  async getChannelContext() {
    // Implement logic to fetch channel context (e.g., stream topic, recent events)
    // This is a placeholder implementation
    return { topic: 'General discussion', recentEvents: [] };
  }
}

module.exports = AIProcessor;
