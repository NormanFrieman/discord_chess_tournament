import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import StartServer from "./discord";

createConnection()
    .then((connection: Connection) => {
        StartServer(connection);
    })
    .catch(error => console.log(error));