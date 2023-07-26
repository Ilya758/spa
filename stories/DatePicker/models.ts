import { DatePickerCellType } from './constants';

export interface DatePickerCell {
  /**
   * The particular day
   */
  value: number;

  /**
   * Cell type according to current month
   */
  type: DatePickerCellType;
}
