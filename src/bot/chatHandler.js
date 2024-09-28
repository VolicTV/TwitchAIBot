const AIProcessor = require('../ai/aiProcessor');

class ChatHandler {
  constructor() {
    this.aiProcessor = new AIProcessor();
  }

  handleChat(client, channel, tags, message) {
    // Process the message with AI
    this.aiProcessor.processMessage(message, tags).then(response => {
      if (response) {
        client.say(channel, `@${tags.username}, ${response}`);
      }
    });
  }
}

module.exports = ChatHandler;
