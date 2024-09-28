class CommandHandler {
  handleCommand(client, channel, tags, message) {
    const [command, ...args] = message.slice(1).split(' ');

    switch (command.toLowerCase()) {
      case 'hello':
        client.say(channel, `@${tags.username}, Hello there!`);
        break;
      case 'uptime':
        this.handleUptime(client, channel, tags);
        break;
      case 'shoutout':
        this.handleShoutout(client, channel, tags, args);
        break;
      default:
        client.say(channel, `@${tags.username}, Unknown command: ${command}`);
    }
  }

  async handleUptime(client, channel, tags) {
    // Implement logic to fetch stream uptime
    const uptime = await this.twitchAPI.getStreamUptime(channel);
    client.say(channel, `@${tags.username}, the stream has been live for ${uptime}`);
  }

  handleShoutout(client, channel, tags, args) {
    if (args.length === 0) {
      client.say(channel, `@${tags.username}, please specify a user to shoutout`);
      return;
    }
    const targetUser = args[0].replace('@', '');
    client.say(channel, `Huge shoutout to @${targetUser}! Go check out their channel at https://twitch.tv/${targetUser}`);
  }
}

module.exports = CommandHandler;
