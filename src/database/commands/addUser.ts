import { ResponseCommand } from "../../discord/class/ResponseCommand";

import { User } from "../../entity/User";

async function addUser(connection: any, response: ResponseCommand){
    const user = new User();

    user.nickname = response.nickname;
    user.rating = response.rating;
    
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
}

export default addUser;