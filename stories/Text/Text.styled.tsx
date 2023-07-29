import { styled } from 'styled-components';

type StyledTextProps = {
  $color?: string;
};

export const StyledH1 = styled.h1`
  font-size: 70px;
  font-weight: 400;
  line-height: 94px;
  letter-spacing: 0em;
`;

export const StyledH2 = styled.h2`
  font-size: 60px;
  font-weight: 400;
  line-height: 81px;
  letter-spacing: 0em;
`;

export const StyledH3 = styled.h3`
  font-size: 45px;
  font-weight: 400;
  line-height: 61px;
  letter-spacing: 0em;
`;

export const StyledH4 = styled.h4`
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
`;

export const StyledH5 = styled.h5`
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
`;

export const StyledSubheading = styled.h3`
  font-size: 45px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
`;

export const StyledText = styled.p<StyledTextProps>`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${({ theme: { colors }, $color }) =>
    $color ? colors[$color as keyof typeof colors] : 'initial'};
`;
