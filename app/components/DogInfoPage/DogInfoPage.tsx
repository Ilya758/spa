import Image from 'next/image';
import { Text } from '@/stories/Text';
import { Input } from '@/stories/Input';
import {
  StyledInfoContainer,
  StyledPictureContainer,
  StyledPictureContent,
  StyledPictureTitle,
  StyledSearchContainer,
} from '@/app/(app)/info/page.styled';
import {
  StyledContainer,
  StyledContent,
  StyledHeading,
} from './DogInfoPage.styled';
import { useDogInfoPage } from './hooks/useDogInfoPage';

export const DogInfoPage = () => {
  const { error, isLoading, result, searchValue, setSearchValue } =
    useDogInfoPage();

  const handleChangeSearchValue = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(value);
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeading>
          <Text>INFO DOG</Text>
        </StyledHeading>

        <StyledSearchContainer>
          <Input
            onChange={handleChangeSearchValue}
            width={337}
            placeholder="Search"
            value={searchValue}
          />
        </StyledSearchContainer>

        <StyledPictureContainer>
          <StyledPictureContent $isLoading={isLoading}>
            {result ? (
              <>
                <Image
                  src={result.image_link}
                  alt={result.name}
                  width={600}
                  height={450}
                  objectFit="contain"
                />
                <StyledPictureTitle>
                  <Text>{result.name}</Text>
                </StyledPictureTitle>
              </>
            ) : (
              !error && <Text>There is no matching</Text>
            )}

            {error && <Text>There is something went wrong: {error}</Text>}
          </StyledPictureContent>
        </StyledPictureContainer>

        {result && (
          <StyledInfoContainer>
            <li>
              <Text>Energy: {result.energy}</Text>
            </li>
            <li>
              <Text>Min life expectancy: {result.min_life_expectancy}</Text>
            </li>
            <li>
              <Text>Good with strangers: {result.good_with_strangers}</Text>
            </li>
            <li>
              <Text>Good with other dogs: {result.good_with_strangers}</Text>
            </li>
          </StyledInfoContainer>
        )}
      </StyledContent>
    </StyledContainer>
  );
};
