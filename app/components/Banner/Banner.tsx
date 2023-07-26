import Image from 'next/image';
import { Text } from '@/stories/Text';
import Link from 'next/link';
import { Button } from '@/stories/Button';
import {
  StyledBanner,
  StyledBannerContainer,
  StyledButtonContainer,
  StyledFloatableContainer,
} from './Banner.styled';

export const Banner = () => (
  <StyledBannerContainer>
    <StyledBanner>
      <Image alt="Banner" src="/png/home/banner.png" fill objectFit="fill" />
    </StyledBanner>

    <StyledFloatableContainer>
      <Text color="charcoal">Your dog running amok in the dirt?</Text>

      <Text color="charcoal">Book your doggy spa day!</Text>

      <StyledButtonContainer>
        <Button>
          <Link href={'book'}>Book Appointment</Link>
        </Button>
      </StyledButtonContainer>
    </StyledFloatableContainer>
  </StyledBannerContainer>
);
