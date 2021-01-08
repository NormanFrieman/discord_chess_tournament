import { Categories } from "./Categories";
function BeforeCommand(message: any, categories: Categories): void{
    const prefix = "!";
    
    if(message.author.bot)
        return;
    if(!message.content.startsWith(prefix))
        return;

    categories.defineCategory(message, categories);
};

export default BeforeCommand;