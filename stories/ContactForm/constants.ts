import { BaseForm } from '@/app/shared/hooks/useForm/models';
import * as yup from 'yup';
import { IContactFormSchema } from './models';

export const CONTACT_FORM_SCHEMA = yup.object({
  firstName: yup.string().required().min(3, 'FirstName'),
  lastName: yup.string().optional(),
  email: yup.string().required('EmailRequired').email('EmailIsNotValid'),
  phone: yup
    .string()
    .required()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      {
        message: 'Phone',
      }
    ),
  message: yup.string().required().min(10, 'Message'),
});

export const INITIAL_FORM_STATE: BaseForm<IContactFormSchema> = {
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  },
  fields: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  },
  isSubmitting: false,
  isSuccess: false,
};
