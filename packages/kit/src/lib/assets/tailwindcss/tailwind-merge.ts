import { getDefaultConfig, mergeConfigs, extendTailwindMerge, type Config } from 'tailwind-merge';

export const getTwClassGroup = (key?: string): void => {
  const config: Config = getDefaultConfig();
  console.log(key ? config.classGroups[key] : config.classGroups);
};

export const getTwConfig = (...configs: Array<Partial<Config>>) =>
  [
    {
      classGroups: {
        aspect: [{ aspect: ['3/4', '4/3', 'A4', 'A4l'] }],
        content: [{ content: ['null'] }],
        'bg-image': [{ bg: ['waiting', 'loading'] }],
        'bg-size': [{ bg: ['50%', '33%', '25%', '20%', '10%', '5%'] }],
        'drop-shadow': [{ 'drop-shadow': ['deep', 'hard'] }],
        'font-size': [{ text: ['3xs', '2xs', '1.5xl', '2.5xl', '3.5xl', '4.5xl'] }],
        'text-shadow': [{ 'text-shadow': ['', 'none'] }],
        'list-style-type': [{ list: ['circle', 'square'] }],
        'min-h': [{ 'min-h': ['auto'] }],
        'min-w': [{ 'min-w': ['auto'] }]
      }
    },
    ...configs
  ].reduce((res: Config, val) => mergeConfigs(res, val), getDefaultConfig());

export default extendTailwindMerge((config: Config): Config => mergeConfigs(config, getTwConfig()));
