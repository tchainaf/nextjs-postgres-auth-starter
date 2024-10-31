import Link from '@/components/link';

export default function Page() {
  return (
    <div>
      <div className='flex h-screen w-screen flex-col items-center justify-center'>
        <div>
          <h1 className='text-center text-3xl'>Calendar Manager</h1>

          <div className='flex space-x-3'>
            <Link
              href='/dashboard'
              className='text-stone-900 hover:text-stone-500'
            >
              Ir para o Dashboard
            </Link>
            <p className='text-stone-900'>·</p>
            <Link
              href='https://vercel.com/templates/next.js/prisma-postgres-auth-starter'
              target='_blank'
              className='text-stone-900 hover:text-stone-500'
            >
              Deploy na Vercel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
