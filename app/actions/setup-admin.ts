"use server"

import { createClient } from "@supabase/supabase-js"

export async function setupAdmin() {
  try {
    // Use service role key to bypass RLS and create admin user
    const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })

    // Create the auth user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: "aymaneouhassoun@ouhassoun.com",
      password: "Test@aymane69",
      email_confirm: true, // Auto-confirm the email
    })

    if (authError) {
      console.error("[v0] Auth error:", authError)
      return { success: false, error: authError.message }
    }

    console.log("[v0] Auth user created:", authData.user?.id)

    // Add to admin_users table
    const { error: adminError } = await supabaseAdmin.from("admin_users").insert({
      id: authData.user!.id,
      email: "aymaneouhassoun@ouhassoun.com",
    })

    if (adminError) {
      console.error("[v0] Admin table error:", adminError)
      return { success: false, error: adminError.message }
    }

    console.log("[v0] Admin user added to database")

    return {
      success: true,
      message: "Admin account created successfully! You can now login with aymaneouhassoun@ouhassoun.com",
    }
  } catch (error: any) {
    console.error("[v0] Setup error:", error)
    return { success: false, error: error.message }
  }
}
