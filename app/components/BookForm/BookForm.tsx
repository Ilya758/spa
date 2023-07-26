import { Text } from '@/stories/Text';
import { Row } from '@/stories/Grid/Row';
import { Col } from '@/stories/Grid/Col';
import { Input } from '@/stories/Input';
import { Checkbox } from '@/stories/Checkbox';
import { Label } from '@/stories/Label/Label';
import { TextArea } from '@/stories/TextArea';
import { Card } from '@/stories/Card/Card';
import { Enumeration } from '@/stories/Enumeration';
import {
  StyledAddressContainer,
  StyledCheckboxContainer,
  StyledCheckboxesList,
  StyledContainer,
  StyledContent,
  StyledDateTimeText,
  StyledForm,
  StyledFormContainer,
  StyledHeading,
  StyledInfoContainer,
  StyledInputContainer,
  StyledLabelTextContainer,
  StyledTextAreaContainer,
} from './BookForm.styled';
import { BOOK_TIMES } from './constants';
import { Payment } from '../Payment';

export const BookForm = () => (
  <StyledContainer>
    <StyledContent>
      <StyledForm>
        <StyledHeading>
          <Text>Enter your information here</Text>
        </StyledHeading>

        <Row gutter={[0, 150]}>
          <Col span={16}>
            <StyledFormContainer>
              <Row gutter={[43, 60]}>
                <Col span={12}>
                  <StyledInputContainer>
                    <Input placeholder="First name" />
                  </StyledInputContainer>
                </Col>
                <Col span={12}>
                  <StyledInputContainer>
                    <Input placeholder="Last name" />
                  </StyledInputContainer>
                </Col>
                <Col span={12}>
                  <StyledInputContainer>
                    <Input type="email" placeholder="Email" />
                  </StyledInputContainer>
                </Col>
                <Col span={12}>
                  <StyledInputContainer>
                    <Input placeholder="Phone number" />
                  </StyledInputContainer>
                </Col>

                <Col span={12}>
                  <StyledDateTimeText>
                    <Text>Choose a timeslot on Dec. 11th, 2021:</Text>
                  </StyledDateTimeText>

                  <StyledCheckboxesList>
                    {BOOK_TIMES.map(({ id, text }) => (
                      <li key={id}>
                        <Label>
                          <StyledCheckboxContainer>
                            <Checkbox />
                          </StyledCheckboxContainer>
                          <StyledLabelTextContainer>
                            <Text>{text}</Text>
                          </StyledLabelTextContainer>
                        </Label>
                      </li>
                    ))}
                  </StyledCheckboxesList>
                </Col>
                <Col span={12}>{/* <DatePicker /> */}</Col>
              </Row>
            </StyledFormContainer>
          </Col>
          <Col span={8}>
            <Card>1</Card>
            <StyledInfoContainer>
              <StyledAddressContainer>
                <Enumeration
                  heading="Our Address"
                  items={['Luxe Animal Spa 80 Smithe St Vancouver, BC V6B 1M7']}
                />
              </StyledAddressContainer>

              <Enumeration
                heading="Hours of Operation"
                items={[
                  'Sunday - Closed',
                  'Monday 10 a.m.-5:30 p.m.',
                  'Tuesday 10 a.m.-5:30 p.m.',
                  'Wednesday 10 a.m.-5:30 p.m.',
                  'Thursday 10 a.m.-5:30 p.m.',
                  'Friday 10 a.m.-5:30 p.m.',
                  'Saturday 10 a.m.-5:30 p.m.',
                ]}
              />
            </StyledInfoContainer>
          </Col>

          <Col span={16}>
            <StyledTextAreaContainer>
              <TextArea
                height={80}
                placeholder="Any special requests for your pet(s)..."
              />
            </StyledTextAreaContainer>
          </Col>

          <Col span={16}>
            <Payment />
          </Col>
        </Row>
      </StyledForm>
    </StyledContent>
  </StyledContainer>
);
