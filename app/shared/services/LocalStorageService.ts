export class LocalStorageService {
  public static setItem = (
    key: string,
    value: Partial<Record<string, string>>
  ) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
}
