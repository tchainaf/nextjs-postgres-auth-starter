import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  [key: string]: any;
}

export default function Link({ children, href, ...props }: LinkProps) {
  props.className = `${props.className} underline transition-all`;
  return (
    <NextLink href={href} passHref {...props}>
      {children}
    </NextLink>
  );
}
