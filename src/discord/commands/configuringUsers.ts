import { ResponseCommand } from "../class/ResponseCommand"

function configuringUsers(hook: any, message: any, num: number): ResponseCommand{
    const prefix = "!";
    const receivedCommand: string[] = message.content.slice(prefix.length).split(" ");

    const response: ResponseCommand = {
        commandId: num,
        hook: hook,
        info: receivedCommand.map((command) => {
            return command;
        })
    }

    return response; 
}

export default configuringUsers;