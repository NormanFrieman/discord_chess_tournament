const { Webhook } = require("discord-webhook-node");
const Discord = require("discord.js");

import BeforeCommand from "./middlewares/BeforeCommand";

import { Command, CommandClass } from "./class/Commands";
import { Category, Categories } from "./class/Categories";
import { ResponseCommand } from "./class/ResponseCommand";

import Hello from "./commands/Hello";
import AddUser from "./commands/AddUser";
import LoadingUsers from "./commands/LoadingUsers";

import setDatabase from "../database/index";

function InitDiscord(connection: any): void{
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
        method: (hook: any): ResponseCommand => {
            return Hello(hook);
        }
    }
    const commandsWelcome = new CommandClass([hello]);




/**
 * COMMANDS AVAILABLE ON THE 'user-commands' CHANNEL
 */
    const addUser: Command = {
        name: "adduser",
        method: (hook: any, message: any): ResponseCommand => {
            return AddUser(hook, message);
        }
    }
    const loadingUsers: Command = {
        name: "loadusers",
        method: (hook: any): ResponseCommand => {
            return LoadingUsers(hook);
        }
    }
    const commandsUser = new CommandClass([addUser, loadingUsers]);



    
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
    let response: ResponseCommand;
    client.on("message", message => {
        response = BeforeCommand(message, categories);
        
        if(response == undefined) return;
        setDatabase(connection, response);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default InitDiscord;