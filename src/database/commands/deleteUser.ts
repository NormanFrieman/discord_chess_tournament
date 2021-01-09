import { ResponseCommand } from "../../discord/class/ResponseCommand";
import { Message, Response } from "../../discord/class/Messages";

import { User } from "../../entity/User";

async function deleteUser(connection: any, response: ResponseCommand){
    console.log("Deleting user from the database...");
    
    const repository = connection.getRepository(User);
    const user = await repository.findOne({
        nickname: response.info[1]
    });
    
    if(user == undefined) return;

    await repository.remove(user);
    
    const msgDelete: Message = {
        title: "User deleted",
        field: [{
            title: `${user.nickname}`,
            text: `Rating: ${user.rating}\nID: ${user.id}`,
            inline: false 
        }],
        color: "#E93B2F",
        description: "User removed from the database."
    }
    
    const deleteDiscord = new Response(msgDelete);
    const embed = deleteDiscord.createMessage();

    response.hook.send(embed)
        .then(() => console.log("Sent message successfully"))
        .catch((err: Error) => console.error(err));
}

export default deleteUser;