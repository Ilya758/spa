import React from 'react';
import { Text } from '@/stories/Text';
import { Subheading } from '@/stories/Text/Text';
import { Article } from '@/stories/Article';
import { ArticleItemProps } from '@/stories/Article/Article';
import {
  StyledContainer,
  StyledContent,
  StyledHeading,
  StyledSubheading,
} from './InfoPage.styled';

type InfoPageProps = {
  articleHeading?: string;
  items: ArticleItemProps[];
  heading: string;
  subheading: string;
};

export const InfoPage = ({
  articleHeading,
  heading,
  items,
  subheading,
}: InfoPageProps) => (
  <StyledContainer>
    <StyledContent>
      <StyledHeading>
        <Text>{heading}</Text>
      </StyledHeading>

      <StyledSubheading>
        <Subheading>{subheading}</Subheading>
      </StyledSubheading>

      <Article heading={articleHeading} items={items} />
    </StyledContent>
  </StyledContainer>
);
