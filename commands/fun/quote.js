  
module.exports = {
  name: "quote",
  category: "fun",
  run: (client, message, args) => {
    if (!args.length) return message.reply("Please give some text to quote");
    message.send(`> ${args.join(" ")}\n ${message.author}`);
  },
};