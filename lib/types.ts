export interface ThesisSettings {
  id: string
  defense_date: string
  defense_time: string
  created_at: string
  updated_at: string
}

export interface Invitation {
  id: string
  guest_name: string
  unique_code: string
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  email: string
  created_at: string
}
