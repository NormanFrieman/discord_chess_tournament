import { Message } from "discord.js";

import { Command } from "../../class/Command";

import { StatusCommand } from "../../protocols";

import { ServerError } from "../../errors";

import { serverError } from "../../helper/response-helper";

function Welcome(command: string, message: Message): StatusCommand{
    const welcome = new Command("welcome");
    const response = welcome.verify(command);
    
    if(response.status === 400)
        return response;
    
    if(!message)
        return serverError(new ServerError());

    return response;
};

export default Welcome;
