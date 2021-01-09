import { ResponseCommand } from "../class/ResponseCommand"
import { Message, Response } from "../class/Messages";

function AddUser(hook: any, message: any): ResponseCommand{
    const prefix: string = "!";
    const receivedCommand: string = message.content.slice(prefix.length).split(" ");

    console.log(`\nNickname: ${receivedCommand[1]}\nRating: ${receivedCommand[2]}\n`);

    const response: ResponseCommand = {
        commandId: 1,
        nickname: receivedCommand[1],
        rating: Number(receivedCommand[2])
    }

    const msg: Message = {
        title: "New User!",
        field: [{
            title: `${receivedCommand[1]}`,
            text: `Rating: ${receivedCommand[2]}`,
            inline: false
        }],
        color: "#01E901",
        description: "New user successfully registered!"
    }
    
    const msgDiscord = new Response(msg);
    const embed = msgDiscord.createMessage();

    hook.send(embed)
        .then(() => console.log("Sent message successfully"))
        .catch((err: Error) => console.error(err));

    return response; 
}

export default AddUser;