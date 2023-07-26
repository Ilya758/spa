import { StyledContent, StyledHeading, StyledText } from './InfoBlock.styled';
import { Text } from '@/stories/Text';

export type InfoBlockProps = {
  /**
   * Heading
   */
  heading: string;

  /**
   * Price
   */
  price: string;

  /**
   * Text
   */
  text: string;

  /**
   * Set width of the text by percent
   */
  textWidth: number;
};

/**
 * Information block for product/service description
 */
export const InfoBlock = ({
  heading,
  price,
  text,
  textWidth,
}: InfoBlockProps) => {
  return (
    <StyledContent>
      <StyledHeading>
        <Text>{heading}</Text>
        <Text>{price}</Text>
      </StyledHeading>
      <StyledText $textWidth={textWidth}>
        <Text>{text}</Text>
      </StyledText>
    </StyledContent>
  );
};
