import { StyledLabel } from './Label.styled';

export type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

/**
 * Label for interactive elements
 */
export const Label = (props: LabelProps) => {
  return <StyledLabel {...props} />;
};
