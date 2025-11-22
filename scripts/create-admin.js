import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase environment variables")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

async function createAdmin() {
  try {
    console.log("[v0] Creating admin user...")

    // Create the auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: "aymaneouhassoun@ouhassoun.com",
      password: "Test@aymane69",
      email_confirm: true, // Auto-confirm the email
    })

    if (authError) {
      console.error("[v0] Error creating auth user:", authError.message)
      process.exit(1)
    }

    console.log("[v0] Auth user created successfully:", authData.user.id)

    // Add to admin_users table
    const { data: adminData, error: adminError } = await supabase
      .from("admin_users")
      .insert({
        user_id: authData.user.id,
        email: "aymaneouhassoun@ouhassoun.com",
      })
      .select()

    if (adminError) {
      console.error("[v0] Error adding to admin_users table:", adminError.message)
      process.exit(1)
    }

    console.log("[v0] Admin user added to admin_users table successfully!")
    console.log("[v0] You can now login with:")
    console.log("Email: aymaneouhassoun@ouhassoun.com")
    console.log("Password: Test@aymane69")
  } catch (error) {
    console.error("[v0] Unexpected error:", error)
    process.exit(1)
  }
}

createAdmin()
