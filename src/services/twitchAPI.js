const axios = require('axios');
const config = require('../../config/default.json');

class TwitchAPI {
  constructor() {
    this.clientId = config.twitch.clientId;
    this.clientSecret = config.twitch.clientSecret;
    this.accessToken = null;
  }

  async getAccessToken() {
    if (this.accessToken) return this.accessToken;

    const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: 'client_credentials'
      }
    });

    this.accessToken = response.data.access_token;
    return this.accessToken;
  }

  async getStreamUptime(channelName) {
    const token = await this.getAccessToken();
    const response = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
      headers: {
        'Client-ID': this.clientId,
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.data.data.length === 0) {
      return 'The stream is currently offline.';
    }

    const startTime = new Date(response.data.data[0].started_at);
    const uptime = new Date() - startTime;
    const hours = Math.floor(uptime / 3600000);
    const minutes = Math.floor((uptime % 3600000) / 60000);

    return `${hours} hours and ${minutes} minutes`;
  }
}

module.exports = TwitchAPI;
