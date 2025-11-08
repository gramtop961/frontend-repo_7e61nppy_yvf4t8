import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${scrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-transparent'} sticky top-0 z-40 transition-colors`}> 
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-lg font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">EduPlay</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 sm:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#stats" className="hover:text-gray-900">Stats</a>
          <a href="#demo" className="hover:text-gray-900">Demo</a>
          <a href="#cta" className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-white shadow-sm">Start Free</a>
        </nav>
      </div>
    </header>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="bg-[#FAFAFA] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">See it in action</h3>
            <p className="mt-3 text-gray-600">Preview a live quiz round with animated progress and score updates. Built with accessible, keyboard-friendly controls.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Real-time connection <span className="ml-2 inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" /></li>
              <li>• Score counters that count up on play</li>
              <li>• Flip-card question preview</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map((i) => (
                <button key={i} className="group h-28 w-full rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-0.5 transition-transform hover:-translate-y-1">
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white text-sm font-semibold text-gray-800 shadow-sm">
                    Option {i}
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-6 h-2 w-full rounded-full bg-gray-100">
              <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_300px_at_50%_20%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-gray-100 bg-white/70 p-10 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Ready to level up your learning?</h3>
              <p className="mt-2 text-gray-600">Join thousands of players mastering subjects through competition.</p>
            </div>
            <form className="flex w-full max-w-md gap-3 md:w-auto" onSubmit={(e)=>e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none"
              />
              <button className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20">
                Start Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <DemoSection />
      <CTASection />
      <Footer />
    </div>
  );
}
