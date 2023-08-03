import { InferredFromGeneric } from '@/app/shared/models';
import { IBookFormSchema } from '../models';
import {
  StyledConfirmationButtonContainer,
  StyledContainer,
  StyledContent,
  StyledHeading,
  StyledList,
  StyledListItem,
} from './BookFormResult.styled';
import { Text } from '@/stories/Text';
import { Button } from '@/stories/Button';
import { BOOK_TIMES } from '../constants';
import { LocalStorageService } from '@/app/shared/services';

type Props = {
  onConfirm: () => void;
  items: InferredFromGeneric<IBookFormSchema>;
};

export const BookFormResult = ({ items, onConfirm }: Props) => {
  const handleConfirmResult = () => {
    onConfirm();
    LocalStorageService.setItem('info', items);
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeading>
          <Text>Detailed information:</Text>
        </StyledHeading>
        <StyledList>
          {Object.entries(items).map(([key, value], index) => (
            <StyledListItem key={key + index}>
              {value && (
                <Text>
                  {key.toLowerCase()}:{' '}
                  {key === 'time'
                    ? value
                        .split('')
                        .map(t => BOOK_TIMES.find(({ id }) => id === +t)?.text)
                        .join(', ')
                    : value}
                </Text>
              )}
            </StyledListItem>
          ))}
        </StyledList>

        <StyledConfirmationButtonContainer>
          <Button onClick={handleConfirmResult}>
            <Text>Confirm</Text>
          </Button>
        </StyledConfirmationButtonContainer>
      </StyledContent>
    </StyledContainer>
  );
};
