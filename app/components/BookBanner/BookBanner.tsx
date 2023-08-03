import Image from 'next/image';
import { Text } from '@/stories/Text';
import {
  StyledBannerContainer,
  StyledContainer,
  StyledContent,
  StyledText,
} from './BookBanner.styled';

export const BookBanner = () => (
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
          <Text>Book An Appointment With Our Groom Specialist Today!</Text>
        </StyledText>
      </StyledBannerContainer>
    </StyledContent>
  </StyledContainer>
);
