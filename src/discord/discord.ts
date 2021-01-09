const { Webhook } = require("discord-webhook-node");
const Discord = require("discord.js");

import BeforeCommand from "./middlewares/BeforeCommand";

import { Command, CommandClass } from "./class/Commands";
import { Category, Categories } from "./class/Categories";
import { ResponseCommand } from "./class/ResponseCommand";

import Hello from "./commands/Hello";
import configuringUsers from "./commands/configuringUsers";

import setupDatabase from "../database/setupDatabase";

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
    const loadingUsers: Command = {
        name: "load",
        method: (hook: any, message: any): ResponseCommand => {
            return configuringUsers(hook, message, 2);
        }
    }
    const deleteUser: Command = {
        name: "delete",
        method: (hook: any, message: any): ResponseCommand => {
            return configuringUsers(hook, message, 3);
        }
    }
    const commandsUser = new CommandClass([loadingUsers, deleteUser]);




/**
 * COMMANDS AVAILABLE ON THE 'user-commands' CHANNEL
 */
    const addUser: Command = {
        name: "adduser",
        method: (hook: any, message: any): ResponseCommand => {
            return configuringUsers(hook, message, 1);
        }
    }
    const commandsDm = new CommandClass([addUser, loadingUsers]);




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
    const dm: Category = {
        name: "dm",
        method: commandsDm,
        hook: new Webhook(`${config.WEBHOOK_USERCOMMANDS}`)
    };
    const categories = new Categories([welcome, userCommands, dm]);




/**
 * START BOT
 */
    let response: ResponseCommand;
    client.on("message", message => {
        response = BeforeCommand(message, categories);
        
        /**
         * IF NOT UNDEFINED, GO TO THE DATABASE SCRIPT
         */
        if(response == undefined) return;
        setupDatabase(connection, response);
    });

    console.log("Norman's Bot activated...");
    client.login(config.BOT_TOKEN);
}

export default InitDiscord;