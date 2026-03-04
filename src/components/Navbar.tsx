import React from 'react';
import { Search, ShoppingCart, Globe, Menu, User, LogIn } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 px-4 h-16 flex items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer shrink-0">
        <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">E</span>
        </div>
        <span className="text-xl font-display font-bold tracking-tighter text-slate-900">
          EDU<span className="text-brand-primary">mix</span>
        </span>
      </div>

      {/* Categories Dropdown (Desktop) */}
      <div className="hidden lg:block">
        <button className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">
          Categories
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl relative group hidden md:block">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 sm:gap-3">
        <div className="hidden sm:flex items-center gap-4 mr-2">
          <button className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">
            Teach on EduMix
          </button>
        </div>

        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-4 w-4 bg-brand-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            0
          </span>
        </button>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm">Log in</Button>
          <Button variant="black" size="sm">Sign up</Button>
        </div>

        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors md:hidden">
          <Menu className="h-5 w-5" />
        </button>
        
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors hidden md:block">
          <Globe className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};
