import { LocalStorageService } from '@/app/shared/services';
import { DatePickerCellType } from './constants';
import { DatePickerCell } from './models';

export const parseDate = (date: Date, withDay = false): string => {
  const locale = JSON.parse(LocalStorageService.getItem('lang') || '"en"');

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  };

  if (withDay) {
    options.day = 'numeric';
  }

  return date.toLocaleDateString(locale, options);
};

const getDateQueues = (firstDay: number, lastDay: number, daysCount = 7) => ({
  startQueue: Array(daysCount).fill(0),
  middleQueue: Array(firstDay + (daysCount - lastDay - 1) > daysCount ? 4 : 3)
    .fill(0)
    .map(() => Array(daysCount).fill(0)),
  endQueue: Array(daysCount).fill(0),
});

const getParticularDate =
  (date: Date) =>
  (expr: number, useNextMonth = false): Date =>
    new Date(date.getFullYear(), date.getMonth() + Number(useNextMonth), expr);

export const createDatePickerGrid = (date: Date): DatePickerCell[][] => {
  const getDayByDate = getParticularDate(date);
  const firstDay = getDayByDate(1).getDay();
  const lastDay = getDayByDate(0, true).getDay();
  const { endQueue, middleQueue, startQueue } = getDateQueues(
    firstDay,
    lastDay
  );
  let k = 0;
  let daysCount = 1;

  for (let i = 0; i < firstDay; i += 1, k += 1) {
    startQueue[i] = {
      type: DatePickerCellType.Prev,
      value: getDayByDate(1 - firstDay + i).getDate(),
    };
  }

  for (let i = k; i < startQueue.length; i += 1, daysCount += 1) {
    startQueue[i] = {
      type: DatePickerCellType.Cur,
      value: getDayByDate(i - k + 1).getDate(),
    };
  }

  for (let row = 0; row < middleQueue.length; row += 1) {
    for (let col = 0; col < middleQueue[0].length; col += 1) {
      middleQueue[row][col] = {
        type: DatePickerCellType.Cur,
        value: daysCount++,
      };
    }
  }

  k = 0;

  for (let i = 0; i <= lastDay; i += 1, k += 1) {
    endQueue[i] = {
      type: DatePickerCellType.Cur,
      value: daysCount++,
    };
  }

  for (let i = k; i < endQueue.length; i += 1) {
    endQueue[i] = {
      type: DatePickerCellType.Next,
      value: i - k + 1,
    };
  }

  return [startQueue].concat(middleQueue, [endQueue]);
};
