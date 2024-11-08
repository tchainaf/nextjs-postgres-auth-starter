import db from 'prisma/db';
import Link from '@/components/link';
import { redirect } from 'next/navigation';
import { SubmitButton } from '@/components/submit-button';
import { UserForm } from '@/components/user-form';

const api_url = process.env.API_URL;

async function register(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;
  const user = await db.user.findUnique({ where: { email } });

  if (user) {
    console.error('Failed to sign in: ', 'Usuário já existe');
    return 'Usuário já existe'; // TODO: Handle errors with useFormStatus
  } else {
    await fetch(`${api_url}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then(() => {
        redirect('/login');
      })
      .catch((error) => {
        console.error('Failed to sign in: ', error);
        return 'Erro ao criar o usuário'; //Lançar popup com erro
      });
  }
}

export default function Login() {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl'>
        <div className='flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16'>
          <h3 className='text-xl font-semibold text-gray-900'>Cadastro</h3>
          <p className='text-sm text-gray-500'>
            Crie uma conta com e-mail e senha
          </p>
        </div>
        <UserForm action={register}>
          <SubmitButton>Cadastrar</SubmitButton>
          <p className='text-center text-sm text-gray-600'>
            {'Já tem uma conta? '}
            <Link href='/login' className='font-semibold text-gray-800'>
              Entre
            </Link>
          </p>
        </UserForm>
      </div>
    </div>
  );
}
