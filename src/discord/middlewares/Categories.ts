import { Geral } from "./Commands";

interface Category{
    name: string;
    method: Geral;
}

export class Categories{
    categories: Category[];

    constructor(){
        const defineCommand = new Geral;
        const geral: Category = {
            name: "geral",
            method: defineCommand
        }
        this.categories = [geral];
    }

    defineCategory(message: any){
        const verify: any = this.categories.map((category: Category) => {
            if(category.name == message.channel.name){
                category.method.defineCommand(message);
                return true;
            }
        });

        verify[0] != undefined ? console.log("Correct channel") : console.error("Wrong channel");
    }
}