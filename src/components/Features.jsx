import { motion } from 'framer-motion';
import { Brain, Users, Globe } from 'lucide-react';

const features = [
  {
    title: 'Solo Practice Mode',
    desc: 'Master topics at your pace with adaptive quizzes and smart hints.',
    icon: Brain,
  },
  {
    title: 'Local Multiplayer',
    desc: 'Split-screen challenges for classrooms, clubs, and family game nights.',
    icon: Users,
  },
  {
    title: 'Online Battles',
    desc: 'Compete in real-time with friends and rivals across the globe.',
    icon: Globe,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#FAFAFA] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_300px_at_10%_20%,rgba(59,130,246,0.08),transparent),radial-gradient(800px_300px_at_90%_0%,rgba(139,92,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Built for learning, designed for fun
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3">
                <f.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
