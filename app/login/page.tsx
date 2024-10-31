import Link from '@/components/link';
import { Form } from '@/components/form';
import { signIn } from '@/app/auth';
import { SubmitButton } from '@/components/submit-button';

export default function Login() {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl'>
        <div className='flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16'>
          <h3 className='text-xl font-semibold text-gray-900'>Acesso</h3>
          <p className='text-sm text-gray-500'>
            Insira seu e-mail e senha para acessar
          </p>
        </div>
        <Form
          action={async (formData: FormData) => {
            'use server';
            await signIn('credentials', {
              redirectTo: '/dashboard',
              email: formData.get('email') as string,
              password: formData.get('password') as string,
            });
          }}
        >
          <SubmitButton>Entrar</SubmitButton>
          <p className='text-center text-sm text-gray-600'>
            {'Não tem uma conta? '}
            <Link href='/register' className='font-semibold text-gray-800'>
              Cadastre-se
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
