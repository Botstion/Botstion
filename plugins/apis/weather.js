const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require("../../util/configLoader");


module.exports = {
    name: "Weather",
    author: "theLMGN",
    version: 1,
    description: "Weather powered by DarkSky",
    requiresConfig: "darkskyApiKey",
    commands: [
        {
            name: "weather",
            usage: "word[] city=London",
            description: "Weather powered by DarkSky",
            category: "Utilities",
            execute: async (c, m, a) => {
                let e = await m.reply({ embed: new Discord.MessageEmbed()
                    .setTitle("Working...")
                    .setDescription("Please wait a few seconds")
                    .setColor("#ffdd57") });
                let l = await fetch("https://darksky.net/geo?q=" + encodeURIComponent(a.city));

                if (!l.ok) {
                    return e.edit({ embed: new Discord.MessageEmbed()
                        .setAuthor(l.status + ": " + l.statusText, "https://cdn.discordapp.com/attachments/423185454582464512/425761155940745239/emote.png")
                        .setColor("#ff3860")
                        .setFooter("Maybe try a different location?") });
                } else {
                    let gps = await l.json();
                    let lf = await fetch(`https://darksky.net/rgeo?hires=1&lat=${gps.latitude}&lon=${gps.longitude}`);
                    let location = (await lf.json()).name;
                    let w = await fetch(`https://api.darksky.net/forecast/${config.darkskyApiKey}/${gps.latitude},${gps.longitude}?units=uk2`);
                    let weather = await w.json();

                    let alerts = ":smiley: There are no weather alerts in this region currently";
                    if (weather.alerts) {
                        alerts = `:warning: There are ${weather.alerts.length} weather alerts in this region.`;
                    }
                    let em = new Discord.MessageEmbed()
                        .setDescription(alerts)
                        .setFooter("Weather information powered by DarkSky")
                        .setColor("#23d160")
                        .setTitle(`${weather.currently.summary} (${weather.currently.temperature}C) in ${location}`);
                    if (weather.minutely) {
                        em.addField("And within the hour it'll be", weather.minutely.summary);
                    }
                    if (weather.hourly) {
                        em.addField("For the rest of today it'll be", weather.hourly.summary);
                    }
                    if (weather.daily) {
                        em.addField("During the week, it'll be", weather.daily.summary);
                    }
                    for (let day of weather.daily.data) {
                        let date = new Date(day.time * 1000);
                        let df = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
                        let data = `${day.summary} (HI: ${day.temperatureHigh}C, LO: ${day.temperatureLow}C)`;
                        em.addField(df, data);
                    }

                    return e.edit({ embed: em });
                }
            }
        }
    ]
};
