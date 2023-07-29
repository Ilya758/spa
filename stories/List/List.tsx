import { Card } from '../Card/Card';
import { Text } from '../Text';
import {
  StyledList,
  StyledListItemPrice,
  StyledListItemText,
} from './List.styled';
import Image from 'next/image';

export type ListItemProps = {
  picSrc: string;
  text: string;
  price: string;
};

export type ListProps = {
  /**
   * Items you want provide to a list (basically list represents a list of products)
   */
  items: ListItemProps[];
};

/**
 * List representation of a flatten items
 */
export const List = ({ items }: ListProps) => {
  return (
    <StyledList>
      {items.map(({ picSrc, price, text }, index) => (
        <li key={`${text}-${index}`}>
          <Card
            style={{
              width: '423px',
              height: '431px',
              overflow: 'hidden',
            }}
          >
            <Image width={423} height={431} alt={text} src={picSrc} />
          </Card>

          <StyledListItemText>
            <Text>{text}</Text>
          </StyledListItemText>

          <StyledListItemPrice>
            <Text>{price}</Text>
          </StyledListItemPrice>
        </li>
      ))}
    </StyledList>
  );
};
