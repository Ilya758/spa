import { ObjectSchema } from 'yup';
import { InferredFromGeneric } from '../../models';

export type BaseForm<T> = {
  isSubmitting: boolean;
  isSuccess: boolean;
  errors: InferredFromGeneric<T>;
  fields: InferredFromGeneric<T>;
};

export type FormSubmitConfig<T> = {
  fields: InferredFromGeneric<T>;
  validationSchema: ObjectSchema<InferredFromGeneric<T>>;
  onSuccess?: () => void;
};
