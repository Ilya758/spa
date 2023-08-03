import * as yup from 'yup';
import { BaseForm } from '@/app/shared/hooks/useForm/models';
import { IBookFormSchema, IBookTime } from './models';

export const BOOK_TIMES: IBookTime[] = [
  {
    id: 1,
    text: '11 am - 12 pm',
  },
  {
    id: 2,
    text: '12 pm - 1 pm',
  },
  {
    id: 3,
    text: '1 pm - 2 pm',
  },
  {
    id: 4,
    text: '3 pm - 4 pm',
  },
  {
    id: 5,
    text: '4 pm - 5pm',
  },
];

export const BOOK_FORM_SCHEMA = yup.object({
  firstName: yup
    .string()
    .required()
    .min(3, 'FirstName must be at least 3 symbols'),
  lastName: yup.string().optional(),
  email: yup
    .string()
    .required('Email is required')
    .email('Email must be valid'),
  time: yup.string().required('Time is required'),
  date: yup.string().required('Date is required'),
  phone: yup
    .string()
    .required()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      {
        message: 'Phone is not correct',
      }
    ),
  message: yup
    .string()
    .required()
    .min(10, 'Please provide a message with at least 10 symbols'),
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
