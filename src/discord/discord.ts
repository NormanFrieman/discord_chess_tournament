const { Webhook } = require("discord-webhook-node");
const Discord = require("discord.js");

import BeforeCommand from "./middlewares/BeforeCommand";

import { Categories } from "./class/Categories";
import { ResponseCommand } from "./class/ResponseCommand";

import setupDatabase from "../database/setupDatabase";
import setupCommands from "./setupCommands";

function InitDiscord(connection: any): void{
/**
 * CONFIGURE THE INITIAL VARIABLES
 */
    const config = require("../../config.json");
    const client = new Discord.Client();




/**
 * START BOT
 */
    client.on("message", (message: any) => {
        let condition = false;
        /**
         * CREATE CLASSES: CATEGORIES AND COMMANDS
         */
        const categories: Categories = setupCommands();




        /**
         * STARTS CHECKING COMMANDS
         */
        const response: ResponseCommand = BeforeCommand(message, categories);
        



        /**
         * IF NOT UNDEFINED, GO TO DATABASE SCRIPT
         */
        if(response == undefined) return;
        setupDatabase(connection, response);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default InitDiscord;