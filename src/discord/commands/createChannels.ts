function createServer(message: any): void{
    /**
     * CREATES SERVER CATEGORIES AND CHANNELS
     */
    const namesChannels: any[] = [
        ["welcome", "como-usar-os-comandos", "links"],
        ["say-hello", "host-commands"],
        ["start-tournament"],
        ["win", "print-results"],
        ["error404", "dont-touch"]
    ];
    const namesCategories: string[] = [
        "INÍCIO",
        "CONFIGURE SUA CONTA",
        "TORNEIO",
        "FIM DE JOGO",
        "DEVELOPER"
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
}

export default createServer;