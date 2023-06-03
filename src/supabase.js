import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://";
const supabaseKey = "API KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
