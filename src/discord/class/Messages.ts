const Discord = require("discord.js");

export interface NewMessage{
    title?: string;
    field?: {
        title: string;
        text: string;
        inline: boolean;
    }[];
    color?: string;
    description?: string;
}

export class Response{
    public message: NewMessage;

    constructor(message: NewMessage){
        this.message = message;
    }

    createMessage(): any{
        let embed = new Discord.MessageEmbed();

        this.message.title ? embed.setTitle(`${this.message.title}`) : null;
        this.message.color ? embed.setColor(`${this.message.color}`) : null;
        this.message.description ? embed.setDescription(`${this.message.description}`) : null;
        
        this.message.field ? this.message.field.map(test => embed.addField(`${test.title}`, `${test.text}`, test.inline)) : null;
        
        return embed;
    }
}