import { WrongCommand } from "../errors";

import { wrongCommand } from "../helper/response-helper";

export class Command{
    name: string;

    constructor(name: string){
        this.name = name;
    };

    handle(command: string){
        if(this.name !== command)
            return wrongCommand(new WrongCommand(command));
    };
};