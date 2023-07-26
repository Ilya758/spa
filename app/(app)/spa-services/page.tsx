'use client';

import React from 'react';
import { SpaServices } from '@/app/components/SpaServices';
import { StyledPage } from '../page.styled';
import { StyledPageContent } from './page.styled';

const Page = () => (
  <StyledPage>
    <StyledPageContent>
      <SpaServices />
    </StyledPageContent>
  </StyledPage>
);

export default Page;
