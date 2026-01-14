import { createClient } from '@supabase/supabase-js';

// These read the keys from .env.local file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// This creates the connection "client"
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
