import { useState } from 'react';
import { DatePickerState } from './models';
import { INITIAL_STATE } from './constants';

export const useDatePicker = () => {
  const [state, setState] = useState<DatePickerState>(INITIAL_STATE);

  const updateState = (partialState: Partial<DatePickerState>) => {
    setState(prevState => ({
      ...prevState,
      ...partialState,
    }));
  };

  return {
    ...state,
    updateState,
  };
};
