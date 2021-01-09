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
    if(response.commandId == 0) console.log("STAY QUIET");
    if(response.commandId == 1) addUser(connection, response);
    if(response.commandId == 2) loadingUsers(connection, response);
    if(response.commandId == 3) deleteUser(connection, response);
}

export default setupDatabase;