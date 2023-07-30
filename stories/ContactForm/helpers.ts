import { FormErrorKey } from './constants';

const capitalize = (word: string) => `${word[0].toLowerCase()}${word.slice(1)}`;

export const parseErrors = (errors: string[]) => {
  const regex = Object.values(FormErrorKey).join('|');
  const errorMap: Record<string, string> = {};

  for (const errorMessage of errors) {
    const match = errorMessage.match(new RegExp(regex, 'gi'));

    if (match) {
      errorMap[capitalize(match[0])] = errorMessage;
    }
  }

  return errorMap;
};
