import { Message } from "discord.js";



import { CommandRoute } from "./router";

import Interpret from "./interpret";

import Verify from "./verify";



import { StatusCommand } from "../protocols";

import { WrongCommand, ServerError, Misinterpretation } from "../errors";

import { Command } from "../class/Command";

import { serverError } from "../helper/response-helper";

const anyCommand = (command: string, message: Message): StatusCommand => {
    const anyCommand = new Command("any_command");
    const response = anyCommand.verify(command);
    
    if(response.status === 400)
        return response;
    
    if(!message)
        return serverError(new ServerError());

    return response;
};

const commandsList = (): Function[] => ([ anyCommand ]);

describe("CommandRoute, Interpret and Verify test", () => {
    test("[CommandRoute] Should return 400 if wrong command", () => {
        const route = new CommandRoute();
        const commands = commandsList();

        const message: any = {
            data: "any_data"
        };

        const response = route.handle(commands, "wrong_command", message);

        expect(response.status).toBe(400);
        expect(response.body).toEqual(new WrongCommand("wrong_command"));
    });

    test("[CommandRoute] Should return 200 if correct command", () => {
        const route = new CommandRoute();
        const commands = commandsList();

        const message: any = {
            data: "any_data"
        };

        const response = route.handle(commands, "any_command", message);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual("Correct command");
    });

    test("[Interpret] Should return correct array", () => {
        const command = "!command any1 any2 any3";

        const response = Interpret(command);

        expect(response).toEqual(["command", "any1", "any2", "any3"]);
    });

    test("[Verify] Should return 400 if author bot", () => {
        const message: any = {
            author: {
                bot: true
            }
        };

        const response = Verify(message);

        expect(response.status).toBe(400);
        expect(response.body).toEqual(new Misinterpretation("the author of the message is a bot"));
    });

    test("[Verify] Should return 400 if wrong prefix", () => {
        const message: any = {
            author: {
                bot: false
            },
            content: "?command"
        };

        const response = Verify(message);

        expect(response.status).toBe(400);
        expect(response.body).toEqual(new Misinterpretation("wrong prefix"));
    });
});