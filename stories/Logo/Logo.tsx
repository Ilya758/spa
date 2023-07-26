import React from 'react';
import LogoIcon from '@/public/svg/logo.svg';

export type LogoProps = React.SVGProps<SVGElement>;

/**
 * Primary Logo-svg component
 */

export const Logo = (logoProps: LogoProps) => <LogoIcon {...logoProps} />;
