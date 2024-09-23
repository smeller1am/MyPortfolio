'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import { getMenuItems } from '@/shared/serverApi';
import { IMenuItem } from '@/shared/types';
import { staticMenuItems } from '@/entities/menu';

interface FooterMenuProps {
  footerMenuItems?: IMenuItem[][];
}

export const FooterMenu: FC<FooterMenuProps> = ({ footerMenuItems }) => {
  const [open, setOpen] = useState<boolean>(window.innerWidth >= 576);
  const onMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        className={'footer__itemMenu'}
        onClick={onMenu}
      >
        <p>Меню</p>
      </div>
      <div
        className="footer__item-gridTop"
        style={ { display: window.innerWidth >= 576 ? "grid" : 'block' }}
      >
        {footerMenuItems?.map((col, idx) => (
          <ul className="footer__item-infoList" key={`ul_${idx}`}>
            {col.map(({ title, link }, idx) => (
              <li className="footer__item-listText" key={idx}>
                {/* todo: fix it on styles */}
                <Link href={link} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        ))}
        <ul className="footer__item-infoList">
          {staticMenuItems.map(({ title, link }, idx) => (
            <li className="footer__item-listText" key={idx}>
              {/* todo: fix it on styles */}
              <Link href={link} style={{ color: 'inherit', textDecoration: 'none' }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
