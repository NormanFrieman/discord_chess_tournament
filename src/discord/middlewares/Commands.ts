import { ErrorCondition } from "./ErrorCondition";

export interface Command{
    name: string;
    method: Function;
}
export class CommandClass{
    public commands: Command[];
    
    constructor(commands: Command[]){
        this.commands = commands;
    }

    defineCommand(message: any, hook: any){
        let condition: boolean = false;
        const prefix: string = "!";
        const receivedCommand: string = message.content.slice(prefix.length).toLowerCase();
        
        this.commands.map((command: Command) => {
            if(command.name == receivedCommand){
                command.method(hook);
                condition = true;
            }
        });
        
        const errorCond = new ErrorCondition(condition, hook);
        errorCond.verify();
    }
}