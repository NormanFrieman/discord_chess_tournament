import { Message, Response } from "../../class/Messages";

function ErrorMessage(text: string, hook: any): void{    
    const message: Message = {
        title: "ERROR!",
        description: `${text}`,
        color: "#E93B2F"
    }

    const response = new Response(message);
    const embed = response.createMessage();

    console.log(`*** ${text} ***`);

    hook.send(embed)
        .then(() => console.log("Sent message successfully"))
        .catch((err: Error) => console.error(err));
};

export default ErrorMessage;