import { ResponseCommand } from "../class/ResponseCommand"

function configuringUsers(message: any, num: number): ResponseCommand{
    const prefix = "!";
    const receivedCommand: string[] = message.content.slice(prefix.length).split(" ");
    
    const response: ResponseCommand = {
        commandId: num,
        info: receivedCommand.map((command) => {
            return command;
        })
    }
    console.log(response);
    return response; 
}

export default configuringUsers;