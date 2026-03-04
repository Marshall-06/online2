import React from 'react';
import { Star, Users, PlayCircle, Clock } from 'lucide-react';
import { Course } from '../types';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 course-card-hover cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {course.is_bestseller && (
          <div className="absolute top-2 left-2 bg-amber-400 text-amber-950 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Bestseller
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <PlayCircle className="text-white w-12 h-12" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-slate-900 line-clamp-2 mb-1 group-hover:text-brand-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500 mb-2">{course.instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-xs font-bold text-amber-700">{course.rating}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(course.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-slate-200 text-slate-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-slate-400">({course.reviews_count.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center gap-2">
          <span className="text-base font-bold text-slate-900">${course.price}</span>
          {course.old_price && (
            <span className="text-xs text-slate-400 line-through">${course.old_price}</span>
          )}
        </div>

        {/* Meta */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {course.level}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
