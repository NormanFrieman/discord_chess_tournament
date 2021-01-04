import Discord from "discord.js";
import BeforeCommand from "./middlewares/BeforeCommand";

function InitDiscord(): void {
    const config = require("../../config.json");
    const client = new Discord.Client();

    client.on("message", message => {
        BeforeCommand(message);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default InitDiscord;