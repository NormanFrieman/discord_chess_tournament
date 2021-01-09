const { Webhook } = require("discord-webhook-node");
const Discord = require("discord.js");

import BeforeCommand from "./middlewares/BeforeCommand";

import { Command, CommandClass } from "./middlewares/Commands";
import { Category, Categories } from "./middlewares/Categories";

import Hello from "./commands/Hello";
import AddUser from "./commands/AddUser";


function InitDiscord(): void {
/**
 * CONFIGURE THE INITIAL VARIABLES
 */
    const config = require("../../config.json");
    const client = new Discord.Client();




/**
 * COMMANDS AVAILABLE ON THE 'welcome' CHANNEL
 */
    const hello: Command = {
        name: "hello",
        method: (hook: any) => {
            Hello(hook);
        }
    }
    const commandsWelcome = new CommandClass([hello]);




/**
 * COMMANDS AVAILABLE ON THE 'user-commands' CHANNEL
 */
    const addUser: Command = {
        name: "adduser",
        method: (hook: any) => {
            AddUser(hook);
        }
    }
    const commandsUser = new CommandClass([addUser]);



    
/**
 * CREATING THE CLASSES FOR EACH CHANNEL THAT WILL BE USED BY THE BOT
 */
    const welcome: Category = {
        name: "welcome",
        method: commandsWelcome,
        hook: new Webhook(`${config.WEBHOOK_WELCOME}`)
    };
    const userCommands: Category = {
        name: "user-commands",
        method: commandsUser,
        hook: new Webhook(`${config.WEBHOOK_USERCOMMANDS}`)
    };
    const categories = new Categories([welcome, userCommands]);




/**
 * START BOT
 */
    client.on("message", message => {
        BeforeCommand(message, categories);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default InitDiscord;