'use client';

import React from 'react';
import { ContactUs } from '@/app/components/ContactUs';
import { StyledPage } from '../page.styled';
import { StyledPageContent } from './page.styled';

const Page = () => (
  <StyledPage>
    <StyledPageContent>
      <ContactUs />
    </StyledPageContent>
  </StyledPage>
);

export default Page;
