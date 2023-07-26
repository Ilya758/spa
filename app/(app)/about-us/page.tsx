'use client';

import React from 'react';
import { InfoPage } from '@/app/components/InfoPage';
import { StyledPage } from '../page.styled';
import { StyledPageContent } from './page.styled';
import { ABOUT_US_ITEMS } from './constants';

const Page = () => (
  <StyledPage>
    <StyledPageContent>
      <InfoPage
        heading="About Us"
        items={ABOUT_US_ITEMS}
        subheading="Our Owners Love Dogs and Cats Only"
      />
    </StyledPageContent>
  </StyledPage>
);

export default Page;
