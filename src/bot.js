require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "-";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);

        if (CMD_NAME === 'kannalick') {
            message.channel.send('https://i.kym-cdn.com/photos/images/newsfeed/001/230/497/04d.gif');
        } else if (CMD_NAME === 'kannaexcite') {
            message.channel.send('https://pa1.narvii.com/6489/e86ed4a3f4cb049cdbc7289a8f7a3407c40d7012_hq.gif');
        } else if (CMD_NAME === 'kannabraid') {
            message.channel.send('https://pa1.narvii.com/6397/ddb5b6290233fc76d85ad2ece0b75dd2a70f5385_hq.gif');
        } else if (CMD_NAME === 'kannadraw') {
            message.channel.send('https://thumbs.gfycat.com/RemarkableJointCaracal-size_restricted.gif');
        } else if (CMD_NAME === 'kannasleep') {
            message.channel.send('https://pa1.narvii.com/6354/1564e64732f66cf9880eef6b29d1697036f01a6a_hq.gif');
        } else if (CMD_NAME === 'kannacatch') {
            message.channel.send('https://thumbs.gfycat.com/TightVigorousAmazonparrot-size_restricted.gif');
        } else if (CMD_NAME === 'kannacry') {
            message.channel.send('https://media2.giphy.com/media/lW4m91PCHUw8w/source.gif');
        }
    }
});

client.login(process.env.KANNA_BOT_TOKEN);

//c C