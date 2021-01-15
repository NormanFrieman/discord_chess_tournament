import { ResponseCommand } from "../../discord/class/ResponseCommand";
import { NewMessage, Response } from "../../discord/class/Messages";

import { User } from "../../entity/User";

async function addUser(connection: any, message: any, response: ResponseCommand){
    console.log("Inserting a new user into the database...");
    
    if(response.info == undefined) return;

    let user = new User();

    const userDisc = message.client.users.cache.find(ch => ch.bot == false);
    user.id = userDisc.id;
    user.nickname = userDisc.username;
    user.rating = response.info[1];

    console.log(user);

    const msg: NewMessage = {
        title: "New User!",
        field: [{
            title: `${userDisc.name}`,
            text: `Rating: ${response.info[1]}`,
            inline: false
        }],
        color: "#01E901",
        description: "New user successfully registered!"
    };
    const msgDiscord = new Response(msg);
    const embed = msgDiscord.createMessage();
        
    console.log(`\nNickname: ${userDisc.name}\nRating: ${response.info[1]}\n`);
        
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    message.channel.send(embed)
        .then(() => console.log("Sent message successfully"))
        .catch((err: Error) => console.error(err));
}

export default addUser;