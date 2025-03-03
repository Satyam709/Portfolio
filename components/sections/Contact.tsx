import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { email,twitterUrl } from "@/data/myInfo";
import { sendMail } from "@/lib/maliler";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-[#6E56CF]" />
                officialsatyam9665@gmail.com
              </a>
              <a
                href={twitterUrl}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-[#6E56CF]" />
                @officialsatyam
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Alert
                  className={`border ${
                    status.includes("Failed")
                      ? "border-red-500 bg-red-500/10 text-red-500"
                      : "border-green-500 bg-green-500/10 text-green-500"
                  }`}
                >
                  <AlertDescription className="flex items-center">
                    {status.includes("Failed") ? (
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {status}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {status}
                      </span>
                    )}
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}

            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                console.log(e.currentTarget);
                const formData = new FormData(e.currentTarget);
                console.log(formData);
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const message = formData.get("message") as string;
                const res = await sendMail(name, email, message);
                if (res) {
                  setStatus("Message Sent!");
                  setTimeout(() => {
                    setStatus(null);
                  }, 2000);
                } else {
                  setStatus("Message Failed to Send!");
                  setTimeout(() => {
                    setStatus(null);
                  }, 2000);
                }
              }}
            >
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="bg-white/5 border-white/10 focus:border-[#6E56CF]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-white/5 border-white/10 focus:border-[#6E56CF]"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="bg-white/5 border-white/10 focus:border-[#6E56CF] min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-[#6E56CF] hover:bg-[#5842b5]">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
