import { Classes } from 'jss';

export const combineStyles = (first: Classes, second?: Partial<Classes>): Classes => {
  if (!second) return first;
  const combined = { ...first };
  Object.keys(combined).forEach((key) => {
    const cls = key;
    if (!second[cls]) return;
    combined[cls] = `${first[cls]} ${second[cls]}`;
  });

  return combined;
};
