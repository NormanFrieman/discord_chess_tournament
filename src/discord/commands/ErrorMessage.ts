import { Message } from "discord.js";

import { NewMessage, Response } from "../class/Messages";

function ErrorMessage(text: string, message: Message): void{    
    const msg: NewMessage = {
        title: "ERROR!",
        description: `${text}`,
        color: "#E93B2F"
    };

    const response = new Response(msg);
    const embed = response.createMessage();

    message.channel.send(embed);

    console.log(`*** ${text} ***`);
};

export default ErrorMessage;