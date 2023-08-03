import { DefaultTheme, ExecutionContext } from 'styled-components';

export const extractStyleColor = (color: keyof DefaultTheme['colors']) => ({ theme: { colors } }: ExecutionContext): string => colors[color];
