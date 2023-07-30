export type TBaseForm = {
  isSubmitting: boolean;
  isSuccess: boolean;
  errors: Record<string, string>;
  fields: Record<string, string>;
};
