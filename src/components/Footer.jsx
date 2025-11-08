import { Github, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-br from-gray-900 to-gray-950 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold text-white">EduPlay</h4>
            <p className="mt-2 text-sm text-gray-400">Where learning meets competition. Built for classrooms, teams, and curious minds.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#features">Features</a></li>
              <li><a className="hover:text-white" href="#stats">Stats</a></li>
              <li><a className="hover:text-white" href="#demo">Demo</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white">Follow</h5>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="rounded-full bg-white/5 p-2 hover:bg-white/10"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="rounded-full bg-white/5 p-2 hover:bg-white/10"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="rounded-full bg-white/5 p-2 hover:bg-white/10"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} EduPlay. All rights reserved.</div>
      </div>
    </footer>
  );
}
