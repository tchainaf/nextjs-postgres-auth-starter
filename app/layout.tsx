import '@/styles/globals.css';
import { Roboto, Ubuntu } from 'next/font/google';

const roboto = Roboto({
  weight: '700',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

export const metadata = {
  title: 'Calendar Manager',
  description:
    'An app built with Next.js to manage your events and appointments and generate a monthly report.',
  metadataBase: new URL('https://calendar-manager-tchainaf.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${roboto.variable} ${ubuntu.variable}`}>
        {children}
      </body>
    </html>
  );
}
