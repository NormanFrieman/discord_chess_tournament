//import { Message } from "discord.js";

import { Command, CommandClass } from "./class/Commands";
import { Category, Categories } from "./class/Categories";
import { ResponseCommand } from "./class/ResponseCommand";

import Hello from "./commands/Hello";
//import deleteChannels from "./commands/deleteChannels";
import configuringUsers from "./commands/configuringUsers";

function setupCommands(): Categories{
    /**
    * COMMANDS AVAILABLE ON THE 'say-hello' CHANNEL
    * 
    * This channel is responsible for initiating the registration of new users
    */
    const hello: Command = {
        name: "hello",
        method: (message: any): ResponseCommand => {
            return Hello(message);
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
        method: (message: any): ResponseCommand => {
            return configuringUsers(message, 2);
        }
    }
    const deleteUser: Command = {
        name: "delete",
        method: (message: any): ResponseCommand => {
            return configuringUsers(message, 3);
        }
    }
    const hostCommands = new CommandClass([loadingUsers, deleteUser]);




    /**
    * COMMANDS AVAILABLE ON THE 'user-commands' CHANNEL
    */
    const addUser: Command = {
        name: "adduser",
        method: (message: any): ResponseCommand => {
            return configuringUsers(message, 1);
        }
    }
    const commandsDm = new CommandClass([addUser, loadingUsers]);




    /**
     * CREATING THE CLASSES FOR EACH CHANNEL THAT WILL BE USED BY THE BOT
     */
    const namesCategories: string[] = [
        "say-hello",
        "host-commands",
        "dm"
    ];
    const methods: CommandClass[] = [
        commandsSayHello,
        hostCommands,
        commandsDm
    ];
    let categoriesList: Category[] = [];

    namesCategories.map((nameCategory: string, num: number) => {
        const newCategory: Category = {
            name: nameCategory,
            method: methods[num]
        };
        
        categoriesList.push(newCategory);
    })
    
    const categories = new Categories(categoriesList);
    
    return categories;
}

export default setupCommands;