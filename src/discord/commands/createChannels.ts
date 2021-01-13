function createServer(message: any): object[]{
    /**
     * CREATES SERVER CATEGORIES AND CHANNELS
     */
    const namesChannels: any[] = [
        ["welcome TEST", "como usar os comandos TEST", "links TEST"],
        ["say hello TEST", "host commands TEST"],
        ["start tournament TEST"],
        ["win TEST", "print results TEST"],
        ["error404 TEST"]
    ];
    const namesCategories: string[] = [
        "INÍCIO",
        "CONFIGURE SUA CONTA",
        "TORNEIO",
        "FIM DE JOGO"
    ];
    let channelsIds: object[] = [];

    namesCategories.map((nameCategory: string, ind: number) => {
        message.guild.channels
            .create(`${nameCategory}`, {
                type: "category"
            })
            .then((category: any) => {
                console.log(`category ${nameCategory} created!`);
                console.log(`category id: ${category}`);

                namesChannels[ind].map((nameChannel: string) => {
                    message.guild.channels
                        .create(nameChannel, {
                            type: "text",
                            parent: category
                        })
                        .then((channel: any) => {
                            console.log(`channel ${nameChannel} created!`);
                            console.log(`channel id: ${channel}`);
                            
                            channelsIds.push({
                                name: `${nameChannel}`,
                                id: `${channel}`
                            });
                        })
                        .catch(console.error);
                        })
            })
            .catch(console.error);
    });    
    
    return channelsIds;
}

export default createServer;