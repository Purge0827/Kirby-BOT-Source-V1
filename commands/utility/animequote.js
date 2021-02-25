const { MessageEmbed } = require('discord.js');
const { randomQuote } = require('animequotes');
const { searchAnime } = require('node-kitsu');

module.exports = {
  name: "aniquote",
  aliases: [ 'aq', 'animequote' ],
  group: 'fun',
  clientPermissions: [ 'EMBED_LINKS' ],
  description: 'Generate a random anime quote',
  parameters: [],
  get examples(){ return [this.name, ...this.aliases]; },
  run: async ( client, message) => {

    const { quote, anime, id, name } = randomQuote();

    const res = await searchAnime(anime,0).catch(()=>{}) || [];

    const image = res?.[0]?.attributes?.coverImage?.original || null;

    return message.channel.send(
      new MessageEmbed()
      .setColor(`GREY`)
      .addField(`*Quoted from ${anime}*`,`${quote}\n\n-*${name}*`)
      .setImage(image)
      .setTimestamp()
    );
  }
};