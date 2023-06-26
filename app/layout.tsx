import './reset.css';
import './globals.css';
import StyledComponentsRegistry from "@/lib/registry";
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

export const metadata = {
  title: 'Meteora',
  description: 'Projeto criado para o Challenge Front End da Alura de junho/2023. Criação da página de e-commerce para a Meteora. A Meteora é uma empresa do comércio eletrônico de roupas atemporais, casuais e sem gênero.',
}

// Inter font with Latin characters
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
