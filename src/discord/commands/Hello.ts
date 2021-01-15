import { Message } from "discord.js";

import { NewMessage, Response } from "../class/Messages";
import { ResponseCommand } from "../class/ResponseCommand"

function Hello(message: Message): ResponseCommand{    
    const msg: NewMessage = {
        title: "HELLO!",
        description: "Welcome to the Chess Tournament.",
        color: "#00b0f4"
    }

    const res: ResponseCommand = {
        commandId: 0
    }

    if(message == undefined){
        console.error("ERROR: message is undefined");
        return res;
    }

    const response = new Response(msg);
    const embed = response.createMessage();

    message.channel.send(embed)
        .then(() => console.log("Message sent successfully"))
        .catch(console.error);

    return res;
};

export default Hello;