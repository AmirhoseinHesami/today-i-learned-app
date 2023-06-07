import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_BASE_URL;
const supabaseKey = process.env.REACT_APP_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
