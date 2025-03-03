"use server";
import { email } from "@/data/myInfo";
import nodemailer from "nodemailer";
export async function sendMail(name:string, mail: string, message: string) {
  try {
    console.log(`Sending mail to ${mail} with message ${message}`);
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.node_email,
        pass: process.env.node_password,
      },
    });

    const mailOptions = {
      from: process.env.node_email,
      to: email,
      subject: "Resume Visitor as " + mail + " with name " + name,
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return false;
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
