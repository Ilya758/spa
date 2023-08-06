'use client';

import React from 'react';
import { InfoPage } from '@/app/components/InfoPage';
import { StyledPage, StyledPageContent } from './page.styled';

import { ABOUT_US_ITEMS } from './constants';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('AboutUs.Headings');

  return (
    <StyledPage>
      <StyledPageContent>
        <InfoPage
          heading={t('Heading')}
          items={ABOUT_US_ITEMS}
          subheading={t('Subheading')}
        />
      </StyledPageContent>
    </StyledPage>
  );
};

export default Page;
