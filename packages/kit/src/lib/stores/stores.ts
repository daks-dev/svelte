import { readable, writable } from 'svelte/store';

interface Navigate {
  prev?: { href: string; title?: string };
  next?: { href: string; title?: string };
}

export const navigate = (() => {
  const { subscribe, update, set } = writable<Navigate>();
  return {
    subscribe,
    set,
    clear: () => update(() => ({}))
  };
})();

export const sessionTime = readable(0, (set) => {
  const date = Date.now();
  const interval = setInterval(() => {
    set(Date.now() - date);
  }, 1000);
  return function stop() {
    clearInterval(interval);
  };
});

export const routeTransitionMode = (() => {
  const { subscribe, update, set } = writable(0);
  return {
    subscribe,
    set, // (val: number | string) => update(() => Number(val)),
    change: () => update((value) => (value < 3 ? ++value : 0))
  };
})();

export const admindata = (() => {
  const { subscribe, update, set } = writable<Record<string, unknown[]>>({});
  return {
    subscribe,
    set,
    clear: () => update(() => ({}))
  };
})();
