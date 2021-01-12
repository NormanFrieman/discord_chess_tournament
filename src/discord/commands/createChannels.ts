import { ResponseCommand } from "../class/ResponseCommand";

function createServers(hook: any, message: any): ResponseCommand{
    const config = require("../../../config.json");

    

    /**
     * CREATES CHANNELS ON THE SERVER
     */
    const setups: string[] = [
        `${config.createChannels.INIT}`,
        `${config.createChannels.CONFIGURE_YOUR_ACCOUNT}`,
        `${config.createChannels.TOURNAMENT}`,
        `${config.createChannels.ENDGAME}`,
        `${config.createChannels.DEVELOPER}`
    ];
    const names: any[] = [
        ["welcome TEST", "como usar os comandos TEST", "links TEST"],
        ["say hello TEST", "host commands TEST"],
        ["start tournament TEST"],
        ["win TEST", "print results TEST"],
        ["error404 TEST"]
    ];

    let channelsIds: object[] = [];

    setups.map((setup: string, ind: number) => {
        names[ind].map((name: string) => {
            message.guild.channels
                .create(name, {
                    type: "text",
                    parent: setup
                })
                .then((channel: any) => {
                    console.log(`channel ${name} created!`);
                    console.log(`channel id: ${channel}`);
                    channelsIds.push({
                        name: `${name}`,
                        id: `${channel}`
                    });
                })
                .catch(console.error);
        })
    })
/*
    message.guild.channels
        .create("new-channel", {reason: "test"})
        .then(console.log)
        .catch(console.error);
        console.log("create channels");*/

    const response: ResponseCommand = {
        commandId: 0,
        info: channelsIds
    };
    
    return response;
}

export default createServers;