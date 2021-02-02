import { Message } from "discord.js";

import { WrongCommand } from "../errors";

import { wrongCommand } from "../helper/response-helper";

import { StatusCommand } from "../protocols";

export class CommandRoute{
    handle(commands: Function[], commandDiscord: string, message: Message): StatusCommand{
        for(const command of commands){
            const response = command(commandDiscord, message);
            
            if(response.status === 200)
                return response;
        };

        return wrongCommand(new WrongCommand(commandDiscord));
    };
};