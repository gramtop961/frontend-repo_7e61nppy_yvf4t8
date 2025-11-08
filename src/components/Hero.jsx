import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Sparkles, Users } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

function useCountUp(end = 1000, duration = 1500) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration]);

  return value;
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const controls = useAnimation();
  const players = useCountUp(10000, 2000);

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [isInView, controls]);

  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[#FAFAFA]" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(1200px_600px_at_90%_10%,rgba(139,92,246,0.25),transparent)]" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="max-w-2xl rounded-2xl bg-white/60 p-6 backdrop-blur-xl shadow-xl"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-1 text-sm font-medium text-blue-700">
            <Sparkles className="h-4 w-4 text-purple-500" />
            Gamified learning that feels like play
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Learn Through Play,</span> Compete to Win
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Real-time multiplayer quizzes, leaderboards, and rewards — designed for classrooms and communities.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#features"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-white shadow-lg shadow-blue-500/20 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none"
            >
              Start Learning Free
            </a>
            <button
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:shadow-md focus:outline-none"
              onClick={() => {
                const el = document.getElementById('demo');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="h-5 w-5 text-blue-600" /> Watch Demo
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="relative inline-flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <Users className="h-5 w-5 text-blue-600" />
            <p className="text-sm font-medium text-gray-800">
              <span className="font-bold text-blue-600">{players.toLocaleString()}</span> Active Players Right Now
            </p>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
    </section>
  );
}
