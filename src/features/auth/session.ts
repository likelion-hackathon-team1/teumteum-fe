import { localStore } from '@/shared/lib/storage';

const AUTH_KEY = 'tt-auth';
const ONBOARDED_KEY = 'tt-onboarded';

export function isLoggedIn() {
  return localStore.get(AUTH_KEY) === '1';
}

export function setLoggedIn() {
  localStore.set(AUTH_KEY, '1');
}

export function isOnboarded() {
  return localStore.get(ONBOARDED_KEY) === '1';
}

export function setOnboarded() {
  localStore.set(ONBOARDED_KEY, '1');
}
