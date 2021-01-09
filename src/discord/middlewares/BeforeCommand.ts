import { Categories } from "../class/Categories";
import { ResponseCommand } from "../class/ResponseCommand";

function BeforeCommand(message: any, categories: Categories): ResponseCommand{
    const prefix = "!";
    
    if(message.author.bot)
        return;
    if(!message.content.startsWith(prefix))
        return;

    return categories.defineCategory(message, categories);
};

export default BeforeCommand;