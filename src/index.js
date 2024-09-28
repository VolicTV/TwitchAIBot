const TwitchBot = require('./bot/twitchBot');
const config = require('../config/default.json');

const bot = new TwitchBot(config.twitchBot);

bot.connect().catch(console.error);
