import { Text } from '@/stories/Text';
import { List, ListProps } from '@/stories/List';
import { Button } from '@/stories/Button';
import React from 'react';
import {
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledHeading,
} from './Gallery.styled';

type GalleryProps = ListProps & {
  /**
   * Text for action button
   */
  actionButtonText: React.ReactNode;

  /**
   * Gallery heading
   */
  heading: React.ReactNode;

  /**
   * Optional click event-handler
   */
  onActionButtonClick?: () => void;
};

export const Gallery = ({
  actionButtonText,
  heading,
  items,
  onActionButtonClick,
}: GalleryProps) => (
  <StyledContainer>
    <StyledContent>
      <StyledHeading>
        <Text>{heading}</Text>
      </StyledHeading>

      <List items={items} />

      <StyledButton>
        <Button onClick={onActionButtonClick}>
          <Text>{actionButtonText}</Text>
        </Button>
      </StyledButton>
    </StyledContent>
  </StyledContainer>
);
