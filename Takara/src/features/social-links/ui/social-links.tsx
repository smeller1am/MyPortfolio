import React, { FC } from 'react';

import { getSocials } from '@/shared/serverApi/contacts';
import classNames from 'classnames';

export const SocialLinks: FC<{ parentClassName: string; iconClassName: string }> = async ({
  parentClassName,
  iconClassName,
}) => {
  const socials = await getSocials();
  return (
    <div className={parentClassName}>
      <a
        target="_blank"
        href={
          socials.find((el: any) => {
            return el.socialNetworksType === 'Telegram';
          })?.link
        }
        className={`${iconClassName} icon-tg`}
      ></a>
      <a
        target="_blank"
        href={
          socials.find((el: any) => {
            return el.socialNetworksType === 'Odnokl';
          })?.link
        }
        className={`${iconClassName} icon-ok`}
      ></a>
      <a
        target="_blank"
        href={
          socials.find((el: any) => {
            return el.socialNetworksType === 'Vk';
          })?.link
        }
        className={`${iconClassName} icon-vk`}
      ></a>
    </div>
  );
};
