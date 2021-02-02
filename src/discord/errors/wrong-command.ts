export class WrongCommand extends Error{
    constructor(command: string){
        super(`Invalid command: ${command}`);
        this.name = `Wrong command`;
    };
};