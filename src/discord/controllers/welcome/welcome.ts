import { Message } from "discord.js";

import { Command } from "../../class/Command";

import { StatusCommand } from "../../protocols";

import { ServerError } from "../../errors";

import { serverError } from "../../helper/response-helper";

export class Welcome extends Command{
    constructor(){
        super("Welcome");
        this.name = "welcome";
    };

    method(message: Message): StatusCommand{
        if(!message)
            return serverError(new ServerError());
    };
};