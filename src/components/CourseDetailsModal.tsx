import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Clock, Globe, Award, CheckCircle2, PlayCircle } from 'lucide-react';
import { Course } from '../types';
import { Button } from './Button';

interface CourseDetailsModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="overflow-y-auto">
            {/* Header / Hero Area */}
            <div className="bg-slate-900 text-white p-8 md:p-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">
                  {course.category} • {course.level}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
                  {course.title}
                </h2>
                <p className="text-slate-400 text-lg mb-6">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400 font-bold">{course.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
                      ))}
                    </div>
                    <span className="text-slate-400">({course.reviews_count.toLocaleString()} ratings)</span>
                  </div>
                  <div className="text-slate-300">
                    Created by <span className="text-brand-primary font-medium hover:underline cursor-pointer">{course.instructor}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    Last updated {course.updated_at}
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    English [Auto]
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-12 grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* What you'll learn */}
                <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                  <h3 className="text-xl font-bold mb-4">What you'll learn</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Master the core concepts of the subject',
                      'Build real-world projects from scratch',
                      'Understand industry best practices',
                      'Get hands-on experience with modern tools',
                      'Prepare for professional certifications',
                      'Access exclusive community resources'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Content Preview */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Course content</h3>
                  <div className="space-y-2">
                    {[
                      { title: 'Introduction and Setup', duration: '45min', lessons: 5 },
                      { title: 'Foundations and Core Principles', duration: '2h 15min', lessons: 12 },
                      { title: 'Advanced Techniques', duration: '4h 30min', lessons: 24 },
                      { title: 'Final Project and Deployment', duration: '1h 20min', lessons: 8 },
                    ].map((section, i) => (
                      <div key={i} className="p-4 border border-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <PlayCircle className="w-5 h-5 text-slate-400" />
                          <div>
                            <div className="font-bold text-slate-900 text-sm">{section.title}</div>
                            <div className="text-xs text-slate-500">{section.lessons} lectures</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-400 font-medium">{section.duration}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar / Pricing */}
              <div className="space-y-6">
                <div className="sticky top-0 p-6 border border-slate-200 rounded-2xl shadow-sm bg-white">
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 relative group cursor-pointer">
                    <img src={course.thumbnail} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <PlayCircle className="w-6 h-6 text-slate-900 fill-slate-900" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] font-bold uppercase tracking-widest">
                      Preview this course
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold text-slate-900">${course.price}</span>
                    {course.old_price && (
                      <span className="text-lg text-slate-400 line-through">${course.old_price}</span>
                    )}
                    <span className="text-brand-primary font-bold text-sm ml-auto">85% off</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button variant="black" className="w-full py-4">Add to cart</Button>
                    <Button variant="white" className="w-full py-4">Buy now</Button>
                  </div>

                  <div className="text-center text-xs text-slate-500 mb-6">
                    30-Day Money-Back Guarantee
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm font-bold text-slate-900">This course includes:</div>
                    <div className="space-y-2">
                      {[
                        { icon: Clock, text: `${course.duration} on-demand video` },
                        { icon: Award, text: 'Certificate of completion' },
                        { icon: Globe, text: 'Full lifetime access' },
                        { icon: CheckCircle2, text: 'Access on mobile and TV' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                          <item.icon className="w-4 h-4 text-slate-400" />
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
