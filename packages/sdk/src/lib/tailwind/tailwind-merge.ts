import { getDefaultConfig, mergeConfigs, extendTailwindMerge, type Config } from 'tailwind-merge';
import { twmerge as external } from '../stores/nano.js';

export const getTwClassGroup = (key?: string): void => {
  const config: Config = getDefaultConfig();
  console.log(key ? config.classGroups[key] : config.classGroups);
};

const local = {
  aspect: [{ aspect: ['3/4', '4/3', 'A4', 'A4l'] }],
  'bg-image': [{ bg: ['linear', 'radial', 'loading', 'waiting'] }],
  'bg-size': [{ bg: ['75%', '50%', '33%', '25%', '20%', '10%', '5%'] }],
  content: [{ content: ['null'] }],
  'drop-shadow': [{ 'drop-shadow': ['deep', 'hard'] }],
  'font-size': [{ text: ['3xs', '2xs', '1.5xl', '2.5xl', '3.5xl', '4.5xl'] }],
  'gradient-from-pos': [{ from: ['150%'] }],
  'gradient-to-pos': [{ to: ['150%'] }],
  'gradient-via-pos': [{ via: ['150%'] }],
  'list-style-type': [{ list: ['circle', 'square'] }],
  rounded: [{ rounded: ['4xl', '5xl'] }],
  shadow: [{ shadow: ['inset'] }]
};

// const external = $twmerge;

export const getTwMerge = () =>
  extendTailwindMerge(
    (config: Config): Config =>
      mergeConfigs(
        config,
        [{ classGroups: local }, { classGroups: external.get() }].reduce(
          (acc: Config, val) => mergeConfigs(acc, val),
          getDefaultConfig()
        )
      )
  );

const twMerge = getTwMerge();

export default (...x: ClassName[]) => twMerge(...x) || undefined;
