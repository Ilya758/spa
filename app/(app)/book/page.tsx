'use client';

import React from 'react';
import { BookBanner } from '@/app/components/BookBanner';
import { BookForm } from '@/app/components/BookForm';
import { StyledPage, StyledPageContent } from './page.styled';

const Page = () => (
  <StyledPage>
    <StyledPageContent>
      <BookBanner />
      <BookForm />
    </StyledPageContent>
  </StyledPage>
);

export default Page;
