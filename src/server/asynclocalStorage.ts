import {
  LOCAL_STORAGE_LANG_KEY,
  LOCAL_STORAGE_MARKERLIST_KEY,
} from "@src/constants";
class Backend {
  private static readonly ASYNC_DELAY = 0;

  getItem(key: string): Promise<string | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const value = localStorage.getItem(key);
        resolve(value);
      }, Backend.ASYNC_DELAY);
    });
  }

  setItem(key: string, value: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(key, value);
        resolve();
      }, Backend.ASYNC_DELAY);
    });
  }

  removeItem(key: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem(key);
        resolve();
      }, Backend.ASYNC_DELAY);
    });
  }
}

export const asyncLocalStorage = new Backend();

export const getMarkers = async () => {
  return await asyncLocalStorage.getItem(LOCAL_STORAGE_MARKERLIST_KEY);
};

export const getLanguage = async () => {
  return await asyncLocalStorage.getItem(LOCAL_STORAGE_LANG_KEY);
};
