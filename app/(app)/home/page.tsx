'use client';

import { Discount } from '@/stories/Discount';
import React from 'react';
import { Banner } from '@/app/components/Banner';
import { EmailNewsletter } from '@/app/components/EmailNewsletter';
import { Gallery } from '@/app/components/Gallery';
import { StyledPage } from './page.styled';
import { COLLARS, CARRY_ONS } from '../constants';

const Page = () => (
  <StyledPage>
    <Discount />
    <Banner />
    <EmailNewsletter />
    <Gallery
      actionButtonText="See More Dog Collars"
      heading="Dog Collars"
      items={COLLARS}
    />
    <Gallery
      actionButtonText="See More Carry Ons"
      heading="Animal Carry Ons"
      items={CARRY_ONS}
    />
  </StyledPage>
);

export default Page;
