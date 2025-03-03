import { motion } from 'framer-motion';
import { Code, Database, Server, Layout, Cpu, Cloud, GitBranch, FileJson, Coffee, PiIcon, Eclipse, Disc, Box, Smartphone, Apple, Hexagon, Search, Flame, Activity, BarChart } from 'lucide-react';

export const techStacks = [
  {
    category: "Frontend",
    techs: [
      { name: "React", icon: <Code className="text-[#61DAFB]" /> },
      { name: "TypeScript", icon: <FileJson className="text-[#3178C6]" /> },
      { name: "Next.js", icon: <Code className="text-white" /> },
      // { name: "Vue.js", icon: <Code className="text-[#4FC08D]" /> },
      { name: "JavaScript", icon: <FileJson className="text-[#F7DF1E]" /> },
      { name: "HTML5", icon: <Layout className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <Layout className="text-[#1572B6]" /> },
      { name: "Sass", icon: <Layout className="text-[#CC6699]" /> },
      { name: "Tailwind CSS", icon: <Layout className="text-[#06B6D4]" /> },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: <Server className="text-[#339933]" /> },
      { name: "Python", icon: <PiIcon className="text-[#3776AB]" /> },
      { name: "Java", icon: <Coffee className="text-[#007396]" /> },
      { name: "GraphQL", icon: <Hexagon className="text-[#E10098]" /> },
      { name: "Express.js", icon: <Server className="text-white" /> },
      { name: "Django", icon: <PiIcon className="text-[#092E20]" /> },
      { name: "Spring", icon: <Coffee className="text-[#6DB33F]" /> },
    ],
  },
  {
    category: "Database",
    techs: [
      { name: "PostgreSQL", icon: <Database className="text-[#336791]" /> },
      { name: "MongoDB", icon: <Database className="text-[#47A248]" /> },
      { name: "Redis", icon: <Database className="text-[#DC382D]" /> },
      { name: "Elasticsearch", icon: <Search className="text-[#005571]" /> },
      { name: "MySQL", icon: <Database className="text-[#4479A1]" /> },
      { name: "Firebase", icon: <Flame className="text-[#FFCA28]" /> },
    ],
  },
  {
    category: "DevOps",
    techs: [
      { name: "Docker", icon: <Box className="text-[#2496ED]" /> },
      { name: "Kubernetes", icon: <Cloud className="text-[#326CE5]" /> },
      { name: "AWS", icon: <Cloud className="text-[#FF9900]" /> },
      { name: "Azure", icon: <Cloud className="text-[#0089D6]" /> },
      // { name: "Jenkins", icon: <Cpu className="text-[#D24939]" /> },
      // { name: "Terraform", icon: <Box className="text-[#7B42BC]" /> },
      // { name: "Ansible", icon: <Cpu className="text-[#EE0000]" /> },
      { name: "Prometheus", icon: <Activity className="text-[#E6522C]" /> },
      { name: "Grafana", icon: <BarChart className="text-[#F46800]" /> },
    ],
  },
  {
    category: "Mobile",
    techs: [
      { name: "React Native", icon: <Smartphone className="text-[#61DAFB]" /> },
      // { name: "Flutter", icon: <Smartphone className="text-[#02569B]" /> },
      // { name: "iOS (Swift)", icon: <Apple className="text-[#FA7343]" /> },
      {
        name: "Android (Kotlin)",
        icon: <Smartphone className="text-[#0095D5]" />,
      },
    ],
  },
  {
    category: "Version Control",
    techs: [{ name: "Git", icon: <GitBranch className="text-[#F05032]" /> }],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Tech I Work With
        </motion.h2>

        {techStacks.map((stack, index) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">{stack.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {stack.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

