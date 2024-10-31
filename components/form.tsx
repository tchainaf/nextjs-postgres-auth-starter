export function Form({
  action,
  children,
}: Readonly<{
  action: any;
  children: React.ReactNode;
}>) {
  return (
    <form
      action={action}
      className='flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16'
    >
      <div>
        <label
          htmlFor='email'
          className='block text-xs uppercase text-gray-600'
        >
          E-mail
        </label>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='exemplo@email.com'
          autoComplete='email'
          required
          className='mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm'
        />
      </div>
      <div>
        <label
          htmlFor='password'
          className='block text-xs uppercase text-gray-600'
        >
          Senha
        </label>
        <input
          id='password'
          name='password'
          type='password'
          required
          className='mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm'
        />
      </div>
      {children}
    </form>
  );
}
