import { OverflowWithProvider } from '@/shared/modal/ui/modal-overfow';
import { HeaderWithProvider } from '@/widgets/header';
import ModalAuthorization from '@/widgets/modal-authorization/ui/modal-authorization';
import type { Metadata } from 'next';
import { Footer } from '@/widgets/footer';
import { Aside } from '@/widgets/aside';
import { FC, PropsWithChildren } from 'react';
import { ContactPhone } from '@/widgets/contact-phone';
import { SocialsBlock } from '@/widgets/socials-block';
import './styles/style.scss';
import './styles/icomoon/style.css';

export const metadata: Metadata = {
  title: 'Takara',
};

export const dynamic = 'force-dynamic';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <HeaderWithProvider>
          <ContactPhone />
          <SocialsBlock />
        </HeaderWithProvider>
        <main className="main">
          <Aside />
          <div className="category">
            {children}
            <Footer>
              <ContactPhone className={'margin'} />
              <SocialsBlock className={'margin'} />
            </Footer>
          </div>
        </main>
        <ModalAuthorization />
        <OverflowWithProvider />
      </body>
    </html>
  );
};

export default RootLayout;
