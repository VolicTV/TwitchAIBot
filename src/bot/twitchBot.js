const tmi = require('tmi.js');
const ChatHandler = require('./chatHandler');
const CommandHandler = require('./commandHandler');

class TwitchBot {
  constructor(config) {
    this.client = new tmi.Client({
      options: { debug: true },
      connection: {
        secure: true,
        reconnect: true
      },
      identity: {
        username: config.username,
        password: config.oauth
      },
      channels: [config.channel]
    });

    this.chatHandler = new ChatHandler();
    this.commandHandler = new CommandHandler();
  }

  connect() {
    return this.client.connect().then(() => {
      console.log('Connected to Twitch');
      this.registerEventHandlers();
    });
  }

  registerEventHandlers() {
    this.client.on('message', (channel, tags, message, self) => {
      if (self) return;

      if (message.startsWith('!')) {
        this.commandHandler.handleCommand(this.client, channel, tags, message);
      } else {
        this.chatHandler.handleChat(this.client, channel, tags, message);
      }
    });
  }
}

module.exports = TwitchBot;
