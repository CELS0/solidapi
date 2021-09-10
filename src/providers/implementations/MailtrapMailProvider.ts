import { IMailprovaider, IMessage } from "../IMailprovaider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer"
export class MailtrapMailProvider implements IMailprovaider {

    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "6714ea4c8f0018",
                pass: "35b96c25a35e73"
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.sendMail({
            to: {
                name: message.to.name,
                email: message.to.email,
            },
            from: {
                name: message.from.name,
                email: message.from.email,
            },
            subject: message.subject,
            body: message.body,
        })
    }

}