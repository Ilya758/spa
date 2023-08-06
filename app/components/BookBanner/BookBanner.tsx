import Image from 'next/image';
import { Text } from '@/stories/Text';
import {
  StyledBannerContainer,
  StyledContainer,
  StyledContent,
  StyledText,
} from './BookBanner.styled';
import { useTranslations } from 'next-intl';

export const BookBanner = () => {
  const t = useTranslations('Book');

  return (
    <StyledContainer>
      <StyledContent>
        <StyledBannerContainer>
          <Image
            sizes="100vw"
            alt="Banner"
            src="/png/book/banner.png"
            fill
            priority
          />
          <StyledText>
            <Text>{t('Heading')}</Text>
          </StyledText>
        </StyledBannerContainer>
      </StyledContent>
    </StyledContainer>
  );
};
