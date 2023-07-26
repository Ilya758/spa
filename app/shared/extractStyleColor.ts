/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/indent */
import { DefaultTheme, ExecutionContext } from 'styled-components';

export const extractStyleColor =
  (color: keyof DefaultTheme['colors']) =>
  ({ theme: { colors } }: ExecutionContext): string =>
    colors[color];
