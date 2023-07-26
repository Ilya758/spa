import { StyledCol } from './Col.styled';

export type ColProps = {
  /**
   * Content inside of a column
   */
  children?: React.ReactNode;

  /**
   * Number of cells you want to fill, max == 24
   */
  span: number;
};

type InternalColProps = {
  $gapsCount: number;
  $colsCount: number;
  $gutter: number;
};

export const Col = (props: ColProps) => {
  const { $colsCount, $gapsCount, $gutter, span, children } =
    props as ColProps & InternalColProps;

  return (
    <StyledCol
      $colsCount={$colsCount}
      $gapsCount={$gapsCount}
      $gutter={$gutter}
      $span={span}
    >
      {children}
    </StyledCol>
  );
};
