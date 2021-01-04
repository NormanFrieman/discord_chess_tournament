const { Webhook } = require("discord-webhook-node");
import { Message, LongMessage } from "../../Classes/Messages";

function Hello(): void{
    const config = require("../../../config.json");
    const hook = new Webhook(`${config.WEBHOOK}`);

    const newMessage = new Message(
        "Hello World",
        "First field",
        "this is inline",
        true,
        "#00b0f4",
        "Oh look a description :weary:"
    );

    const newLongMessage = new LongMessage(
        "Hello World",
        "First field",
        "this is inline",
        false,
        "#00b0f4",
        "Oh look a description :weary:",
        "Second field",
        "this is inline",
        true
    );

    const embed = newMessage.createMessage();
    const embed2 = newLongMessage.createMessage();

    hook.send(embed);
    hook.send(embed2);
};

export default Hello;