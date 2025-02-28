import { DEV } from 'esm-env';
import { hooks } from '@daks.dev/svelte.kit/server';
import { iconkit } from '@daks.dev/svelte-iconify/server';
import type { Handle } from '@sveltejs/kit';

DEV && iconkit();

const redirects: Record<string, string> = {
  // '': ''
};

export const handle = (async ({ event, resolve }) => {
  if (event.url.pathname in redirects) {
    return new Response(undefined, {
      status: 308,
      headers: {
        location: redirects[event.url.pathname]
      }
    });
  }
  return await hooks({ event, resolve });
}) satisfies Handle;
