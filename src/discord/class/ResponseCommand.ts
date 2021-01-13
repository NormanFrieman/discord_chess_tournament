export interface ResponseCommand{
    commandId: number;



    /**
     * Props Hook
     */
    hook?: any;



    /**
     * Props Generic Commands
     */
    info?: any[];



    /**
     * Set ID Channels
     */
    channelsIds?: any[];
}