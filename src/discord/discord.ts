const Discord = require("discord.js");

import BeforeCommand from "./middlewares/BeforeCommand";

import { Categories } from "./class/Categories";
import { ResponseCommand } from "./class/ResponseCommand";

import setupDatabase from "../database/setupDatabase";
import setupCommands from "./setupCommands";

import createChannels from "./commands/createChannels";

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
        let condition: boolean = false;
        let channelsIds: object[];
        
        
        
        
        /**
         * COMMAND REQUIRED TO CREATE THE SERVER
         */
        if(message.content == "?start"){
            channelsIds = createChannels(message);
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
//        const response: ResponseCommand = BeforeCommand(message, categories);




        /**
         * IF NOT UNDEFINED, GO TO DATABASE SCRIPT
         */
//        if(response == undefined || !condition) return;




//        setupDatabase(connection, response);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default InitDiscord;