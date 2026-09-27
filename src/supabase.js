import { createClient } from '@supabase/supabase-js'

const supabaseUrl ='https://mbmukxpjligepipwyoxx.supabase.co'
const supabaseKey = 'sb_publishable_pRnabo9Ul7wNejq5_ihvWQ_4w4hmPz4'

export const supabase = createClient(supabaseUrl, supabaseKey)