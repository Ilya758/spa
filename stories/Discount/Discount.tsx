import React from 'react';
import {
  StyledDiscountContainer,
  StyledDiscountContent,
} from './Discount.styled';
import { Text } from '../Text';
import { useTranslations } from 'next-intl';

export const Discount = () => {
  const t = useTranslations('Discount');

  return (
    <StyledDiscountContainer>
      <StyledDiscountContent>
        <Text>{t('Text')}</Text>
      </StyledDiscountContent>
    </StyledDiscountContainer>
  );
};
