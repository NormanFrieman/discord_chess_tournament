function HelloWorld(message: any): void{
    const prefix = "!";

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const command = message.content.slice(prefix.length).toLowerCase();

    if(command == "hello"){
        const timeTaken = Date.now() - message.createdTimestamp;

        message.reply(`Hello World! This message had a latency of ${timeTaken}ms...`);
    }
};

export default HelloWorld;