import { StatusCommand } from "../protocols/status-command";

export const wrongCommand = (error: Error): StatusCommand => ({
    body: error,
    status: 400
});

export const serverError = (error: Error): StatusCommand => ({
    body: error,
    status: 500
});