import { Message } from "discord.js";

import { Misinterpretation } from "../errors";

import { misinterpretation } from "../helper/response-helper";

import { StatusCommand } from "../protocols";

function Verify(message: Message): StatusCommand{
    const prefix = "!";

    if(message.author.bot)
        return misinterpretation(new Misinterpretation("the author of the message is a bot"));
    
    if(!message.content.startsWith(prefix))
        return misinterpretation(new Misinterpretation("wrong prefix"));
};

export default Verify;