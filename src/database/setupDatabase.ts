import { ResponseCommand } from "../discord/class/ResponseCommand";

import addUser from "./commands/addUser";
import loadingUsers from "./commands/loadingUsers";
import deleteUser from "./commands/deleteUser";

function setupDatabase(connection: any, response: ResponseCommand): void{
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
        (connection: any, response: ResponseCommand): void => {
            addUser(connection, response);
        },
        (connection: any, response: ResponseCommand): void => {
            loadingUsers(connection, response);
        },
        (connection: any, response: ResponseCommand): void => {
            deleteUser(connection, response);
        }
    ]

    commands[response.commandId](connection, response);
}

export default setupDatabase;