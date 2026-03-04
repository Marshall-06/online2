import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Top Categories</h2>
            <p className="text-slate-500">Explore our most popular learning paths</p>
          </div>
          <button className="text-brand-primary font-bold text-sm hover:underline">
            View All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((category, index) => {
            // @ts-ignore
            const Icon = Icons[category.icon] || Icons.Book;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-primary/30 hover:bg-white hover:shadow-xl transition-all cursor-pointer text-center"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-brand-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-400">{category.courses_count.toLocaleString()} Courses</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
