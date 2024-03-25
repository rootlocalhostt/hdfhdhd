const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const duration = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('00DCFF')
	.setTitle('Help')
	.setDescription("**Minecraft-bypass** \n **Cloudflare-bypass** \n **Udmux-bypas**  \n **Handshake(botnet)** \n **Http-kill** \n **Fivem-kill** \n **Tls-bypass** \n **Http-raw**")
	.setFooter("Aqua Team")
	message.channel.send(embed1);
	return;
	}






  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
}

exports.help = {
  name: 'help',
  description: 'Aqua',
  usage: 'help'
}
