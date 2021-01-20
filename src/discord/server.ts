const Discord = require("discord.js");

import { Message } from "discord.js";

import { Connection } from "typeorm";

import BeforeCommand from "./middlewares/BeforeCommand";

import { CommandClass } from "./class/Commands";
import { ResponseCommand } from "./class/ResponseCommand";

import setupDatabase from "../database/setupDatabase";

import setupCommands from "./setupCommands";

import Welcome from "./commands/Users/WelcomeBot";

function ServerInit(connection: Connection){
/**
 * CONFIGURE THE INITIAL VARIABLES
 */
    const config = require("../../config.json");
    const client: any = new Discord.Client();




/**
 * START BOT
 */
    client.on("message", (message: Message) => {
        /**
         * SEND MESSAGE TO NEW USER
         */
        if(message.type == "GUILD_MEMBER_JOIN"){
            Welcome(message.author);
            return;
        }




        /**
         * CREATE CLASSES: COMMANDS
         */
        const commands: CommandClass = setupCommands();



        /**
         * STARTS CHECKING COMMANDS
         */
        const response: ResponseCommand = BeforeCommand(message, commands);




        /**
         * IF NOT UNDEFINED, GO TO DATABASE SCRIPT
         */
        if(response == undefined) return;




        setupDatabase(connection, message, response);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default ServerInit;