const Discord = require("discord.js")
const config = require("./configLoader")
const client = new Discord.Client({
    disableMentions: "everyone",
    presence: {
        status: "idle",
        activity: {
            type: "PLAYING",
            name: "with some plugins, trying to get them to load"
        }
    }
})

client.login(config.token)