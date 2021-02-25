const randomanime = require('random-anime')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ranime",
    category: "fun",
    description: "Send a random anime image",
    usage: "ranime",
    run: async (client, message, args) => {
      const img = randomanime.anime()
      const anime = new MessageEmbed()
      .setImage(img)
.setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        message.channel.send(anime)
    }
}