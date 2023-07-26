import React from 'react';
import {
  StyledDiscountContainer,
  StyledDiscountContent,
} from './Discount.styled';
import { Text } from '../Text';

export const Discount = () => {
  return (
    <StyledDiscountContainer>
      <StyledDiscountContent>
        <Text>Get 20% OFF When You Book A Spa Day For Your Animal Today!</Text>
      </StyledDiscountContent>
    </StyledDiscountContainer>
  );
};
