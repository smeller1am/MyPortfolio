import { FC } from 'react';
import { config } from './config';
import Link from 'next/link';
import { SocialLinks } from '@/features/social-links';

interface SocialsBlockProps {
  className?: string;
}
export const SocialsBlock: FC<SocialsBlockProps> = ({ className }) => (
  <SocialLinks
    parentClassName={className ? `social social--${className}` : 'social'}
    iconClassName="social__icon"
  />
);
