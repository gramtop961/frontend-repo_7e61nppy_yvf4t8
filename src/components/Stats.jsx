import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <section className="py-20" id="stats">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl">
          <div className="rounded-3xl bg-white/80 p-8 backdrop-blur-xl">
            <div className="grid gap-8 sm:grid-cols-3">
              {[{ label: 'Courses Available', value: 120 }, { label: 'Questions Played', value: 245000 }, { label: 'Avg. Response Time', value: '1.2s' }].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                >
                  <p className="text-sm font-medium text-gray-600">{s.label}</p>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900">
                    {typeof s.value === 'number' ? s.value.toLocaleString() : s.value}
                  </p>
                  <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(i + 1) * 30}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
