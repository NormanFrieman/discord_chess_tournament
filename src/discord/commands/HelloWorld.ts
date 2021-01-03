const { Webhook, MessageBuilder } = require("discord-webhook-node");

function HelloWorld(message: any): void{
    const config = require("../../../config.json");
    const hook = new Webhook(`${config.WEBHOOK}`);

    const prefix = "!";

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const command = message.content.slice(prefix.length).toLowerCase();

    if(command == "hello"){
        const embed = new MessageBuilder()
            .setTitle('Hello World!')
            .addField('First field', 'this is inline', true)
            .addField('Second field', 'this is not inline')
            .setColor('#00b0f4')
            .setDescription('Oh look a description :weary:');
        
        hook.send(embed);
//        message.reply(`Hello World! This message had a latency of ${timeTaken}ms...`);
    }
};

export default HelloWorld;