import { Welcome } from "./welcome";

import { WrongCommand, ServerError } from "../../errors";

describe("Welcome Command", () => {
    test("Should return 400 if wrong command", () => {
        const sut = new Welcome();

        const responseStatus = sut.handle("any_command");

        expect(responseStatus.status).toBe(400);
        expect(responseStatus.body).toEqual(new WrongCommand("any_command"));
    });
    
    test("Should return 500 if no 'message' provided", () => {
        const sut = new Welcome();
        let message;

        const responseStatus = sut.method(message);

        expect(responseStatus.status).toBe(500);
        expect(responseStatus.body).toEqual(new ServerError());
    });
});