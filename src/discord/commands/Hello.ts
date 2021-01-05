const { Webhook } = require("discord-webhook-node");
import { Message, Response } from "../../Classes/Messages";

function Hello(): void{
    const config = require("../../../config.json");
    const hook = new Webhook(`${config.WEBHOOK}`);

/*
    const message1: Message = {
        title: "Hello World",
        field: [{
            title: "First field",
            text: "text number 1",
            inline: true,
        },{
            title: "Second field",
            text: "text number 2",
            inline: false,
        },{
            title: "Third field",
            text: "text number 3",
            inline: false,
        }]
    }
    const message2: Message = {
        title: "Hello World",
        field: [{
            title: "First field",
            text: "text number 1",
            inline: true,
        },{
            title: "Second field",
            text: "text number 2",
            inline: false,
        }],
        color: "#00b0f4",
        description: "Oh look a description :weary:"
    }

    const response1 = new Response(message1);
    const response2 = new Response(message2);

    const embed1 = response1.createMessage();
    const embed2 = response2.createMessage();

    hook.send(embed1)
        .then(() => console.log("Sent message successfully"))
        .catch((err: any) => console.error(err.message));
    hook.send(embed2)
        .then(() => console.log("Sent message successfully"))
        .catch((err: any) => console.error(err.message));*/
    
    const message: Message = {
        title: "HELLO!",
        description: "Welcome to the Chess Tournament.",
        color: "#00b0f4"
    }

    const response = new Response(message);
    const embed = response.createMessage();

    hook.send(embed)
        .then(() => console.log("Sent message successfully"))
        .catch((err: Error) => console.error(err));
};

export default Hello;