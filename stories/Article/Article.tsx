import { Card } from '../Card/Card';
import { Text } from '../Text';
import {
  StyledArticle,
  StyledHeading,
  StyledList,
  StyledListItem,
  StyledText,
} from './Article.styled';
import Image from 'next/image';

export type ArticleItemProps = {
  /**
   * Article item pic src
   */
  imageSrc: string;

  /**
   * Text for an article item
   */
  text: string;
};

export type ArticleProps = {
  /**
   * Article heading
   */
  heading?: string;

  /**
   * Article item
   */
  items: ArticleItemProps[];
};

/**
 * Basic component to display an article inside of a blog
 */
export const Article = ({ heading, items }: ArticleProps) => {
  return (
    <StyledArticle>
      {heading && (
        <StyledHeading>
          <Text>{heading}</Text>
        </StyledHeading>
      )}

      <StyledList>
        {items.map(({ imageSrc, text }, index) => (
          <StyledListItem $reversed={index % 2 !== 0}>
            <Card>
              <Image alt={text} width={615} height={551} src={imageSrc} />
            </Card>
            <StyledText>
              <Text>{text}</Text>
            </StyledText>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledArticle>
  );
};
