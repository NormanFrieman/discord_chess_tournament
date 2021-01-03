import Hello from "../commands/Hello";

function BeforeCommand(message: any): void{
    const prefix = "!";
    
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const command = message.content.slice(prefix.length).toLowerCase();

    if(command == "hello"){
        if(message.channel.name != "geral") return;

        Hello();
    }
};

export default BeforeCommand;