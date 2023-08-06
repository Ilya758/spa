'use client';

import React from 'react';
import { InfoPage } from '@/app/components/InfoPage';
import { StyledPage, StyledPageContent } from './page.styled';

import { BLOG_ITEMS } from './constants';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('Blog.Headings');

  return (
    <StyledPage>
      <StyledPageContent>
        <InfoPage
          articleHeading={t('Article')}
          heading={t('Heading')}
          items={BLOG_ITEMS}
          subheading={t('Subheading')}
        />
      </StyledPageContent>
    </StyledPage>
  );
};

export default Page;
