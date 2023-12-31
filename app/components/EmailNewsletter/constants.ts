import { BaseForm } from '@/app/shared/hooks/useForm/models';
import * as yup from 'yup';
import { IEmailNewsletterSchema } from './models';

export const EMAIL_SCHEMA = yup.object({
  email: yup.string().required('Required').email('EmailIsNotValid'),
});

export const INITIAL_FORM_STATE: BaseForm<IEmailNewsletterSchema> = {
  errors: {
    email: '',
  },
  fields: {
    email: '',
  },
  isSubmitting: false,
  isSuccess: false,
};
