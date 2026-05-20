'use server'

import { createClient } from '@supabase/supabase-js'

export async function insertJob(data: {
  title: string
  company: string
  city: string
  posted: string
  desc: string
}) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { error } = await supabase.from('jobs').insert([{
    title: data.title,
    company: data.company,
    city: data.city,
    posted: data.posted,
    desc: data.desc,
    type: 'アルバイト',
    italian: '不問',
    tags: '',
  }])

  if (error) {
    return { success: false, message: error.message }
  }
  return { success: true }
}
