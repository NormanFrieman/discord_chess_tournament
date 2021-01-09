import { ResponseCommand } from "../discord/class/ResponseCommand";

import addUser from "./commands/addUser";
import loadingUsers from "./commands/loadingUsers";

function setDatabase(connection: any, response: ResponseCommand): void{
    /**
     * 0 - STAY QUIET
     * 1 - ADD USER
     * 2 - LOADING USERS
     * 3 - 
     * 4 - 
     */
    if(response.commandId == 0) console.log("STAY QUIET");
    if(response.commandId == 1) addUser(connection, response);
    if(response.commandId == 2) loadingUsers(connection);
}

export default setDatabase;