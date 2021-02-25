module.exports = {
  name: "clear",
  aliases: ["purge", "clearmsgs", "clean"],
  category: "moderation",
  userPerms: ["MANAGE_MESSAGES"],
  botPerms: ["MANAGE_MESSAGES"],
  description: "Clear Your Messages!",
  usage: "Clear <Message Amount>",
  run: async (client, message, args) => {
    //Start

    if (!args[0])
      return message.channel.send(`:x: | **Please Give Me Amounts Of Messages!**`);

    if (isNaN(args[0]))
      return message.channel.send(`:x: | **Please Give Me Number Value!**`);


    if (args[0] > 100)
      return message.channel.send(
        `:x: | **I Can't Delete ${args[0]} Messages Because Of Discord Limit!**`
      );


    message.channel.bulkDelete(args[0]).then(Message => {
      return message.channel.send(`✅ | **Cleared ${Message.size} messages!**`).then(Message =>{
        setTimeout(function(){
            Message.delete()
            .catch()
        }, 2000)
    }
    )
    })
}
}