const Discord = require("discord.js"),
      { owners } = require("../../config.json"),
      { post } = require("node-superfetch");

module.exports = {
  name: "eval",
aliases: ["ev"],
  category: "owner",
  run: async (client, message, args) => {
  // This command is super frickin' dangerous. Make it only visible and usable for you only, or give it to someone you trust
    const eembed = new Discord.MessageEmbed()
            .setTitle('Evaluating...')
    .setColor(`GREEN`)
        const msg = await message.channel.send(eembed);
  
  const embed = new Discord.MessageEmbed()
  .addField("📥 Input", "```js\n" + args.join(" ") + "```");
  
  try {
   const error = new Discord.MessageEmbed()
   .setTitle("Provide a Code to eval!")
   .setColor("#FF0000")
    const code = args.join(" ");
    if (!code) return msg.edit(error);
    let evaled;
    
    // This method is to prevent someone that you trust, open the secret shit here.
    if (code.toLowerCase().includes(`process.exit()`) || code.toLowerCase().includes(`client.token`) || code.toLowerCase().includes("config.token") || !owners.includes(message.author.id)) {
      evaled = "Access Denied";
    } else {
      evaled = eval(code);
    }
    
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});
    
    let output = clean(evaled);
    if (output.length > 1024) {
      // If the output was more than 1024 characters, we're gonna export them into the hastebin.
      const {body} = await post("https://hastebin.com/documents").send(output);
      embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor(0x7289DA);
      // Sometimes, the body.key will turn into undefined. It might be the API is under maintenance or broken.
    } else {
      embed.addField("📤output", "```js\n" + output + "```").setColor(0x7289DA)
      embed.addField("Type", "```js\n" + typeof evaled + "```")
  }
                            
                      
await msg.edit(embed)
            await msg.react('✅')
            await msg.react('❌')
            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '✅':
                                msg.reactions.removeAll();
                                break;
                            case '❌':
                                msg.delete()
                                break;
                        }
                    })

                })                  
    
  } catch (error) {
    let err = clean(error);
    if (err.length > 1024) {
      // Do the same like above if the error output was more than 1024 characters.
      const {body} = await post("https://hastebin.com/documents").send(err);
      embed.addField("📤 output", `https://hastebin.com/${body.key}.js`).setColor("RED");
    } else {
      embed.addField("📤 output", "```js\n" + err + "```").setColor("#FF0000");
    }
    
    msg.edit(embed);
    
                        
                    
  }
}
          
               
}
  function clean(string) {
  if (typeof text === "string") {
    return string.replace(/`/g, "`" + String.fromCharCode(8203))
    .replace(/@/g, "@" + String.fromCharCode(8203))
  } else {
    return string;
  }}