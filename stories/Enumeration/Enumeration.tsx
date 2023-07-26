import {
  StyledEnumeration,
  StyledList,
  StyledListItem,
  StyledHeading,
  StyledText,
} from './Enumeration.styled';
import { Text } from '@/stories/Text';

export type EnumerationProps = {
  /**
   * Heading of an enumeration list
   */
  heading: string;

  /**
   * List item to render
   */
  items: string[];
};

/**
 * List of items to enumerate
 */
export const Enumeration = ({ heading, items }: EnumerationProps) => {
  return (
    <StyledEnumeration>
      <StyledHeading>
        <StyledText>
          <Text>{heading}:</Text>
        </StyledText>
      </StyledHeading>
      <StyledList>
        {items.map(item => (
          <StyledListItem>
            <StyledText>
              <Text>{item}</Text>
            </StyledText>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledEnumeration>
  );
};
