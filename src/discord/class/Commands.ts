import { ErrorCondition } from "./ErrorCondition";

import { ResponseCommand } from "./ResponseCommand";

export interface Command{
    name: string;
    method: Function;
}
export class CommandClass{
    public commands: Command[];
    
    constructor(commands: Command[]){
        this.commands = commands;
    }

    defineCommand(message: any, channel: string): ResponseCommand{
        let condition: boolean = false;
        let response: ResponseCommand;
        const prefix: string = "!";
        const receivedCommand: string[] = message.content.slice(prefix.length).toLowerCase().split(" ");
        
        this.commands.map((command: Command) => {
            if(command.name == receivedCommand[0]){
                response = command.method(channel, message);
                condition = true;
            }
        });
        
        const errorCond = new ErrorCondition(condition);
        errorCond.verify(message, channel);

        return response;
    }
}