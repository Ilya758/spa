import { css, styled } from 'styled-components';
import { DatePickerCellType } from './constants';

export const StyledDatePickerContainer = styled.div<{
  $error?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 350px;
  user-select: none;
  border-radius: 4px;
  padding: 8px;
  transition: 0.3s;

  ${({ $error }) =>
    $error &&
    css`
      box-shadow: 0 0 4px 2px #ff0000a8;
    `}
`;

export const StyledError = styled.div`
  position: absolute;
  bottom: -25px;
  left: 14px;

  p {
    color: red;
    font-size: 14px;
  }
`;

export const StyledDatePickerControls = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  margin-bottom: 20px;
`;

export const StyledDatePaginator = styled.div`
  display: flex;
  column-gap: 15px;
`;

export const StyledDatePickerTable = styled.table`
  table-layout: auto;
  width: 330px;
  height: 170px;

  thead {
    tr {
      th {
        color: ${({
          theme: {
            colors: { pink },
          },
        }) => pink};
      }
    }
  }

  tbody {
    tr {
      margin-bottom: 4px;
    }
  }
`;

type StyledDatePickerCellProps = {
  $type: DatePickerCellType;
  $selected: boolean;
};

export const StyledDatePickerCell = styled.td<StyledDatePickerCellProps>`
  text-align: center;

  div {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;

    color: ${({
      $type,
      theme: {
        colors: { secondary },
      },
    }) => ($type !== DatePickerCellType.Cur ? secondary : 'initial')};

    &:hover {
      background: ${({
        theme: {
          colors: { pink },
        },
      }) => pink};
      border-radius: 4px;
      opacity: 0.7;
    }

    &:active {
      transform: translate(0, 2px) scale(1.1);
    }

    ${({ $selected }) =>
      $selected &&
      css`
        background: ${({
          theme: {
            colors: { pink },
          },
        }) => pink};
        border-radius: 4px;
        opacity: 0.7;
      `}
  }
`;
