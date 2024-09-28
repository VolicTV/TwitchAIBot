# TwitchAIBot

TwitchAIBot is an AI-powered chatbot for Twitch streams. It uses natural language processing to interact with viewers, provide information, and enhance the overall chat experience.

## Features

- Real-time chat interaction
- AI-powered responses with context-aware generation
- Custom commands including:
  - `!hello`: Greet the user
  - `!uptime`: Display stream uptime
  - `!shoutout`: Give a shoutout to another user
- User profile consideration for personalized interactions
- Twitch API integration for stream information
- Robust error handling and logging

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Docker and Docker Compose (for development environment)
- A Twitch account and [developer application](https://dev.twitch.tv/console/apps)
- An [OpenAI API key](https://beta.openai.com/signup/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VolicTV/TwitchAIBot.git
   ```

2. Navigate to the project directory:
   ```bash
   cd TwitchAIBot
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `config/default.json` file with your Twitch and OpenAI credentials:
   ```json
   {
     "twitchBot": {
       "username": "YourBotUsername",
       "oauth": "oauth:YourOAuthToken",
       "channel": "YourChannelName"
     },
     "openai": {
       "apiKey": "YourOpenAIApiKey"
     },
     "twitch": {
       "clientId": "YourTwitchClientId",
       "clientSecret": "YourTwitchClientSecret"
     }
   }
   ```

## Usage

### Development

To start the bot in development mode using Docker:

```bash
docker-compose up
```

This will start the bot with hot-reloading enabled.

### Production

To start the bot in production mode:

```bash
npm start
```

## Testing

Run the test suite with:

```bash
npm test
```

## Contributing

Contributions to TwitchAIBot are welcome! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- OpenAI for providing the AI capabilities
- Twitch for their API and developer tools
```