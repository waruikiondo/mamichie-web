import { createClient } from '@supabase/supabase-js';

// If Vercel fails to inject the variables, this will force it to use your exact keys.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://hlebfikjloatztyxjkux.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZWJmaWtqbG9hdHp0eXhqa3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNzk4NzksImV4cCI6MjA5NTc1NTg3OX0.-R8mtH3ISeEAIZN98Jdr5Y-TQxP_B92x83q3zz_80F4";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables in .env.local');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);