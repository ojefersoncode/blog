import { createClient } from '@supabase/supabase-js';

// Variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Certifique-se de definir no arquivo .env
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Certifique-se de definir no arquivo .env

if (!supabaseUrl || !supabaseKey) {
  throw new Error("As variáveis de ambiente NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY não estão definidas.");
}

// Criar o cliente do Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
