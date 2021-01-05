import { Categories } from "./Categories";

function BeforeCommand(message: any): void{
    const prefix = "!";
    
    if(message.author.bot)
        return;
    if(!message.content.startsWith(prefix))
        return;

//    const command = message.content.slice(prefix.length).toLowerCase();

    const category = new Categories();
    category.defineCategory(message);
};

export default BeforeCommand;