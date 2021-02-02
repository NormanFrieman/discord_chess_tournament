function Interpret(fullCommand: string): string[]{
    return fullCommand.slice(1).toLowerCase().split(" ");;
};

export default Interpret;