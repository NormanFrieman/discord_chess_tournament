const Discord = require("discord.js");
import { Message } from "discord.js";
import { Connection } from "typeorm";

function StartServer(connection: Connection){
/**
 * CONFIGURE THE INITIAL VARIABLES
 */
    const config = require("../../config.json");
    const client = new Discord.Client();




/**
 * START BOT
 */
    client.on("message", (message: Message) => {
        console.log(message);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default StartServer;