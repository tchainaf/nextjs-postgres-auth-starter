import { auth } from '@/app/auth';
import { LogoutButton } from '@/components/logout-button';

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className='flex h-screen bg-black'>
      <div className='flex h-screen w-screen flex-col items-center justify-center space-y-5 text-white'>
        Olá {session?.user?.email}!
        <LogoutButton />
      </div>
    </div>
  );
}
