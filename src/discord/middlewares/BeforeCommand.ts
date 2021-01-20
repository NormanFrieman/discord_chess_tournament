import { Message } from "discord.js";

import { CommandClass } from "../class/Commands";

import { ResponseCommand } from "../class/ResponseCommand";

function BeforeCommand(message: Message, commands: CommandClass): ResponseCommand{
    const prefix = "!";
    
    if(message.author.bot)
        return;
    if(!message.content.startsWith(prefix))
        return;

    return commands.defineCommand(message);
};

export default BeforeCommand;