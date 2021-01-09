import { ResponseCommand } from "../../discord/class/ResponseCommand";
import { Message, Response } from "../../discord/class/Messages";

import { User } from "../../entity/User";

async function addUser(connection: any, response: ResponseCommand){
    console.log("Inserting a new user into the database...");
    
    const user = new User();

    user.nickname = response.info[1];
    user.rating = response.info[2];
    
    console.log(`\nNickname: ${response.info[1]}\nRating: ${response.info[2]}\n`);

    const msg: Message = {
        title: "New User!",
        field: [{
            title: `${response.info[1]}`,
            text: `Rating: ${response.info[2]}`,
            inline: false
        }],
        color: "#01E901",
        description: "New user successfully registered!"
    }
    
    const msgDiscord = new Response(msg);
    const embed = msgDiscord.createMessage();

    response.hook.send(embed)
        .then(() => console.log("Sent message successfully"))
        .catch((err: Error) => console.error(err));

    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
}

export default addUser;