import { motion } from "framer-motion";
import { CheckCircle, Award, Zap } from "lucide-react";

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
            <h3 className="text-2xl font-semibold">
              Innovative Full-Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Experienced in building scalable and efficient applications, I
              bring a unique blend of technical expertise and creative
              problem-solving to every project. My passion lies in building
              efficient, user-centric applications that drive business growth
              and enhance user experiences.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#00FFA3] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Full-Stack Mastery:</span>{" "}
                  Proficient in both frontend and backend technologies, ensuring
                  seamless integration and optimal performance across the entire
                  application stack.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#00FFA3] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">DevOps Enthusiast:</span>{" "}
                  Experienced in implementing CI/CD pipelines, containerization,
                  and cloud services, resulting in streamlined development
                  processes and reduced time-to-market.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#00FFA3] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Mobile App Expertise:</span>{" "}
                  Skilled in developing cross-platform mobile applications,
                  delivering native-like experiences with optimal performance.
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <h4 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 mb-4">
                🎖️ Key Achievements
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="w-7 h-7 text-purple-400 flex-shrink-0 mt-1" />
                  <div className="text-gray-300">
                    Secured an{" "}
                    <span className="font-semibold text-white">
                      All India Rank of 9,667
                    </span>{" "}
                    in
                    <span className="font-semibold text-white">
                      {" "}
                      JEE Advanced 2023
                    </span>
                    , ranking among the top{" "}
                    <span className="font-semibold text-white">0.7%</span> of
                    candidates.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-7 h-7 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="text-gray-300">
                    Achieved a{" "}
                    <span className="font-semibold text-white">
                      99.4 percentile
                    </span>{" "}
                    in
                    <span className="font-semibold text-white">
                      {" "}
                      JEE Mains 2023
                    </span>
                    , ranking
                    <span className="font-semibold text-white">
                      {" "}
                      8,875th out of 1.3 million candidates
                    </span>
                    .
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
