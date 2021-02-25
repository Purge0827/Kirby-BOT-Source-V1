const {MessageEmbed} = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
    name: "covid",
    description: "Get Covid Stats",
    usage: "<channel id> <msg>",
    cooldown: 5,
    run: async (client, message, args) => {
const baseUrl = 'https://corona.lmao.ninja/v2';

    let url, response, corona;

    try {
        url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`;
        response = await fetch(url).then(res => res.json());
        corona = response;
    }
    catch (error) {
        return message.channel.send('An error occured, please try again!');
    }

    try{
        const embed = new MessageEmbed()
            .setTitle(args[0] ? `Coronavirus (COVID-19) Information - ${(args[0])}` : 'Coronavirus (COVID-19) Information - Worldwide')
            .setDescription('[Find out more info from the WHO here](https://www.who.int/emergencies/diseases/novel-coronavirus-2019)')
            .setColor('#ffc256')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .setFooter(`Requested by ${message.author.tag}`)
            .setTimestamp()
            .addFields(
                { name: 'Confirmed Cases', value: `\`\`\`${corona.cases.toLocaleString()}\`\`\``, inline: true },
                { name: 'Cases Today', value: `\`\`\`${corona.todayCases.toLocaleString()}\`\`\``, inline: true },
                { name: 'Total Deaths', value: `\`\`\`${corona.deaths.toLocaleString()}\`\`\``, inline: true },
                { name: 'Death Today', value: `\`\`\`${corona.todayDeaths.toLocaleString()}\`\`\``, inline: true },
                { name: 'Total Recovered', value: `\`\`\`${corona.recovered.toLocaleString()}\`\`\``, inline: true },
                { name: 'Critical Cases', value: `\`\`\`${corona.critical.toLocaleString()}\`\`\``, inline: true },
                { name: 'Active Cases', value: `\`\`\`${corona.active.toLocaleString()}\`\`\``, inline: true },
                { name: 'Total Tested', value: `\`\`\`${corona.tests.toLocaleString()}\`\`\``, inline: true },
                { name: 'Cases per million', value: `\`\`\`${corona.casesPerOneMillion.toLocaleString()}\`\`\``, inline: true },
                { name: 'Death per million', value: `\`\`\`${corona.deathsPerOneMillion.toLocaleString()}\`\`\``, inline: true },
                { name: 'Tested per million', value: `\`\`\`${corona.testsPerOneMillion.toLocaleString()}\`\`\``, inline: true },
                { name: 'Current Fatality Rate', value: `\`\`\`${(corona.deaths / corona.cases * 100).toFixed(1)}%\`\`\``, inline: true },
                { name: 'Current Recovery Rate', value: `\`\`\`${(corona.recovered / corona.cases * 100).toFixed(1)}%\`\`\``, inline: true },
                { name: 'Positive Test Pecentage', value: `\`\`\`${(corona.cases / corona.tests * 100).toFixed(1)}%\`\`\``, inline: true },
                { name: 'Negative Test Pecentage', value: `\`\`\`${100 - (corona.cases / corona.tests * 100).toFixed(1)}%\`\`\``, inline: true },
            );

        await message.channel.send(embed);
    }
    catch (e) {
        return message.channel.send(
            new MessageEmbed()
            .setColor('BLACK')
            .setDescription('Please provide a valid country.')
        );
    }
}
}