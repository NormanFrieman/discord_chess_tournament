const { MessageBuilder } = require("discord-webhook-node");

export class Message{
    title: string;
    field: string;
    inline: string;
    flex: boolean;
    color: string;
    description: string;

    constructor(
        title: string,
        field: string, 
        inline: string,
        flex: boolean, 
        color: string, 
        description: string
    ){
        this.title = title;
        this.field = field;
        this.inline = inline;
        this.flex = flex;
        this.color = color;
        this.description = description;
    }

    createMessage(): any {
        const embed = new MessageBuilder()
            .setTitle(`${this.title}`)
            .addField(`${this.field}`, `${this.inline}`, this.flex)
            .setColor(`${this.color}`)
            .setDescription(`${this.description}`);

        return embed;
    }
}

export class LongMessage extends Message{
    secondField: string;
    secondInline: string;
    secondFlex: boolean;

    constructor(
        title: string, 
        field: string, 
        inline: string, 
        flex: boolean, 
        color: string,
        description: string,
        secondField: string,
        secondInline: string, 
        secondFlex: boolean
    ){
        super(title, field, inline, flex, color, description);
        this.secondField = secondField;
        this.secondInline = secondInline;
        this.secondFlex = secondFlex;
    }

    createMessage(): any{
        const embed = new MessageBuilder()
            .setTitle(`${this.title}`)
            .addField(`${this.field}`, `${this.inline}`, this.flex)
            .setColor(`${this.color}`)
            .setDescription(`${this.description}`)
            .addField(`${this.secondField}`, `${this.secondInline}`, this.flex);

        return embed;
    }
}