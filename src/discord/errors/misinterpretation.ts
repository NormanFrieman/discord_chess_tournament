export class Misinterpretation extends Error{
    constructor(error: string){
        super(`Error when interpreting the command. Status: ${error}`);
        this.name = "Misinterpretation:";
    };
};