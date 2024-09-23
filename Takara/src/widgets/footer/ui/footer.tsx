import { getMenuItems } from '@/shared/serverApi';
import { IMenuItem } from '@/shared/types';
import { FC, PropsWithChildren, useState } from 'react';
import Image from 'next/image';
import { FooterMenu } from './footer-menu/footer-menu';
const transformRes = (data: IMenuItem[] | undefined = []) => {
  const menuItems = data;
  const cols: IMenuItem[][] = [];

  const colSize = Math.ceil(menuItems.length / 3);

  for (let i = 0; i < menuItems.length; i += colSize) {
    const col = menuItems.slice(i, i + colSize);
    cols.push(col);
  }

  return cols;
};
export const Footer: FC<PropsWithChildren> = async ({ children }) => {
  const footerMenuItems = await getMenuItems().then(transformRes);

  return (
    <footer className="footer">
      <div className="footer__item">
        <div className="footer__item-grid">
          <a href="/" className="footerLogo">
            <Image src="/img/logo/logo.png" alt="" width={134} height={40} />
          </a>

          <FooterMenu footerMenuItems={footerMenuItems} />
        </div>
        <div className="footer__item-grid">
          <div className="footer__item-bottomEdgeTxt">2023 © Takara</div>
          <div className="footer__item-bottomText">
            <a href="#">Конфиденциальность</a>
            <a href="#">Условия пользования</a>
          </div>
        </div>
      </div>
      <div className="footer__item">
        {children}
        <a href={'https://spaceapp.ru/razrabotka'} className="footer__item-bottomEdge">
          Разработка сайта
          <Image src="/img/logo/spaceApp.png" alt="" width={53} height={42} />
        </a>
      </div>
    </footer>
  );
};
