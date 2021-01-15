const Discord = require("discord.js");

import { Client, Message } from "discord.js";

import { Connection } from "typeorm";

import BeforeCommand from "./middlewares/BeforeCommand";

import { Categories } from "./class/Categories";
import { ResponseCommand } from "./class/ResponseCommand";

import setupDatabase from "../database/setupDatabase";
import setupCommands from "./setupCommands";

import createChannels from "./commands/createChannels";

function InitDiscord(connection: Connection){
/**
 * CONFIGURE THE INITIAL VARIABLES
 */
    const config = require("../../config.json");
    const client: Client = new Discord.Client();




/**
 * START BOT
 */
    client.on("message", (message: Message) => {
        let condition: boolean = true;
        

        
        
        /**
         * COMMAND REQUIRED TO CREATE THE SERVER
         */
        if(message.content == "?start"){
            createChannels(message);
            condition = true;
        }
        
        


        /**
         * CHECKS IF THE SERVER WAS CREATED
         */
        if(!condition) return;
        

        
        
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
        if(response == undefined || !condition) return;



        console.log(response);
        setupDatabase(connection, message, response);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default InitDiscord;