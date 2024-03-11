import { extendTailwindMerge, mergeConfigs, type Config } from 'tailwind-merge';
import { getTwConfig as __getTwConfig } from '@daks.dev/svelte.kit';

export const getTwConfig = (...configs: Array<Partial<Config>>) =>
  __getTwConfig(
    {
      classGroups: {
        'bg-image': [{ bg: ['loading-data'] }]
      }
    },
    ...configs
  );

export default extendTailwindMerge((config: Config): Config => mergeConfigs(config, getTwConfig()));
