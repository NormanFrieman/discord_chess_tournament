export interface User{
    name: string;
    account: string;
}

export class UserCommands{
    user: User;

    constructor(user: User){
        this.user = user;
    }

    addUser(){
        console.log(`${this.user.name} ${this.user.account}`);
    }
}