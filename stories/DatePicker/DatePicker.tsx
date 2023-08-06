import {
  StyledDatePaginator,
  StyledDatePickerCell,
  StyledDatePickerContainer,
  StyledDatePickerControls,
  StyledDatePickerTable,
  StyledError,
} from './DatePicker.styled';
import { Text } from '../Text';
import { IconButton } from '../IconButton';
import Prev from '@/public/svg/prev.svg';
import Next from '@/public/svg/next.svg';
import { createDatePickerGrid, parseDate } from './utils';
import { DAYS, DatePickerCellType } from './constants';
import { useDatePicker } from './hooks/useDatePicker';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

export type DatePickerProps = {
  /**
   * Error, representing current state of a control
   */
  error?: string;

  /**
   * Optional onChange event-handler
   */
  onChange?: (date: string) => void;
};

/**
 * Basic datepicker for choosing date
 */
export const DatePicker = ({ error, onChange }: DatePickerProps) => {
  const { date, selectedDay, updateState } = useDatePicker();
  const t = useTranslations('DatePicker');

  const handleChangeDate =
    (type: DatePickerCellType, value = 0) =>
    (): void => {
      const newDate = new Date(date);

      if (type === DatePickerCellType.Cur) {
        if (onChange) {
          newDate.setDate(value);

          updateState({
            date: newDate,
            selectedDay: value,
          });

          onChange(parseDate(newDate, true));
        }
      } else {
        newDate.setMonth(newDate.getMonth() + type);

        updateState({
          date: newDate,
          selectedDay: 0,
        });

        if (onChange) onChange('');
      }
    };

  return (
    <StyledDatePickerContainer $error={error}>
      <StyledDatePickerControls>
        <Text>{t('Heading')}</Text>

        <StyledDatePaginator>
          <IconButton
            data_cy="button-prev"
            onClick={handleChangeDate(DatePickerCellType.Prev)}
            icon={<Prev />}
          />
          <Text>{parseDate(date)}</Text>
          <IconButton
            data_cy="button-next"
            onClick={handleChangeDate(DatePickerCellType.Next)}
            icon={<Next />}
          />
        </StyledDatePaginator>
      </StyledDatePickerControls>

      <StyledDatePickerTable>
        <thead>
          <tr>
            {DAYS.map((day, index) => (
              <th key={`${day}-${index}`}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {createDatePickerGrid(date).map((week, index) => (
            <tr key={week.join(',') + index}>
              {week.map(({ type, value }, ndx) => (
                <StyledDatePickerCell
                  key={week.join(',') + index + ndx}
                  $selected={
                    selectedDay === value && type === DatePickerCellType.Cur
                  }
                  $type={type}
                >
                  <div onClick={handleChangeDate(type, value)}>{value}</div>
                </StyledDatePickerCell>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledDatePickerTable>

      {error && (
        <StyledError>
          <Text>{error}</Text>
        </StyledError>
      )}
    </StyledDatePickerContainer>
  );
};
