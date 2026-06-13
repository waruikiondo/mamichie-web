import { createClient } from '@supabase/supabase-js';

// Hardcoded to physically prevent Vercel's environment variables from breaking the build
const supabaseUrl = "https://hlebfikjloatztyxjkux.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZWJmaWtqbG9hdHp0eXhqa3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNzk4NzksImV4cCI6MjA5NTc1NTg3OX0.-R8mtH3ISeEAIZN98Jdr5Y-TQxP_B92x83q3zz_80F4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);