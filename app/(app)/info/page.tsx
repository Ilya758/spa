'use client';

import React from 'react';
import { DogInfoPage } from '@/app/components/DogInfoPage';
import { StyledPage, StyledPageContent } from './page.styled';

const Page = () => (
  <StyledPage>
    <StyledPageContent>
      <DogInfoPage />
    </StyledPageContent>
  </StyledPage>
);

export default Page;
