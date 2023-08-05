import { Text } from '@/stories/Text';
import { Row } from '@/stories/Grid/Row';
import { Col } from '@/stories/Grid/Col';
import { Input } from '@/stories/Input';
import { Checkbox } from '@/stories/Checkbox';
import { Label } from '@/stories/Label/Label';
import { TextArea } from '@/stories/TextArea';
import { Card } from '@/stories/Card/Card';
import { Enumeration } from '@/stories/Enumeration';
import { DatePicker } from '@/stories/DatePicker';
import { useForm } from '@/app/shared/hooks';
import { Button } from '@/stories/Button';
import { Modal } from '@/stories/Modal/Modal';
import { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import {
  StyledAddressContainer,
  StyledButtonContainer,
  StyledCheckboxContainer,
  StyledCheckboxesList,
  StyledContainer,
  StyledContent,
  StyledDateTimeText,
  StyledError,
  StyledForm,
  StyledFormContainer,
  StyledHeading,
  StyledInfoContainer,
  StyledInputContainer,
  StyledLabelTextContainer,
  StyledTextAreaContainer,
} from './BookForm.styled';
import { BOOK_FORM_SCHEMA, BOOK_TIMES, INITIAL_FORM_STATE } from './constants';
import { BookFormResult } from './BookFormResult';
import { IBookFormSchema } from './models';

export const BookForm = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    errors,
    fields,
    handleChangeValue,
    handleToggleCheckbox,
    handleSubmitForm,
  } = useForm<IBookFormSchema>(INITIAL_FORM_STATE);
  const { email, firstName, lastName, phone, message } = fields;

  const handleToggleCheckboxTime =
    (name: keyof IBookFormSchema, id: string) => (): void => {
      handleToggleCheckbox(name, id);
    };

  const handleChangeInputValue =
    (key: keyof IBookFormSchema) =>
    ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      handleChangeValue(key, value);
    };

  const handleChangeDatePickerDate = (date: string): void => {
    handleChangeValue('date', date);
  };

  const handleToggleModal = (show: boolean) => (): void => {
    setShowModal(show);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmitForm({
      validationSchema: BOOK_FORM_SCHEMA,
      fields,
      onSuccess: handleToggleModal(true),
    });
  };

  return (
    <StyledContainer>
      <Modal showModal={showModal} onClose={handleToggleModal(false)}>
        <BookFormResult onConfirm={handleToggleModal(false)} items={fields} />
      </Modal>
      <StyledContent>
        <StyledForm noValidate onSubmit={handleSubmit}>
          <StyledHeading>
            <Text>Enter your information here</Text>
          </StyledHeading>
          <Row gutter={[0, 150]}>
            <Col span={16}>
              <StyledFormContainer>
                <Row gutter={[43, 60]}>
                  <Col span={12}>
                    <StyledInputContainer>
                      <Input
                        data_cy="firstName"
                        error={errors.firstName}
                        name="firstName"
                        onChange={handleChangeInputValue('firstName')}
                        placeholder="First name"
                        value={firstName}
                      />
                    </StyledInputContainer>
                  </Col>
                  <Col span={12}>
                    <StyledInputContainer>
                      <Input
                        data_cy="lastName"
                        error={errors.lastName}
                        name="lastName"
                        onChange={handleChangeInputValue('lastName')}
                        placeholder="Last name"
                        value={lastName}
                      />
                    </StyledInputContainer>
                  </Col>
                  <Col span={12}>
                    <StyledInputContainer>
                      <Input
                        data_cy="email"
                        error={errors.email}
                        name="email"
                        onChange={handleChangeInputValue('email')}
                        type="email"
                        placeholder="Email"
                        value={email}
                      />
                    </StyledInputContainer>
                  </Col>
                  <Col span={12}>
                    <StyledInputContainer>
                      <Input
                        data_cy="phone"
                        error={errors.phone}
                        name="phone"
                        onChange={handleChangeInputValue('phone')}
                        placeholder="Phone number"
                        value={phone}
                      />
                    </StyledInputContainer>
                  </Col>

                  <Col span={12}>
                    <StyledDateTimeText>
                      <Text>Choose a timeslot on Dec. 11th, 2021:</Text>
                    </StyledDateTimeText>

                    <StyledCheckboxesList $error={errors.time}>
                      {BOOK_TIMES.map(({ id, text }) => (
                        <li key={id}>
                          <Label>
                            <StyledCheckboxContainer>
                              <Checkbox
                                onChange={handleToggleCheckboxTime(
                                  'time',
                                  String(id)
                                )}
                                name="time"
                              />
                            </StyledCheckboxContainer>
                            <StyledLabelTextContainer>
                              <Text>{text}</Text>
                            </StyledLabelTextContainer>
                          </Label>
                        </li>
                      ))}
                      {errors.time && (
                        <StyledError>
                          <Text>{errors.time}</Text>
                        </StyledError>
                      )}
                    </StyledCheckboxesList>
                  </Col>
                  <Col span={12}>
                    <DatePicker
                      error={errors.date}
                      onChange={handleChangeDatePickerDate}
                    />
                  </Col>
                </Row>
              </StyledFormContainer>
            </Col>
            <Col span={8}>
              <Card>1</Card>
              <StyledInfoContainer>
                <StyledAddressContainer>
                  <Enumeration
                    heading="Our Address"
                    items={[
                      'Luxe Animal Spa 80 Smithe St Vancouver, BC V6B 1M7',
                    ]}
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
                  error={errors.message}
                  name="message"
                  height={80}
                  onChange={handleChangeInputValue('message')}
                  placeholder="Any special requests for your pet(s)..."
                  value={message}
                />
              </StyledTextAreaContainer>
            </Col>
            <Col span={16}>
              <StyledButtonContainer>
                <PayPalButtons style={{ layout: 'horizontal' }} />
                <Button data_cy="button-submit" type="submit">
                  Book Appointment
                </Button>
              </StyledButtonContainer>
            </Col>
          </Row>
        </StyledForm>
      </StyledContent>
    </StyledContainer>
  );
};
