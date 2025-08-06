import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Task {
  id: string;
  title: string;
  description: string;
  due_date: string;
  assigned_to: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Completed';
  created_at: string;
  created_by: string;
  updated_at: string;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  task_id: string;
  author_id: string;
  content: string;
  created_at: string;
  profiles?: {
    full_name: string;
    email: string;
  };
}

export interface Profile {
  id: string;
  full_name: string;
  email: string;
  created_at: string;
}