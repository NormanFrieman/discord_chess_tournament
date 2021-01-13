import "reflect-metadata";
import { createConnection } from "typeorm";
import InitDiscord from "./discord/discord";

createConnection().then(async connection => {
    InitDiscord(connection);
}).catch(error => console.log(error));