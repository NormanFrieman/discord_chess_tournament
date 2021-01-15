import { ResponseCommand } from "../class/ResponseCommand"

function configuringUsers(channelName: string, message: any, num: number): ResponseCommand{
    const prefix = "!";
    const receivedCommand: string[] = message.content.slice(prefix.length).split(" ");
    
    const response: ResponseCommand = {
        commandId: num,
        channel: channelName,
        info: receivedCommand.map((command) => {
            return command;
        })
    }
    console.log(response);
    return response; 
}

export default configuringUsers;