'use client';

import React from 'react';
import { InfoPage } from '@/app/components/InfoPage';
import { StyledPage, StyledPageContent } from './page.styled';

import { BLOG_ITEMS } from './constants';

const Page = () => (
  <StyledPage>
    <StyledPageContent>
      <InfoPage
        articleHeading="Rex, The Dog Who Never Stops Playing ... Ever"
        heading="The Bark Chronicles"
        items={BLOG_ITEMS}
        subheading="Where To Read All About The Bark!"
      />
    </StyledPageContent>
  </StyledPage>
);

export default Page;
