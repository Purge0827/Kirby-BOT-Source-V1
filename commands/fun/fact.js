const { MessageEmbed } = require("discord.js");
const Random = require("srod-v2");

module.exports = {
  name: "fact",
  category: "fun",
  noalias: [""],
  description: "Sending random fact",
  usage: "[text]",
  run: async (bot, message, args) => {
    let Fact = await Random.GetFact("BLUE");
    message.channel.send(Fact);
  },
};