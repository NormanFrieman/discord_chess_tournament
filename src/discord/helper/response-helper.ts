import { StatusCommand } from "../protocols/status-command";

export const correctCommand = (): StatusCommand => ({
    body: "Correct command",
    status: 200
});

export const wrongCommand = (error: Error): StatusCommand => ({
    body: error,
    status: 400
});

export const serverError = (error: Error): StatusCommand => ({
    body: error,
    status: 500
});

export const misinterpretation = (error: Error): StatusCommand => ({
    body: error,
    status: 400
})