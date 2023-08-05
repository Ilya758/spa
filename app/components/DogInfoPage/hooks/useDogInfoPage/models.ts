import { IDogInfo } from '@/app/shared/models';

export interface DogInfoPageState {
  error: string;
  isLoading: boolean;
  result: IDogInfo | null;
  searchValue: string;
}
