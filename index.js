const Discord = require('discord.js')
require ("dotenv").config()

const TOKEN = "OTUxNzE3MjgzMTQxNjU2NTg2.Yirhyg.vD2q8kV6jaysHTieEmwp790TKQs"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log("ready")
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello")
    }
})

client.login(process.env.TOKEN)