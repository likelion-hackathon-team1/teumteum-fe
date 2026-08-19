const AUTH_KEY = 'tt-auth';
const ONBOARDED_KEY = 'tt-onboarded';

export function isLoggedIn() {
  return typeof window !== 'undefined' && localStorage.getItem(AUTH_KEY) === '1';
}

export function setLoggedIn() {
  localStorage.setItem(AUTH_KEY, '1');
}

export function isOnboarded() {
  return typeof window !== 'undefined' && localStorage.getItem(ONBOARDED_KEY) === '1';
}

export function setOnboarded() {
  localStorage.setItem(ONBOARDED_KEY, '1');
}
