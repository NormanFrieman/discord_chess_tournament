import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import ServerInit from "./discord/server";

createConnection().then((connection: Connection) => {
    ServerInit(connection);
}).catch(error => console.log(error));