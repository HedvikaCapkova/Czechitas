import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yicxgmpfexrebvkqaflr.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpY3hnbXBmZXhyZWJ2a3FhZmxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNDA2NzUsImV4cCI6MTk4NDcxNjY3NX0.5XEYTApWUqg_HaXe0oeB5dudrUQETcv9bkYkgcc27Cs';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, SUPABASE_KEY);
};
