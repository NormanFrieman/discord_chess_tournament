import { ResponseCommand } from "../class/ResponseCommand"

function LoadingUsers(hook: any): ResponseCommand{
    console.log("Loading User");

    const response: ResponseCommand = {
        commandId: 2
    }

    return response; 
}

export default LoadingUsers;