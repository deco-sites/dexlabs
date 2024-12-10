import { Resend } from "resend";
import { AppContext } from "../apps/site.ts";

export interface Props {
    email: string;
    subject: string;
    fields: {};
}

export interface Result {
    status: "ok" | "failure";
}

export default async function sendFormInfo(
    { email, subject, fields }: Props,
    _req: Request,
    ctx: AppContext,
): Promise<Result> {
    const { ...formFields } = fields;

    const resend = new Resend(ctx.resendApiKey.get() || "");

    let html = "";
    Object.entries(formFields).forEach((item) =>
        html += `<div><span>${item[0]}: </span><span>${item[1]}</span></div>`
    );

    try {
        resend.emails.send({
            from: "Contact <onboarding@resend.dev>",
            to: email,
            subject: subject,
            html: html,
        });
        return { status: "ok" };
    } catch (error) {
        console.log(error);
        console.log(error.message);
        return { status: "failure" };
    }
}
