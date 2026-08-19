type SafeStorage = {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
};

function createSafeStorage(pick: () => Storage): SafeStorage {
  function store(): Storage | null {
    if (typeof window === 'undefined') return null;
    try {
      return pick();
    } catch {
      return null;
    }
  }

  return {
    get(key) {
      try {
        return store()?.getItem(key) ?? null;
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        store()?.setItem(key, value);
      } catch {}
    },
    remove(key) {
      try {
        store()?.removeItem(key);
      } catch {}
    },
  };
}

export const localStore = createSafeStorage(() => window.localStorage);
export const sessionStore = createSafeStorage(() => window.sessionStorage);
