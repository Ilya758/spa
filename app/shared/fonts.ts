import localFont from 'next/font/local';

export const cinzelFont = localFont({
  src: [
    {
      path: '../../public/fonts/cinzel-decorative/cinzeldecorative.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/cinzel-decorative/cinzeldecorative.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/cinzel-decorative/cinzeldecorative.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  adjustFontFallback: 'Arial',
});

export const tangerineFont = localFont({
  src: [
    {
      path: '../../public/fonts/tangerine/tangerine.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const cormorantFont = localFont({
  src: [
    {
      path: '../../public/fonts/cormorant/cormorant.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});
