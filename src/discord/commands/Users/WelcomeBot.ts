import { User } from "discord.js";

import { NewMessage, Response } from "../../class/Messages";

interface Msg{
    title: string,
    description: string
};

function Welcome(author: User): void{
    const msgs: Msg[] = [
        {
            title: "Welcome to the Chess Tournament Bot",
            description: "I am the bot that controls everything and everyone ... on this server"
        },
        {
            title: "Getting Started",
            description: "To register, you must have an account on the `chess.com` platform",
        },
        {
            title: "Initial commands",
            description: "First, use the command `!add <YOUR_USERNAME_ON_chess.com>`"
        }
    ];

    msgs.map((msg: Msg) => {
        const text: NewMessage = {
            title: msg.title,
            color: "#4886EC",
            description: msg.description
        }
        const msgDiscord = new Response(text);
        const embed = msgDiscord.createMessage();

        author.send(embed)
            .then(() => console.log("Sent message successfully"))
            .catch((err: Error) => console.error(err));
    });      
}

export default Welcome;