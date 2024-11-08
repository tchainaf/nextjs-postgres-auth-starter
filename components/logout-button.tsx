import { signOut } from '@/app/auth';

export function LogoutButton() {
  async function handleLogout() {
    'use server';
    await signOut();
  }

  return (
    <form action={handleLogout}>
      <button type='submit'>Sair</button>
    </form>
  );
}
