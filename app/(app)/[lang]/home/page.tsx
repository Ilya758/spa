'use client';

import { Discount } from '@/stories/Discount';
import React from 'react';
import { Banner } from '@/app/components/Banner';
import { EmailNewsletter } from '@/app/components/EmailNewsletter';
import { Gallery } from '@/app/components/Gallery';
import { StyledPage } from './page.styled';
import { COLLARS, CARRY_ONS } from '../constants';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('Home.Gallery');

  return (
    <StyledPage>
      <Discount />
      <Banner />
      <EmailNewsletter />
      <Gallery
        actionButtonText={t('Collars.ActionButtonText')}
        heading={t('Collars.Heading')}
        items={COLLARS}
      />
      <Gallery
        actionButtonText={t('CarryOns.ActionButtonText')}
        heading={t('CarryOns.Heading')}
        items={CARRY_ONS}
      />
    </StyledPage>
  );
};

export default Page;
