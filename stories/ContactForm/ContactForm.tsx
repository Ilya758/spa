import {
  StyledButtonContainer,
  StyledControlContainer,
  StyledForm,
} from './ContactForm.styled';
import React from 'react';
import { Row } from '../Grid/Row';
import { Col } from '../Grid/Col';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Button } from '../Button';
import { Text } from '../Text';

/**
 * Form for "contact-us" page
 */
export const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Row gutter={78}>
        <Col span={12}>
          <StyledControlContainer>
            <Input placeholder="First Name" />
          </StyledControlContainer>
        </Col>
        <Col span={12}>
          <StyledControlContainer>
            <Input placeholder="Last name" />
          </StyledControlContainer>
        </Col>
        <Col span={12}>
          <StyledControlContainer>
            <Input type="email" placeholder="Email" />
          </StyledControlContainer>
        </Col>
        <Col span={12}>
          <StyledControlContainer>
            <Input placeholder="Phone number" />
          </StyledControlContainer>
        </Col>
        <Col span={24}>
          <StyledControlContainer>
            <TextArea placeholder="Your message goes here ..." />
          </StyledControlContainer>
        </Col>
      </Row>

      <StyledButtonContainer>
        <Button type="submit">
          <Text>Submit</Text>
        </Button>
      </StyledButtonContainer>
    </StyledForm>
  );
};
