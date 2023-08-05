import { useEffect, useState } from 'react';
import { useDebounce } from '../useDebounce';
import { IDogInfo } from '@/app/shared/models';
import { getData } from './helpers';
import { INITIAL_STATE } from './constants';

export const useDogInfoPage = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const debouncedValue = useDebounce(state.searchValue, 300);

  const setSearchValue = (searchValue: string): void => {
    setState(prevState => ({
      ...prevState,
      searchValue,
    }));
  };

  const toggleIsLoading = (): void => {
    setState(prevState => ({
      ...prevState,
      isLoading: !prevState.isLoading,
    }));
  };

  useEffect(() => {
    (async () => {
      if (debouncedValue.length >= 3) {
        toggleIsLoading();
        const result = await getData<IDogInfo | string>(debouncedValue);
        const isError = typeof result === 'string';

        setState(prevState => ({
          ...prevState,
          result: isError ? null : result,
          error: isError ? result : '',
        }));
        toggleIsLoading();
      }
    })();
  }, [debouncedValue]);

  return {
    ...state,
    setSearchValue,
    toggleIsLoading,
  };
};
