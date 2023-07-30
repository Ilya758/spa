/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { TBaseForm } from './models';

export const useForm = <T extends TBaseForm>(initialState: T) => {
  type TForm = typeof initialState;
  const [state, setState] = useState(initialState);
  const { isSuccess } = state;

  const handleSetError = (key: keyof TForm['errors'], value: string) => {
    setState(prevState => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [key]: value,
      },
    }));
  };

  const handleChangeValue = (key: keyof TForm['fields'], value: string) => {
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
    handleSetError,
    handleChangeIsSuccess,
    handleToggleIsSubmitting,
  };
};
