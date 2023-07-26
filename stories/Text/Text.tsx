import React from 'react';
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledSubheading,
  StyledText,
} from './Text.styled';
import { cinzelFont, cormorantFont, tangerineFont } from '@/app/shared/fonts';
import cn from 'classnames';
import { DefaultTheme } from 'styled-components';

export type TextProps = {
  /**
   * ClassName you want apply to
   */
  className?: string;

  /**
   * Text content you want render to
   */
  children?: React.ReactNode;

  /**
   * App color pallette
   */
  color?: string;
};

/**
 *
 * @param Component Styled-Component wrapper
 * @param props TextProps type we're using
 * @returns Simple HOC, that applies basic styles for styled-component wrapper
 */
const withFont = (
  Component: React.FC<TextProps>,
  { children, className }: TextProps
) => (
  <Component className={cn(className, cinzelFont.className)}>
    {children}
  </Component>
);

const H1 = (props: TextProps) => withFont(StyledH1, props);

const H2 = (props: TextProps) => withFont(StyledH2, props);

const H3 = (props: TextProps) => withFont(StyledH3, props);

const H4 = (props: TextProps) => withFont(StyledH4, props);

const H5 = (props: TextProps) => withFont(StyledH5, props);

/**
 * Text-component for all types of information
 */
export const Text = ({ children, color }: Omit<TextProps, 'font'>) => (
  <StyledText className={cormorantFont.className} $color={color}>
    {children}
  </StyledText>
);

export const Subheading = ({ children }: TextProps) => (
  <StyledSubheading className={tangerineFont.className}>
    {children}
  </StyledSubheading>
);

Text.H1 = H1;
Text.H2 = H2;
Text.H3 = H3;
Text.H4 = H4;
Text.H5 = H5;
Text.Subheading = Subheading;
