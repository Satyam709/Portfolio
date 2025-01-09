import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
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
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll try my best 
              to get back to you!
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:your@email.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-[#6E56CF]" />
                your@email.com
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-[#6E56CF]" />
                @username
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <Input 
                placeholder="Your Name" 
                className="bg-white/5 border-white/10 focus:border-[#6E56CF]"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/5 border-white/10 focus:border-[#6E56CF]"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                className="bg-white/5 border-white/10 focus:border-[#6E56CF] min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-[#6E56CF] hover:bg-[#5842b5]">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

