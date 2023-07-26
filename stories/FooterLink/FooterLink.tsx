import Link, { LinkProps } from 'next/link';
import React from 'react';
import { StyledFooterLink } from './FooterLink.styled';
import { DefaultTheme } from 'styled-components';
import cn from 'classnames';
import localFont from 'next/dist/compiled/@next/font/dist/local';
import { Text } from '../Text';

export type FooterLinkProps = LinkProps & {
  /**
   * External className you want provide to
   */
  className?: string;

  /**
   * Custom Element/text as a label
   */
  children?: React.ReactNode;

  /**
   * App color pallette
   */
  color: keyof DefaultTheme['colors'];

  /**
   * App font you can apply to
   */
  font?: ReturnType<typeof localFont>;
};

/**
 * Button-link component. After clicking change a route segment.
 */
export const FooterLink = ({
  className,
  color,
  font,
  ...props
}: FooterLinkProps) => {
  return (
    <StyledFooterLink
      className={cn(className, font && font.className)}
      color={color}
    >
      <Link {...props}>
        <Text> {props.children} </Text>
      </Link>
    </StyledFooterLink>
  );
};
