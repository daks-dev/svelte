interface MetadataS {
  [x: string]: Metadata;
}

export const imageExtnames = [
  '.heic',
  '.heif',
  '.avif',
  '.jpeg',
  '.jpg',
  '.png',
  '.tiff',
  '.webp',
  '.gif'
];
export const imagePattern = `(${imageExtnames.map((val) => val.substring(1)).join('|')})`;

export function globIndex(data: Record<string, unknown>): string[] {
  return Object.keys(data).map((val) => val.replace(/.+\/(.+)/g, '$1'));
}

export function globInfoset(idxs: string[], data: Record<string, unknown>): MetadataS {
  return idxs.reduce(
    (res, key) => (
      Object.values(data).forEach(
        (val) =>
          (res[key] = {
            ...res[key],
            ...(val as MetadataS)[key]
          })
      ),
      res
    ),
    <MetadataS>{}
  );
}

export function globDataset(
  idxs: string[],
  captions: MetadataS,
  metas: Record<string, unknown>
): Metadata[] {
  const data = Object.values(metas);
  return idxs.reduce(
    (res, key, idx) => (
      (res[idx] = {
        ...(data[idx] as Metadata),
        ...captions[key]
      }),
      res
    ),
    Array<Metadata>(0)
  );
}
