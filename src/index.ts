import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import InitDiscord from "./discord/discord";

createConnection().then((connection: Connection) => {
    InitDiscord(connection);
}).catch(error => console.log(error));