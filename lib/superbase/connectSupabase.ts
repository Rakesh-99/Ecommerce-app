import { createClient } from "@supabase/supabase-js";

// Connecting to Supabase database : 
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
