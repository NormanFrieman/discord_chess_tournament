import { Message } from "discord.js";

import { ResponseCommand } from "../../discord/class/ResponseCommand";
import { NewMessage, Response } from "../../discord/class/Messages";

import { User } from "../../entity/User";

async function loadingUsers(connection: any, message: Message, response: ResponseCommand){
    console.log("Loading users from the database...");
    
    const users = await connection.manager.find(User);
    
    const list: NewMessage = {
        title: "User list",
        field: users.map((user: any) => {
            return {
                title: `${user.nickname}`,
                text: `Rating: ${user.rating}\nID: ${user.id}`,
                inline: false 
            }
        }),
        color: "#4886EC",
        description: "List of users registered in the system"
    }
    
    const listDiscord = new Response(list);
    const embed = listDiscord.createMessage();

    message.channel.send(embed)
        .then(() => console.log("Sent message successfully"))
        .catch((err: Error) => console.error(err));
}

export default loadingUsers;