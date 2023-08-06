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
import { useTranslations } from 'next-intl';

export const Banner = () => {
  const buttonTranslation = useTranslations('Common.Buttons.Text');
  const t = useTranslations('Banner');

  return (
    <StyledBannerContainer>
      <StyledBanner>
        <Image
          sizes="100vw"
          alt="Banner"
          src="/png/home/banner.png"
          fill
          priority
        />
      </StyledBanner>
      <StyledFloatableContainer>
        <Text color="charcoal"> {t('Title')} </Text>
        <Text color="charcoal">{t('Text')}</Text>
        <StyledButtonContainer>
          <Button>
            <Link href={'book'}>{buttonTranslation('Book')}</Link>
          </Button>
        </StyledButtonContainer>
      </StyledFloatableContainer>
    </StyledBannerContainer>
  );
};
