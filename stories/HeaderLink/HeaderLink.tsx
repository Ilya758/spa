import Link, { LinkProps } from 'next/link';
import React from 'react';
import { StyledHeaderLink } from './HeaderLink.styled';
import { DefaultTheme } from 'styled-components';
import cn from 'classnames';
import localFont from 'next/dist/compiled/@next/font/dist/local';

export type HeaderLinkProps = LinkProps & {
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
export const HeaderLink = ({
  className,
  color,
  font,
  ...props
}: HeaderLinkProps) => {
  return (
    <StyledHeaderLink
      className={cn(className, font && font.className)}
      color={color}
    >
      <Link {...props} />
    </StyledHeaderLink>
  );
};
