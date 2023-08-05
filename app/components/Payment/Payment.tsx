import { Text } from '@/stories/Text';
import { Row } from '@/stories/Grid/Row';
import { Col } from '@/stories/Grid/Col';
import { Input } from '@/stories/Input';
import { Button } from '@/stories/Button';
import {
  StyledContainer,
  StyledContent,
  StyledControlsContainer,
  StyledHeading,
  StyledList,
  StyledListItem,
  StyledTipContainer,
  StyledTipText,
} from './Payment.styled';
import { PAYMENT_METHOD_ICONS } from './constants';

export const Payment = () => (
  <StyledContainer>
    <StyledContent>
      <StyledHeading>
        <Text>Enter your payment information</Text>
      </StyledHeading>

      <StyledControlsContainer>
        <Row gutter={20}>
          <Col span={24}>
            <Input placeholder="Credit Card Number" />
          </Col>
          <Col span={12}>
            <Input placeholder="Expiry Date" />
          </Col>
          <Col span={12}>
            <Input placeholder="CVV" />
          </Col>
          <Col span={24}>
            <Input placeholder="Name on Card" />
          </Col>
        </Row>
      </StyledControlsContainer>

      <StyledList>
        {PAYMENT_METHOD_ICONS.map((Icon, index) => (
          <StyledListItem key={index}>
            <Icon />
          </StyledListItem>
        ))}
      </StyledList>

      <StyledTipContainer>
        <StyledTipText>
          <Text>
            Please be advised cancelling within 24 hours of your scheduled
            appointment will result in a cancellation fee of $300.00.
          </Text>
        </StyledTipText>
      </StyledTipContainer>

      <StyledButtonContainer>
        <Button>Book Appointment</Button>
      </StyledButtonContainer>
    </StyledContent>
  </StyledContainer>
);
