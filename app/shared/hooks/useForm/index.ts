/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { BaseForm, FormSubmitConfig } from './models';
import * as yup from 'yup';
import { parseErrors } from '@/app/shared/utils';

export const useForm = <T>(initialState: BaseForm<T>) => {
  const [state, setState] = useState(initialState);
  const { isSuccess } = state;

  const handleSetError = (key: keyof T, value: string) => {
    setState(prevState => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [key]: value,
      },
    }));
  };

  const handleChangeValue = (key: keyof T, value: string) => {
    if (state.errors[key as keyof typeof state.errors]) {
      handleSetError(key, '');
    }

    setState(prevState => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [key]: value,
      },
    }));
  };

  const handleToggleCheckbox = (name: keyof T, id: string) => {
    if (state.errors[name]) {
      handleSetError(name, '');
    }

    const checkedCheckboxes = state.fields[
      name as keyof typeof state.fields
    ] as string;

    setState(prevState => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [name]: checkedCheckboxes.includes(id)
          ? checkedCheckboxes
              .split('')
              .filter(checkbox => checkbox !== id)
              .join('')
          : checkedCheckboxes + id,
      },
    }));
  };

  const handleToggleIsSubmitting = () => {
    setState(prevState => ({
      ...prevState,
      isSubmitting: !prevState.isSubmitting,
    }));
  };

  const handleChangeIsSuccess = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      isSuccess: value,
    }));
  };

  const handleSubmitForm = async <T>({
    fields,
    validationSchema,
    onSuccess,
  }: FormSubmitConfig<T>): Promise<void> => {
    handleToggleIsSubmitting();

    try {
      await validationSchema.validate(fields, { abortEarly: false });
      handleChangeIsSuccess(true);

      if (onSuccess) onSuccess();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors = parseErrors<T>(error.errors) as Record<
          keyof BaseForm<T>['errors'],
          string
        >;

        Object.entries(errors).map(([key, value]) => {
          handleSetError(<Extract<keyof T, never>>key, <string>value);
        });
      } else {
        alert('Error while send form');
      }
    }

    handleToggleIsSubmitting();
  };

  useEffect(() => {
    if (isSuccess) {
      alert('Form is submitted');

      setTimeout(() => {
        handleChangeIsSuccess(false);
      }, 2000);
    }
  }, [isSuccess]);

  return {
    ...state,
    handleChangeValue,
    handleToggleCheckbox,
    handleSubmitForm,
  };
};
