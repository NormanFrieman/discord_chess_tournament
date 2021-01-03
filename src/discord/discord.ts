import Discord from "discord.js";
import HelloWorld from "./commands/HelloWorld"

function InitDiscord(): void {
    const config = require("../../config.json");
    const client = new Discord.Client();

    client.on("message", message => {
        HelloWorld(message);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default InitDiscord;