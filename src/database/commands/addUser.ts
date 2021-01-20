import { ResponseCommand } from "../../discord/class/ResponseCommand";
import { NewMessage, Response } from "../../discord/class/Messages";

import getRating from "../../chessAPI/getRating";

import { User } from "../../entity/User";

import ErrorMessage from "../../discord/commands/ErrorMessage";

async function addUser(connection: any, message: any, response: ResponseCommand): Promise<void>{
    console.log("Inserting a new user into the database...");
    
    if(response.info == undefined) return;

    let user = new User();

    const rating: number = await getRating(response.info[1]);
    
    if(rating == undefined){
        ErrorMessage("Something went wrong while getting your information from the `chess.com` platform" ,message);

        return;
    }
    
    const userDisc = message.client.users.cache.find(ch => ch.bot == false);
    
    user.id = userDisc.id;
    user.nickname = userDisc.username;
    user.userChess = response.info[1];
    user.rating = rating;

    const msg: NewMessage = {
        title: `${response.info[1]} Profile`,
        field: [{
            title: `${userDisc.username}`,
            text: `Rating: ${rating}`,
            inline: false
        }],
        url: `https://www.chess.com/member/${response.info[1]}`,
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