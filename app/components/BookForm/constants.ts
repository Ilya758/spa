import * as yup from 'yup';
import { BaseForm } from '@/app/shared/hooks/useForm/models';
import { IBookFormSchema, IBookTime } from './models';

export const BOOK_TIMES: IBookTime[] = [
  {
    id: 1,
    text: '1',
  },
  {
    id: 2,
    text: '2',
  },
  {
    id: 3,
    text: '3',
  },
  {
    id: 4,
    text: '4',
  },
  {
    id: 5,
    text: '5',
  },
];

export const BOOK_FORM_SCHEMA = yup.object({
  firstName: yup.string().required().min(3, 'FirstName'),
  lastName: yup.string().optional(),
  email: yup.string().required('EmailRequired').email('EmailIsNotValid'),
  time: yup.string().required('Time'),
  date: yup.string().required('Date'),
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

export const INITIAL_FORM_STATE: BaseForm<IBookFormSchema> = {
  errors: {
    date: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    time: '',
  },
  fields: {
    date: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    time: '',
  },
  isSubmitting: false,
  isSuccess: false,
};
