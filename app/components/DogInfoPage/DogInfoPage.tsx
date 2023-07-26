import { Text } from '@/stories/Text';
import { Input } from '@/stories/Input';
import {
  StyledPictureContainer,
  StyledPictureContent,
  StyledSearchContainer,
} from '@/app/(app)/info/page.styled';
import {
  StyledContainer,
  StyledContent,
  StyledHeading,
} from './DogInfoPage.styled';

export const DogInfoPage = () => (
  <StyledContainer>
    <StyledContent>
      <StyledHeading>
        <Text>INFO DOG</Text>
      </StyledHeading>

      <StyledSearchContainer>
        <Input width={337} placeholder="Search" />
      </StyledSearchContainer>

      <StyledPictureContainer>
        <StyledPictureContent />
      </StyledPictureContainer>
    </StyledContent>
  </StyledContainer>
);
