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
import { useTranslations } from 'next-intl';

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
}: InfoPageProps) => {
  const t = useTranslations();

  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeading>
          <Text>{t(heading)}</Text>
        </StyledHeading>
        <StyledSubheading>
          <Subheading>{t(subheading)}</Subheading>
        </StyledSubheading>
        <Article heading={t(articleHeading)} items={items} />
      </StyledContent>
    </StyledContainer>
  );
};
