import { Card } from '@/stories/Card/Card';
import { Text } from '@/stories/Text';
import { Input } from '@/stories/Input';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import {
  StyledActionContainer,
  StyledCardContent,
  StyledContainer,
  StyledContent,
  StyledDiscountText,
  StyledEmailConfirmationButton,
  StyledEmailConfirmationTipText,
  StyledEmailInputContainer,
  StyledHeading,
  StyledPictureContainer,
} from './EmailNewsletter.styled';

export const EmailNewsletter = () => (
  <StyledContainer>
    <StyledContent>
      <Card
        style={{
          maxHeight: '652px',
          height: '100%',
          maxWidth: '977px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <StyledCardContent>
          <StyledActionContainer>
            <StyledHeading>
              <Text.H4>Sign Up to Bark Newsletter</Text.H4>
            </StyledHeading>

            <StyledDiscountText>
              <Text>Get 10% Off Your First Spa Treatment</Text>
            </StyledDiscountText>

            <StyledEmailInputContainer>
              <Input placeholder="Email" />
            </StyledEmailInputContainer>

            <StyledEmailConfirmationButton>
              <Button>
                <Text>Sign Up</Text>
              </Button>
            </StyledEmailConfirmationButton>

            <StyledEmailConfirmationTipText>
              <Text>
                *By completing this form you are signing up to receive our
                emails and can unsubscribe at any time.
              </Text>
            </StyledEmailConfirmationTipText>
          </StyledActionContainer>

          <StyledPictureContainer>
            <Card>
              <Image
                alt="Email picture"
                src="/png/home/email-pic.png"
                width={466}
                height={430}
                objectFit="contain"
              />
            </Card>
          </StyledPictureContainer>
        </StyledCardContent>
      </Card>
    </StyledContent>
  </StyledContainer>
);
