-- Function to automatically create admin_users entry on signup
create or replace function public.handle_new_admin()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.admin_users (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Trigger to call the function after a new user is created
drop trigger if exists on_auth_admin_created on auth.users;

create trigger on_auth_admin_created
  after insert on auth.users
  for each row
  execute function public.handle_new_admin();
