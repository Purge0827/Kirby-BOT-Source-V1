const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const ms = require("ms");
module.exports = {
  name: "snipe",
  allow:"all",
  description: "Get a snipe of your choice in the channel",
  category: "fun",
  cooldown: 3,
  run: async (client, message, args,touse) => {
      const snipes = client.snipes.get(message.channel.id) || [];
      let em = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(":x: | **There is no deleted message in this channel!**")
      if(snipes == null ||snipes.length ==0)return message.channel.send(em);
      const msg = snipes[args[0] - 1 || 0];
      if (!msg) {
        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: | **That is not a valid snipe format!**`)
        message.channel.send(embed)
      }
      try {
        const Embed = new MessageEmbed()
        .setColor(`RANDOM`)
          .setDescription(msg.content)
          .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
        if (msg.attachment) Embed.setImage(msg.attachment);
        Embed.setAuthor(
          msg.author.tag,
          msg.author.displayAvatarURL({ dynamic: true, size: 256 })
        )
        message.channel.send(Embed);
      } catch (error) {
        return;
    }
  },
};