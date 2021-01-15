export interface ResponseCommand{
    commandId: number;



    /**
     * Props Hook
     */
    channel?: string;



    /**
     * Props Generic Commands
     */
    info?: any[];



    /**
     * Set ID Channels
     */
    channelsIds?: any[];
}