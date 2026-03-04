export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar_img?: string;
  role: 'student' | 'instructor' | 'admin';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructor_id: string;
  price: number;
  old_price?: number;
  rating: number;
  reviews_count: number;
  thumbnail: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  lessons_count: number;
  updated_at: string;
  is_bestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  courses_count: number;
}

export interface Comment {
  id: string;
  user_id: string;
  course_id: string;
  content: string;
  user_name: string;
  user_avatar?: string;
  created_at: string;
}
