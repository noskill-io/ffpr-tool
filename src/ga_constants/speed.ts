export const WALK_SPEED_ORIGINAL: WalkSpeed = {
  base: '8fc2753e', // 0.24
  lookupTable: [
    'c781a400000000008040', // 4.00
    'c781a40000009a991940', // 2.40
    'c781a40000006666e63f', // 1.80
    'c781a40000009a99993f', // 1.20
  ],
};

export const WALK_SPEED_CLASSIC: WalkSpeed = {
  base: '2db29d3e', // 0.308
  lookupTable: [
    'c781a40000009a999940', // 4.8
    'c781a40000009a991940', // 2.40
    'c781a40000009a99993f', // 1.20
    'c781a40000009a99993f', // 1.20
  ],
};

export const WALK_SPEED_FAST: WalkSpeed = {
  base: '0ad7233e', // 0.16
  lookupTable: [
    'c781a400000066666640', // 3.60
    'c781a40000009a991940', // 2.40
    'c781a40000009a99993f', // 1.20
    'c781a40000009a99993f', // 1.20
  ],
};

export interface WalkSpeed {
  base: string;
  lookupTable: Array<string>;
}
