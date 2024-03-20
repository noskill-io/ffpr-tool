export const WALK_SPEED_ORIGINAL: WalkSpeed = {
  base: '8fc2753e', // 0.24 (80pps)
  lookupTable: [
    'c781a400000000008040', // 4.00 (Airship/Sprint)
    'c781a40000009a991940', // 2.40 (Run/Ship)
    'c781a40000006666e63f', // 1.80 (Other vehicles e.g. chocobo)
    'c781a40000009a99993f', // 1.20 (Walkspeed) (Multipliers for FF5/6 start with c783a4 instead of c781a4, need their own separate tools.)
  ],
};

export const WALK_SPEED_CLASSIC: WalkSpeed = {
  base: '0ad7a33e', // 0.32 (60pps based on 1.2 multiplier)
  lookupTable: [
    'c781a40000009a999940', // 4.80 (Airship/Sprint)
    'c781a40000009a991940', // 2.40 (Run/Ship)
    'c781a40000006666e63f', // 1.80 (Other vehicles) (This needs to stay at 1.8 instead of 1.2)
    'c781a40000009a99993f', // 1.20 (Walkspeed)
  ],
};

export const WALK_SPEED_FAST: WalkSpeed = {
  base: '0ad7233e', // 0.16 (120pps based on 1.2 multiplier)
  lookupTable: [
    'c781a40000009a999940', // 4.80 (Airship/Sprint)
    'c781a40000009a991940', // 2.40 (Run/Ship)
    'c781a40000006666e63f', // 1.80 (Other vehicles)
    'c781a40000009a99993f', // 1.20 (Walkspeed)
  ],
};

export interface WalkSpeed {
  base: string;
  lookupTable: Array<string>;
}
