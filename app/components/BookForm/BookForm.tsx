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
  StyledMapContainer,
  StyledTextAreaContainer,
} from './BookForm.styled';
import { BOOK_FORM_SCHEMA, BOOK_TIMES, INITIAL_FORM_STATE } from './constants';
import { BookFormResult } from './BookFormResult';
import { IBookFormSchema } from './models';
import { useTranslations } from 'next-intl';
import { useMap } from './hooks/useMap';

export const BookForm = () => {
  const t = useTranslations('Book.Form');
  const errorTranslations = useTranslations('Common.Inputs.Errors');
  const buttonTranslations = useTranslations('Common.Buttons.Text');
  const checkboxesTranslations = useTranslations('Book.Form.Checkboxes.Pairs');
  const inputTranslations = useTranslations('Common.Inputs.Placeholders');
  const addressTranslations = useTranslations('Book.Form.Enumeration.Address');
  const operationTranslations = useTranslations(
    'Book.Form.Enumeration.Operation'
  );
  const [showModal, setShowModal] = useState(false);
  const {
    errors,
    fields,
    handleChangeValue,
    handleToggleCheckbox,
    handleSubmitForm,
  } = useForm<IBookFormSchema>(INITIAL_FORM_STATE);
  const { email, firstName, lastName, phone, message } = fields;
  const { mapContainer } = useMap();

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
            <Text>{t('Heading')}</Text>
          </StyledHeading>
          <Row gutter={[0, 150]}>
            <Col span={16}>
              <StyledFormContainer>
                <Row gutter={[43, 60]}>
                  <Col span={12}>
                    <StyledInputContainer>
                      <Input
                        data_cy="firstName"
                        error={
                          errors.firstName &&
                          errorTranslations(errors.firstName)
                        }
                        name="firstName"
                        onChange={handleChangeInputValue('firstName')}
                        placeholder={inputTranslations('FirstName')}
                        value={firstName}
                      />
                    </StyledInputContainer>
                  </Col>
                  <Col span={12}>
                    <StyledInputContainer>
                      <Input
                        data_cy="lastName"
                        error={
                          errors.lastName && errorTranslations(errors.lastName)
                        }
                        name="lastName"
                        onChange={handleChangeInputValue('lastName')}
                        placeholder={inputTranslations('LastName')}
                        value={lastName}
                      />
                    </StyledInputContainer>
                  </Col>
                  <Col span={12}>
                    <StyledInputContainer>
                      <Input
                        data_cy="email"
                        error={errors.email && errorTranslations(errors.email)}
                        name="email"
                        onChange={handleChangeInputValue('email')}
                        type="email"
                        placeholder={inputTranslations('Email')}
                        value={email}
                      />
                    </StyledInputContainer>
                  </Col>
                  <Col span={12}>
                    <StyledInputContainer>
                      <Input
                        data_cy="phone"
                        error={errors.phone && errorTranslations(errors.phone)}
                        name="phone"
                        onChange={handleChangeInputValue('phone')}
                        placeholder={inputTranslations('Phone')}
                        value={phone}
                      />
                    </StyledInputContainer>
                  </Col>

                  <Col span={12}>
                    <StyledDateTimeText>
                      <Text>{t('Checkboxes.Heading')}</Text>
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
                              <Text>{checkboxesTranslations(text)}</Text>
                            </StyledLabelTextContainer>
                          </Label>
                        </li>
                      ))}
                      {errors.time && (
                        <StyledError>
                          <Text>{errorTranslations(errors.time)}</Text>
                        </StyledError>
                      )}
                    </StyledCheckboxesList>
                  </Col>
                  <Col span={12}>
                    <DatePicker
                      error={errors.date && errorTranslations(errors.date)}
                      onChange={handleChangeDatePickerDate}
                    />
                  </Col>
                </Row>
              </StyledFormContainer>
            </Col>
            <Col span={8}>
              <Card>
                <StyledMapContainer ref={mapContainer} />
              </Card>
              <StyledInfoContainer>
                <StyledAddressContainer>
                  <Enumeration
                    heading={addressTranslations('Heading')}
                    items={Array(1)
                      .fill(null)
                      .map((_, index) =>
                        addressTranslations(`Items.${index + 1}`)
                      )}
                  />
                </StyledAddressContainer>

                <Enumeration
                  heading={operationTranslations('Heading')}
                  items={Array(7)
                    .fill(null)
                    .map((_, index) =>
                      operationTranslations(`Items.${index + 1}`)
                    )}
                />
              </StyledInfoContainer>
            </Col>

            <Col span={16}>
              <StyledTextAreaContainer>
                <TextArea
                  error={errors.message && errorTranslations(errors.message)}
                  name="message"
                  height={80}
                  onChange={handleChangeInputValue('message')}
                  placeholder={inputTranslations('TextAreaBook')}
                  value={message}
                />
              </StyledTextAreaContainer>
            </Col>
            <Col span={16}>
              <StyledButtonContainer>
                <PayPalButtons style={{ layout: 'horizontal' }} />
                <Button data_cy="button-submit" type="submit">
                  {buttonTranslations('Book')}
                </Button>
              </StyledButtonContainer>
            </Col>
          </Row>
        </StyledForm>
      </StyledContent>
    </StyledContainer>
  );
};
