export class LocalStorageService {
  public static setItem = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  public static getItem = <T>(key: string): T | string =>
    localStorage.getItem(key) ?? '';
}
