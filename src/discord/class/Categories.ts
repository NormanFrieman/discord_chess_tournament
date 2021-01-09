const { Webhook } = require("discord-webhook-node");

import { ResponseCommand} from "./ResponseCommand";

import { CommandClass } from "./Commands";
import ErrorMessage from "../commands/ErrorMessage";

export interface Category{
    name: string;
    method: CommandClass;
    hook: any;
}
export class Categories{
    public categories: Category[];

    constructor(categories: Category[]){
        this.categories = categories;
    }

    defineCategory(message: any, categories: Categories): ResponseCommand{
        let condition: boolean = false;
        let response: ResponseCommand;
        let nameChannel: string;
        message.channel.name != undefined ? nameChannel = message.channel.name : nameChannel = message.channel.type;

        categories.categories.map((category: Category) => {
            if(category.name == nameChannel){
                response = category.method.defineCommand(message, category.hook);
                condition = true;
            }
        });

        const config = require("../../../config.json");
        const hook = new Webhook(`${config.WEBHOOK_ERROR}`);
        
        condition ? console.log("Correct channel") : ErrorMessage(`Username: ${message.author.username}\nCommand: ${message.content}\nChannel: ${nameChannel}\nChannel invalidated :face_with_symbols_over_mouth:`, hook);
        
        return response;
    }
}