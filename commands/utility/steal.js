module.exports = {
        name: "steal",
        aliases: null,
        userPerms: ["MANAGE_EMOJIS"],
        clientPerms: ["MANAGE_EMOJIS"],
        run: async (client, message, args) => {
    const { parse } = require("twemoji-parser");
    const { MessageEmbed } = require("discord.js");
    const Discord = require("discord.js");
      const emoji = args[0];
      if (!emoji) return message.channel.send(":x: | **Please provide an emoji.**")
  
      let customemoji = Discord.Util.parseEmoji(emoji);
  
      if (customemoji.id) {
        const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
          customemoji.animated ? "gif" : "png"
        }`;
        const name = args.slice(1).join(" ");
        message.guild.emojis.create(
          `${Link}`,
          `${name || `${customemoji.name}`}`
        );
        const Added = new MessageEmbed()
          .setColor(`RANDOM`)
        .setTitle(`Emoji added`)
        .setThumbnail(Link)
          .setDescription(`The emoji has been added to the Server With The name \`${name || `${customemoji.name}`}\`\nLink - [Click Here](${Link})`)
        .setTimestamp();
        return message.channel.send(Added);
      } else {
        let CheckEmoji = parse(emoji, { assetType: "png" });
        if (!CheckEmoji[0])
          return message.channel.send(":x: | **Please provide a valid emoji.**")
        message.channel.send(":x: | **You can use normal emojis without adding it to this server.**")
      }
}
    }