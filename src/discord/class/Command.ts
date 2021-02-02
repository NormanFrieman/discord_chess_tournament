import { WrongCommand } from "../errors";

import { correctCommand, wrongCommand } from "../helper/response-helper";

import { StatusCommand } from "../protocols";

export class Command{
    name: string;

    constructor(name: string){
        this.name = name;
    };

    verify(command: string): StatusCommand{
        if(this.name !== command)
            return wrongCommand(new WrongCommand(command));
        
        return correctCommand();
    };
};