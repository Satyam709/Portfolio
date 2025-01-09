import { motion } from 'framer-motion';
import { Code, Database, Server, Layout, Cpu, Cloud, Braces, GitBranch } from 'lucide-react';

const skills = [
  {
    category: 'Problem Solving',
    icon: <Braces className="w-8 h-8" />,
    color: '#F7DF1E',
    items: ['Algorithms', 'Data Structures', 'System Design', 'Optimization', 'Debugging']
  },
  {
    category: 'Backend Development',
    icon: <Server className="w-8 h-8" />,
    color: '#68A063',
    items: ['API Design', 'Database Management', 'Server-side Logic', 'Microservices', 'Performance Tuning']
  },
  {
    category: 'Frontend Development',
    icon: <Layout className="w-8 h-8" />,
    color: '#61DAFB',
    items: ['Responsive Design', 'State Management', 'UI/UX Implementation', 'Performance Optimization', 'Cross-browser Compatibility']
  },
  {
    category: 'DevOps',
    icon: <Cloud className="w-8 h-8" />,
    color: '#FF9900',
    items: ['CI/CD Pipelines', 'Infrastructure as Code', 'Containerization', 'Monitoring and Logging', 'Cloud Services Management']
  },
  {
    category: 'App Development',
    icon: <Cpu className="w-8 h-8" />,
    color: '#3DDC84',
    items: ['Cross-platform Development', 'Native Features Integration', 'App Store Deployment', 'Performance Optimization', 'User Experience Design']
  },
  {
    category: 'Database Management',
    icon: <Database className="w-8 h-8" />,
    color: '#336791',
    items: ['Schema Design', 'Query Optimization', 'Data Modeling', 'Indexing Strategies', 'Database Security']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${skill.color}20` }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

