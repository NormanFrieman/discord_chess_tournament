import ErrorMessage from "../commands/ErrorMessage";

interface ErrorProps{
    msgSucess: string;
    msgError: string;
    condition: boolean;
}

export class ErrorCondition{
    public errorPackage: ErrorProps;

    constructor(num: boolean){
        const er: ErrorProps = {
            msgSucess: "Correct command in this channel",
            msgError: "Wrong command in this channel :face_with_symbols_over_mouth:",
            condition: num
        }
        
        this.errorPackage = er;
    }

    verify(message: any){
        this.errorPackage.condition ? console.log(this.errorPackage.msgSucess) : ErrorMessage(this.errorPackage.msgError, message);
    }
}