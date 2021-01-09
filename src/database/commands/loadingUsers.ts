import { User } from "../../entity/User";

async function loadingUsers(connection: any){
    console.log("Loading users from the database...");
    
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);
}

export default loadingUsers;