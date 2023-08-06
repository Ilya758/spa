import { sendForm } from '@emailjs/browser';

export class EmailService {
  static sendEmail = async (
    form: HTMLFormElement,
    template: 'registration' | 'contact_form'
  ): Promise<void> => {
    const formTemplate = {
      registration: process.env.NEXT_PUBLIC_EMAIL_REGISTRATION_TEMPLATE,
      contact_form: process.env.NEXT_PUBLIC_CONTACT_US_FORM_TEMPLATE,
    }[template];

    await sendForm(
      process.env.NEXT_PUBLIC_EMAIL_REGISTRATION_SERVICE,
      formTemplate,
      form,
      process.env.NEXT_PUBLIC_API_KEY
    );
  };
}
