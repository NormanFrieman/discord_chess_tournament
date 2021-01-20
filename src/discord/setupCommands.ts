import { Command, CommandClass } from "./class/Commands";

import { ResponseCommand } from "./class/ResponseCommand";

import Hello from "./commands/Hello";

import configuringUsers from "./commands/configuringUsers";

function setupCommands(): CommandClass{
    /**
    * TEST COMMANDS
    */
    const hello: Command = {
        name: "hello",
        method: (message: any): ResponseCommand => {
            return Hello(message);
        }
    };
    const loadingUsers: Command = {
        name: "load",
        method: (message: any): ResponseCommand => {
            return configuringUsers(message, 2);
        }
    };




    /**
    * COMMANDS RELATING TO THE USER ONLY
    */
    const addUser: Command = {
        name: "add",
        method: (message: any): ResponseCommand => {
            return configuringUsers(message, 1);
        }
    };
    const deleteUser: Command = {
        name: "delete",
        method: (message: any): ResponseCommand => {
            return configuringUsers(message, 3);
        }
    };
    



    const commandsList = new CommandClass([hello, loadingUsers, addUser, deleteUser]);

    return commandsList;
}

export default setupCommands;