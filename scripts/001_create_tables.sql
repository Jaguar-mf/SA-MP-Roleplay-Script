-- Create thesis_settings table to store global thesis information
create table if not exists public.thesis_settings (
  id uuid primary key default gen_random_uuid(),
  defense_date timestamptz not null,
  defense_time text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Create invitations table to store personalized invitations
create table if not exists public.invitations (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  unique_code text unique not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Create admin_users table for authentication
create table if not exists public.admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.thesis_settings enable row level security;
alter table public.invitations enable row level security;
alter table public.admin_users enable row level security;

-- RLS Policies for thesis_settings
-- Anyone can read thesis settings (for public invitation pages)
create policy "thesis_settings_select_all"
  on public.thesis_settings for select
  using (true);

-- Only authenticated admins can insert/update/delete
create policy "thesis_settings_insert_admin"
  on public.thesis_settings for insert
  with check (auth.uid() in (select id from public.admin_users));

create policy "thesis_settings_update_admin"
  on public.thesis_settings for update
  using (auth.uid() in (select id from public.admin_users));

create policy "thesis_settings_delete_admin"
  on public.thesis_settings for delete
  using (auth.uid() in (select id from public.admin_users));

-- RLS Policies for invitations
-- Anyone can read invitations (needed for public invitation pages)
create policy "invitations_select_all"
  on public.invitations for select
  using (true);

-- Only authenticated admins can insert/update/delete
create policy "invitations_insert_admin"
  on public.invitations for insert
  with check (auth.uid() in (select id from public.admin_users));

create policy "invitations_update_admin"
  on public.invitations for update
  using (auth.uid() in (select id from public.admin_users));

create policy "invitations_delete_admin"
  on public.invitations for delete
  using (auth.uid() in (select id from public.admin_users));

-- RLS Policies for admin_users
-- Only admins can read admin_users
create policy "admin_users_select_admin"
  on public.admin_users for select
  using (auth.uid() in (select id from public.admin_users));

create policy "admin_users_insert_admin"
  on public.admin_users for insert
  with check (auth.uid() = id);

-- Create indexes for better performance
create index if not exists idx_invitations_unique_code on public.invitations(unique_code);
create index if not exists idx_admin_users_email on public.admin_users(email);

-- Insert default thesis settings
insert into public.thesis_settings (defense_date, defense_time)
values ('2025-06-15 14:00:00+00', '14:00')
on conflict do nothing;
