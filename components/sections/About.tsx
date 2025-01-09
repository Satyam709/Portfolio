import { motion } from 'framer-motion';
import { CheckCircle, Award, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#6E56CF]/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#00FFA3]/20 rounded-full blur-2xl -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Innovative Full-Stack Developer</h3>
            <p className="text-gray-300 leading-relaxed">
              With over 5 years of experience in crafting robust, scalable solutions, I bring a unique blend of technical expertise and creative problem-solving to every project. My passion lies in building efficient, user-centric applications that drive business growth and enhance user experiences.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#00FFA3] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Full-Stack Mastery:</span> Proficient in both frontend and backend technologies, ensuring seamless integration and optimal performance across the entire application stack.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#00FFA3] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">DevOps Enthusiast:</span> Experienced in implementing CI/CD pipelines, containerization, and cloud services, resulting in streamlined development processes and reduced time-to-market.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#00FFA3] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Mobile App Expertise:</span> Skilled in developing cross-platform mobile applications, delivering native-like experiences with optimal performance.
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4">Key Achievements</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Award className="w-6 h-6 text-[#6E56CF] flex-shrink-0 mt-1" />
                  <div>Led the development of a high-traffic e-commerce platform, resulting in a 40% increase in conversion rates.</div>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-6 h-6 text-[#6E56CF] flex-shrink-0 mt-1" />
                  <div>Optimized database queries and implemented caching strategies, improving application response times by 60%.</div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

