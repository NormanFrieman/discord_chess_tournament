import { Message } from "discord.js";

import { ResponseCommand } from "../discord/class/ResponseCommand";

import addUser from "./commands/addUser";
import loadingUsers from "./commands/loadingUsers";
import deleteUser from "./commands/deleteUser";

function setupDatabase(connection: any, message: Message, response: ResponseCommand): void{
    /**
     * 0 - STAY QUIET
     * 1 - ADD USER
     * 2 - LOADING USERS
     * 3 - DELETE USER
     * 4 - 
     */
    const commands: Function[] = [
        (): void => {
            console.log("STAY QUIET");
        },
        (connection: any, message: Message, response: ResponseCommand): void => {
            addUser(connection, message, response);
        },
        (connection: any, message: Message, response: ResponseCommand): void => {
            loadingUsers(connection, message, response);
        },
        (connection: any, message: Message, response: ResponseCommand): void => {
            deleteUser(connection, message, response);
        }
    ]

    commands[response.commandId](connection, message, response);
}

export default setupDatabase;