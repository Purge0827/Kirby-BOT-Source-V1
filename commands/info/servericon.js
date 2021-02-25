const discord = require("discord.js")

module.exports = {
  name: "servericon",
  aliases: ["sicon", "serveravatar", "guildavatar", 'icon'],
  category: 'Info',
  description: "Display The Icon Of The Server.",
  timeout: '5',
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
      embed.setAuthor(`${message.guild.name}'s Icon`, message.guild.iconURL({dynamic: true}))
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 512 }))
      embed.setColor("RANDOM")
    
      message.channel.send(embed)
    
  }
}