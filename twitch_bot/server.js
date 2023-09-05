require('dotenv').config();

const tmi = require('tmi.js');
const client = new tmi.Client({
    options: {debug: true},
    connection: {
        reconnect: true
    },
    channels: [ 'ithareal_irl' ],
    identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	}
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if(self) return;

if (tags.username.toLowerCase() === process.env.TWITCH_BOT_USERNAME.toLowerCase()) return;

    client.say(channel, `Message "${message}" was sent by ${tags.username}`)
    
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
});

