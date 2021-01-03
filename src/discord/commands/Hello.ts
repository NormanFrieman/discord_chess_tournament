const { Webhook, MessageBuilder } = require("discord-webhook-node");

function DefineCommand(): void{
    const config = require("../../../config.json");
    const hook = new Webhook(`${config.WEBHOOK}`);

    const embed = new MessageBuilder()
        .setTitle('Hello World!')
        .addField('First field', 'this is inline', true)
        .addField('Second field', 'this is not inline')
        .setColor('#00b0f4')
        .setDescription('Oh look a description :weary:')

    hook.send(embed);
};

export default DefineCommand;