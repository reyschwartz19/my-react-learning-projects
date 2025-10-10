import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Helpful debug: Vite only exposes env vars prefixed with VITE_ and
// they are injected at build/dev-server start. If these are undefined
// the dev server likely needs a restart after fixing the .env file.
if (!supabaseUrl || !supabaseKey) {
	// This will show up in the browser console when the module is imported
	// and also in the terminal where Vite prints client-side console logs.
	console.error('Supabase env vars missing or undefined', { supabaseUrl, supabaseKey });
}

export const supabase = createClient(supabaseUrl ?? '', supabaseKey ?? '');