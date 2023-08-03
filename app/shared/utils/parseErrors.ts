import { InferredFromGeneric } from '../models';

export enum FormErrorKey {
  Email = 'email',
  FirstName = 'firstName',
  Phone = 'phone',
  Message = 'message',
  Time = 'time',
  Date = 'date',
}
const capitalize = (word: string) => `${word[0].toLowerCase()}${word.slice(1)}`;

export const parseErrors = <T>(errors: string[]) => {
  const regex = Object.values(FormErrorKey).join('|');
  const errorMap = {} as InferredFromGeneric<T>;

  for (let i = 0; i < errors.length; i += 1) {
    const errorMessage = errors[i];
    const match = errorMessage.match(new RegExp(regex, 'gi'));

    if (match) {
      errorMap[capitalize(match[0]) as keyof T] = errorMessage as T[keyof T];
    }
  }

  return errorMap;
};
