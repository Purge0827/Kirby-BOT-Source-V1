const Discord = require("discord.js")
module.exports = {
  name: "help",
  aliases: ["halp"],
  clientPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Help Center")
    .setDescription("**Here are list of my commands**")
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
      .addField(`Moderation`, '`kick` | `ban` | `slowmode` | `unban` | `nuke` | `lock` | `unlock`')
      .addField(`Information`, '`serverinfo` | `servericon`')
        .addField(`utility`, ' `ping` | `purge` | `avatar` | `snipe` | `steal` | `covid` | `calculate` | `remind`')
        .addField(`Fun`, '`meme` | `8ball` | `say` | `animequote` | `howgay` | `ranime` | `coinflip` | `status` | `joke` | `emojify` | `achievement` | `fact` | `quote`')
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Made by Purge#1338`, client.user.displayAvatarURL({ format: "png" }))
    message.channel.send(embed)
  }
}