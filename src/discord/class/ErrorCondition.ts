import ErrorMessage from "../commands/ErrorMessage";

interface ErrorProps{
    msgSucess: string;
    msgError: string;
    condition: boolean;
    hook: any;
}

export class ErrorCondition{
    public errorPackage: ErrorProps;

    constructor(num: boolean, hook: any){
        const er: ErrorProps = {
            msgSucess: "Correct command in this channel",
            msgError: "Wrong command in this channel :face_with_symbols_over_mouth:",
            condition: num,
            hook: hook
        }
        
        this.errorPackage = er;
    }

    verify(){
        this.errorPackage.condition ? console.log(this.errorPackage.msgSucess) : ErrorMessage(this.errorPackage.msgError, this.errorPackage.hook);
    }
}