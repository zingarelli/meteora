import './reset.css';
import './global.css';
import StyledComponentsRegistry from "@/lib/registry"
import Header from '@/components/Header';

export const metadata = {
  title: 'Meteora',
  description: 'Projeto criado para o Challenge Front End da Alura de junho/2023. Criação da página de e-commerce para a Meteora. A Meteora é uma empresa do comércio eletrônico de roupas atemporais, casuais e sem gênero.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
