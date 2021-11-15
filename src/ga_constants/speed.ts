export const WALK_SPEED_ORIGINAL: WalkSpeed = {
  base: '8fc2753e', // 0.24
  lookupTable: [
    'c783a400000000008040', // 4.00
    'c783a40000009a991940', // 2.40
    'c783a40000006666e63f', // 1.80
    'c783a40000009a99993f', // 1.20
  ],
};

export const WALK_SPEED_CLASSIC: WalkSpeed = {
  base: '772da13e', // 0.3148
  lookupTable: [
    'c783a40000009a999940', // 4.80
    'c783a40000009a991940', // 2.40
    'c783a40000009a99993f', // 1.20
    'c783a40000009a99993f', // 1.20
  ],
};

export const WALK_SPEED_FAST: WalkSpeed = {
  base: '772d213e', // 0.1574
  lookupTable: [
    'c783a40000009a999940', // 4.80
    'c783a40000009a991940', // 2.40
    'c783a40000009a99993f', // 1.20
    'c783a40000009a99993f', // 1.20
  ],
};

export interface WalkSpeed {
  base: string;
  lookupTable: Array<string>;
}
