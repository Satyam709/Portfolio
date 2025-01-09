import { motion } from 'framer-motion';

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
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a versatile full-stack developer with a passion for crafting efficient, scalable solutions. 
              My journey in tech is driven by a deep curiosity and a commitment to continuous learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With expertise spanning frontend, backend, DevOps, and app development, I bring a holistic 
              approach to every project. My problem-solving skills allow me to tackle complex challenges 
              and deliver innovative solutions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6E56CF]" />
                <span>Full-stack development with a focus on modern technologies</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6E56CF]" />
                <span>DevOps practices for streamlined deployment and operations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6E56CF]" />
                <span>Mobile app development for cross-platform solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6E56CF]" />
                <span>Strong problem-solving skills for optimizing performance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

