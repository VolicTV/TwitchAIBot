# TwitchAIBot

TwitchAIBot is an AI-powered chatbot for Twitch streams. It uses natural language processing to interact with viewers, provide information, and enhance the overall chat experience.

## Features

- Real-time chat interaction
- AI-powered responses
- Custom commands
- User profile consideration for personalized interactions

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
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
     }
   }
   ```

## Usage

To start the bot, run:

```
node src/index.js
```

## Contributing

Contributions to
