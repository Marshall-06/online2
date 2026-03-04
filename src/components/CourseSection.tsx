import React, { useState } from 'react';
import { MOCK_COURSES } from '../constants';
import { CourseCard } from './CourseCard';
import { Button } from './Button';
import { ArrowRight, TrendingUp, Award, Clock, PlayCircle } from 'lucide-react';
import { CourseDetailsModal } from './CourseDetailsModal';
import { Course } from '../types';

export const CourseSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest mb-2">
              <TrendingUp className="w-4 h-4" />
              Popular Right Now
            </div>
            <h2 className="text-3xl font-display font-bold text-slate-900">Featured Courses</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="white" size="sm">Newest</Button>
            <Button variant="white" size="sm">Trending</Button>
            <Button variant="black" size="sm">Bestsellers</Button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {MOCK_COURSES.map((course) => (
            <div key={course.id} onClick={() => setSelectedCourse(course)}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            Explore All Courses
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <PlayCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">210,000+ Online Courses</h4>
              <p className="text-sm text-slate-500">Enjoy lifetime access to courses on EduMix’s website and app.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Expert Instruction</h4>
              <p className="text-sm text-slate-500">Find the right instructor for you from around the world.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Learn at Your Own Pace</h4>
              <p className="text-sm text-slate-500">Flexible learning schedules that fit your busy lifestyle.</p>
            </div>
          </div>
        </div>
      </div>

      <CourseDetailsModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />
    </section>
  );
};
