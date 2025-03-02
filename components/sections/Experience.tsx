import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    date: '2021 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading enterprise-level applications development with a focus on scalable architecture and DevOps practices.'
  },
  {
    date: '2019 - 2021',
    title: 'Mobile App Developer',
    company: 'Mobile Innovations',
    description: 'Developed cross-platform mobile applications for iOS and Android, focusing on performance and user experience.'
  },
  {
    date: '2018 - 2019',
    title: 'Backend Developer',
    company: 'Data Driven Solutions',
    description: 'Built robust backend systems and APIs for data-intensive applications, optimizing for speed and scalability.'
  },
  {
    date: 'March 2021',
    title: 'First Programming Language',
    company: 'StartUp Innovations',
    description: 'Began my journey in web development, working on various frontend projects and learning modern frameworks.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Journey
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-4 items-start"
            >
              <div className="flex-shrink-0 w-full md:w-48 mb-2 md:mb-0">
                <div className="flex items-center text-[#00FFA3]">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{exp.date}</span>
                </div>
              </div>
              <div className="flex-grow bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <div className="flex items-center text-[#6E56CF] mb-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{exp.company}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

