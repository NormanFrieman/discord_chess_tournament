import { Field } from "./field";

export interface EmbedMessage{
    /**
     * MANDAROTY DATA
     */
    title: string;
    description: string;
    color: string;



    /**
     * OPTIONAL DATA
     */
    url?: string;
    author?: string;
    thumbnail?: string;
    fields?: Field[];
    image?: string;
    footer?: string;
};