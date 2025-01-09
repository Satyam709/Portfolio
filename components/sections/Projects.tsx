import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with microservices architecture',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    github: '#',
    demo: '#'
  },
  {
    title: 'DevOps Dashboard',
    description: 'Centralized monitoring and deployment management tool',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Vue.js', 'Go', 'Kubernetes', 'Prometheus', 'Grafana'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Cross-platform Mobile App',
    description: 'Fitness tracking app with real-time data synchronization',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80',
    tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-[#6E56CF]/20 text-[#6E56CF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-white/10">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-[#6E56CF] hover:bg-[#5842b5]">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

