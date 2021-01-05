import Hello from "../commands/Hello";

interface Command{
    name: string;
    method: Function;
}

export class Geral{
    commands: Command[];

    constructor(){
        const hello: Command = {
            name: "hello",
            method: () => {
                Hello();
            }
        }
        this.commands = [hello];
    }

    defineCommand(message: any){
        const prefix: string = "!";
        const receivedCommand: string = message.content.slice(prefix.length).toLowerCase();
        
        const verify: any = this.commands.map((command: Command) => {
            if(command.name == receivedCommand){
                command.method();
                return true;
            }
        });

        verify[0] != undefined ? console.log("Correct command in this channel") : console.error("Wrong command in this channel");
    }
}