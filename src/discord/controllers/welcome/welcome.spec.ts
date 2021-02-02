import Welcome from "./";

import { WrongCommand, ServerError } from "../../errors";

describe("Welcome Command", () => {
    test("Should return 400 if wrong command", () => {
        const message: any = {
            data: "any_data"
        };

        const responseStatus = Welcome("any_command", message);

        expect(responseStatus.status).toBe(400);
        expect(responseStatus.body).toEqual(new WrongCommand("any_command"));
    });
    
    test("Should return 500 if no 'message' provided", () => {
        let message;

        const responseStatus = Welcome("welcome", message);

        expect(responseStatus.status).toBe(500);
        expect(responseStatus.body).toEqual(new ServerError());
    });

    test("Should return 200 if correct command and message", () => {
        const message: any = {
            data: "any_data"
        };

        const responseStatus = Welcome("welcome", message);

        expect(responseStatus.status).toBe(200);
        expect(responseStatus.body).toEqual("Correct command");
    })
});