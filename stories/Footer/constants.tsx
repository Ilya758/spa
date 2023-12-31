import { IPath } from './models';
import InstagramIcon from '@/public/svg/instagram.svg';
import MetaIcon from '@/public/svg/meta.svg';
import PinterestIcon from '@/public/svg/pinterest.svg';
import TwitterIcon from '@/public/svg/twitter.svg';
import SnapChatIcon from '@/public/svg/snapchat.svg';

export const FOOTER_PATHS: IPath[] = [
  {
    name: 'Blog',
    href: '../',
  },
  {
    name: 'Cancellations',
    href: 'info',
  },
  {
    name: 'Track',
    href: 'spa-services',
  },
  {
    name: 'Annual',
    href: 'book',
  },
  {
    name: 'Payment',
    href: 'blog',
  },
];

export const SOCIAL_LIST_BUTTONS = [
  {
    icon: <InstagramIcon height={29} width={32} />,
    href: 'instagram',
  },
  {
    icon: <MetaIcon height={29} width={19} />,
    href: 'meta',
  },
  {
    icon: <PinterestIcon height={29} width={27} />,
    href: 'pinterest',
  },
  {
    icon: <TwitterIcon height={29} width={38} />,
    href: 'twitter',
  },
  {
    icon: <SnapChatIcon height={29} width={38} />,
    href: 'shapchat',
  },
];

export const FOOTER_NAVIGATION_LINKS: IPath[] = [
  {
    name: 'Home',
    href: '../',
  },
  {
    name: 'About Us',
    href: 'info',
  },
  {
    name: 'Contact Us',
    href: 'spa-services',
  },
  {
    name: 'FAQs',
    href: 'book',
  },
  {
    name: 'Help',
    href: 'blog',
  },
];

export const FOOTER_TERMS_LINKS: IPath[] = [
  {
    name: 'Terms',
    href: 'home',
  },
  {
    name: 'Privacy',
    href: 'info',
  },
  {
    name: 'Security',
    href: 'spa-services',
  },
];
