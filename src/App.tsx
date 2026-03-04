import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { CourseSection } from './components/CourseSection';
import { Footer } from './components/Footer';
import { AICourseAssistant } from './components/AICourseAssistant';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trusted By Section */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">
              Trusted by over 15,000 companies and millions of learners worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
              {['Google', 'Netflix', 'Amazon', 'Microsoft', 'Apple', 'Meta'].map((company) => (
                <span key={company} className="text-2xl font-display font-bold text-slate-900">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CategoryGrid />
        
        <CourseSection />

        {/* Testimonials / Stats */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                    Join the world's largest learning marketplace
                  </h2>
                  <p className="text-slate-400 text-lg mb-8">
                    Get unlimited access to 25,000+ of EduMix’s top courses for your team. Learn and improve skills across business, tech, design, and more.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      Get EduMix for Business
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-transparent text-white border border-white/20 font-bold rounded-xl hover:bg-white/10 transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Learners', value: '50M+' },
                    { label: 'Instructors', value: '75K+' },
                    { label: 'Courses', value: '210K+' },
                    { label: 'Enrollments', value: '800M+' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                      <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AICourseAssistant />
    </div>
  );
}
