export interface FetchResponse<T> {
  data: {
    [K in 'dogs']: {
      status: 'fullfilled' | 'rejected';
      reason: string | null;
      value: T | null;
    };
  };
}
