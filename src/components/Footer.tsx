import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white">
                EDU<span className="text-brand-primary">mix</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              Empowering learners worldwide through accessible, high-quality education. Join our community of over 50 million students.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Youtube'].map((social) => (
                <button key={social} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current opacity-50" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">EduMix Business</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Teach on EduMix</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Get the app</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help and Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie settings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2024 EduMix, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-500 rounded-full" />
            <span className="text-xs text-slate-500">English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
