import { writable } from 'svelte/store';

interface ToastData {
  message: string;
  close?: () => void;
}

export const toastData = (() => {
  const { subscribe, update } = writable<ToastData>();
  const minifier = (val: string) => val.trim().replace(/\n/g, '').replace(/\s{2}/g, ' ');
  return {
    subscribe,
    set: (val: string) => update(() => ({ message: minifier(val) })),
    once: (message: string, local: string) =>
      `toast-${local}` in localStorage ||
      update(() => {
        return {
          message: minifier(message),
          close: () => localStorage.setItem(`toast-${local}`, 'done')
        };
      }),
    clear: () => update(() => ({ message: '' }))
  };
})();

export const svelteKitCount = writable(0);

/*
export const theme = (() => {
  const { subscribe, update } = writable(true);

  return {
    subscribe,
    change: () =>
      update((value) => {
        const htmlTag = document.getElementsByTagName('html').item(0);
        if (htmlTag) {
          htmlTag.className = value ? 'light' : 'dark';
        }
        return !value;
      })
  };
})();
*/

// core
export * from '@daks.dev/svelte.kit/stores';
// export { navigate, routeTransitionMode, sessionTime } from '@daks.dev/svelte.kit/stores';
