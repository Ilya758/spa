import Image from 'next/image';
import { Text } from '@/stories/Text';
import { Input } from '@/stories/Input';
import {
  StyledInfoContainer,
  StyledPictureContainer,
  StyledPictureContent,
  StyledPictureTitle,
  StyledSearchContainer,
} from '@/app/(app)/[lang]/info/page.styled';
import {
  StyledContainer,
  StyledContent,
  StyledHeading,
} from './DogInfoPage.styled';
import { useDogInfoPage } from './hooks/useDogInfoPage';
import { useTranslations } from 'next-intl';

export const DogInfoPage = () => {
  const t = useTranslations('InfoPage');
  const dogInfoTranslations = useTranslations('InfoPage.DogInfo');
  const { error, isLoading, result, searchValue, setSearchValue } =
    useDogInfoPage();
  const inputPlaceholdersTranslations = useTranslations(
    'Common.Inputs.Placeholders'
  );

  const handleChangeSearchValue = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(value);
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeading>
          <Text>{t('Heading')}</Text>
        </StyledHeading>

        <StyledSearchContainer>
          <Input
            data_cy="dog-search"
            onChange={handleChangeSearchValue}
            width={337}
            placeholder={inputPlaceholdersTranslations('Search')}
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
              !error && <Text>{t('Text.NoMatch')}</Text>
            )}

            {error && (
              <Text>
                {t('Error')}: {error}
              </Text>
            )}
          </StyledPictureContent>
        </StyledPictureContainer>

        {result && (
          <StyledInfoContainer>
            <li>
              <Text>
                {dogInfoTranslations('Energy')}: {result.energy}
              </Text>
            </li>
            <li>
              <Text>
                {dogInfoTranslations('Expectancy')}:{' '}
                {result.min_life_expectancy}
              </Text>
            </li>
            <li>
              <Text>
                {dogInfoTranslations('Strangers')}: {result.good_with_strangers}
              </Text>
            </li>
            <li>
              <Text>
                {dogInfoTranslations('Other')}: {result.good_with_strangers}
              </Text>
            </li>
          </StyledInfoContainer>
        )}
      </StyledContent>
    </StyledContainer>
  );
};
