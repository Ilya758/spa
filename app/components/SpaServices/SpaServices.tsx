import { Text } from '@/stories/Text';
import { Divider } from '@/stories/Divider';
import { InfoBlock } from '@/stories/InfoBlock';
import {
  StyledContainer,
  StyledContent,
  StyledHeading,
  StyledList,
} from './SpaServices.styled';
import { SPA_SERVICES } from './constants';
import { useTranslations } from 'next-intl';

export const SpaServices = () => {
  const t = useTranslations('SpaServices');

  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeading>
          <Text>{t('Heading')}</Text>
        </StyledHeading>

        <Divider width={737} />
        <StyledList>
          {SPA_SERVICES.map(block => (
            <li key={block.heading}>
              <InfoBlock {...block} />
            </li>
          ))}
        </StyledList>
        <Divider width={737} />
      </StyledContent>
    </StyledContainer>
  );
};
