class CommandHandler {
  handleCommand(client, channel, tags, message) {
    const [command, ...args] = message.slice(1).split(' ');

    switch (command.toLowerCase()) {
      case 'hello':
        client.say(channel, `@${tags.username}, Hello there!`);
        break;
      // Add more commands as needed
      default:
        client.say(channel, `@${tags.username}, Unknown command: ${command}`);
    }
  }
}

module.exports = CommandHandler;
