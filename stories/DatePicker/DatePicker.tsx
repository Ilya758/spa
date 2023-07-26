import {
  StyledDatePaginator,
  StyledDatePickerCell,
  StyledDatePickerContainer,
  StyledDatePickerControls,
  StyledDatePickerTable,
} from './DatePicker.styled';
import { Text } from '../Text';
import { useState } from 'react';
import { IconButton } from '../IconButton';
import Prev from '@/public/svg/prev.svg';
import Next from '@/public/svg/next.svg';
import { createDatePickerGrid, parseDate } from './utils';
import { DAYS, DatePickerCellType } from './constants';

export type DatePickerProps = {};

/**
 * Basic datepicker for choosing date
 */
export const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const handleChangeDate = (type: DatePickerCellType) => (): void => {
    if (type !== DatePickerCellType.Cur) {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() + type);
      setDate(newDate);
    }
  };

  return (
    <StyledDatePickerContainer>
      <StyledDatePickerControls>
        <Text>Select dates</Text>

        <StyledDatePaginator>
          <IconButton
            onClick={handleChangeDate(DatePickerCellType.Prev)}
            icon={<Prev />}
          />
          <Text>{parseDate(date)}</Text>
          <IconButton
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
              {week.map(({ type, value }) => (
                <StyledDatePickerCell $type={type}>
                  <div onClick={handleChangeDate(type)}>{value}</div>
                </StyledDatePickerCell>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledDatePickerTable>
    </StyledDatePickerContainer>
  );
};
