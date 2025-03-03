import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    date: "2024 - Present",
    title: "DevOps & Cloud Enthusiast",
    company: "Independent Projects",
    description:
      "Exploring cloud-native technologies, CI/CD pipelines, and container orchestration to streamline deployments and improve system reliability.",
  },
  {
    date: "Early 2024",
    title: "Smart India Hackathon Finalist",
    company: "National-Level Competition",
    description:
      "Developed an innovative solution as a college finalist in the Smart India Hackathon, solving real-world problems through technology and teamwork.",
  },
  {
    date: "Mid 2023 - Present",
    title: "Full Stack Developer",
    company: "Personal & Open Source Projects",
    description:
      "Building scalable web applications with a strong focus on backend development, database optimization, and API design using modern frameworks.",
  },
  {
    date: "Late 2023",
    title: "Advanced Algorithms & Data Structures",
    company: "Self-Learning (Princeton University - Robert Sedgewick)",
    description:
      "Completed both 'Algorithms, Part I & II' courses, mastering key concepts like graph algorithms, sorting, searching, and string processing.",
  },
  {
    date: "Early 2023 - Mid 2023",
    title: "Web Development Foundations",
    company: "Self-Learning & Projects",
    description:
      "Gained expertise in frontend and backend technologies, focusing on modern frameworks, responsive design, and RESTful APIs.",
  },
  {
    date: "2020 - 2022",
    title: "Java Programmer",
    company: "Self-Learning & Academic Projects",
    description:
      "Developed a strong foundation in object-oriented programming, data structures, and algorithms through academic coursework and personal projects.",
  },
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

