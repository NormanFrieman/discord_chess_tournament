import { ResponseCommand } from "../class/ResponseCommand";

function deleteServer(message: any): ResponseCommand{
    const config = require("../../../config.json");

    

    /**
     * DELETE ALL CHANNELS ON THE SERVER
     */

    const response: ResponseCommand = {
        commandId: 0
    };
    
    return response;
}

export default deleteServer;