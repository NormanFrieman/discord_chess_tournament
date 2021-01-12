const { Webhook } = require("discord-webhook-node");
const Discord = require("discord.js");

import { Command, CommandClass } from "./class/Commands";
import { Category, Categories } from "./class/Categories";
import { ResponseCommand } from "./class/ResponseCommand";

import Hello from "./commands/Hello";
import createChannels from "./commands/createChannels";
import configuringUsers from "./commands/configuringUsers";

function setupCommands(): Categories{
    /**
     * CONFIGURE THE INITIAL VARIABLES
     */
    const config = require("../../config.json");




    /**
    * COMMANDS AVAILABLE ON THE 'say-hello' CHANNEL
    * 
    * This channel is responsible for initiating the registration of new users
    */
    const hello: Command = {
        name: "hello",
        method: (hook: any): ResponseCommand => {
            return Hello(hook);
        }
    }
    const commandsSayHello = new CommandClass([hello]);




    /**
    * COMMANDS AVAILABLE ON THE 'host-commands' CHANNEL
    * 
    * The only person allowed to see and give commands on that channel is the Host
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
    const hostCommands = new CommandClass([loadingUsers, deleteUser]);




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
    * COMMANDS AVAILABLE ON THE 'user-commands' CHANNEL
    */
    const startServer: Command = {
        name: "startserver",
        method: (hook: any, message: any): ResponseCommand => {
            return createChannels(hook, message);
        }
    }
    const commandsGeral = new CommandClass([startServer]);




    /**
     * CREATING THE CLASSES FOR EACH CHANNEL THAT WILL BE USED BY THE BOT
     */
    const sayHello: Category = {
        name: "say-hello",
        method: commandsSayHello,
        hook: new Webhook(`${config.webhook.WEBHOOK_SAY_HELLO}`)
    };
    const userCommands: Category = {
        name: "host-commands",
        method: hostCommands,
        hook: new Webhook(`${config.webhook.WEBHOOK_HOSTCOMMANDS}`)
    };
    const dm: Category = {
        name: "dm",
        method: commandsDm,
        hook: new Webhook(`${config.webhook.WEBHOOK_HOSTCOMMANDS}`)
    };
    const geral: Category = {
        name: "geral",
        method: commandsGeral,
        hook: new Webhook(`${config.webhook.WEBHOOK_HOSTCOMMANDS}`)
    };
    const categories = new Categories([sayHello, userCommands, dm, geral]);

    return categories;
}

export default setupCommands;