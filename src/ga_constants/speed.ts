export const WALK_SPEED_ORIGINAL: WalkSpeed = {
  base: '8fc2753e', // 0.24 (80pps)
  lookupTable: [
    'c781a400000000008040', // 4.00 (Airship/Sprint)
    'c781a40000009a991940', // 2.40 (Run/Ship)
    'c781a40000006666e63f', // 1.80 (Chocobo?)
    'c781a40000009a99993f', // 1.20 (Walkspeed)
  ],
};

export const WALK_SPEED_CLASSIC: WalkSpeed = {
  base: '9a99993e', // 0.3 (64pps) (Runs a bit smoother than before based on testing, else set to 0.32 for true 60pps, bearing in mind there does seem to be grid position snapping)
  lookupTable: [
    'c781a40000009a999940', // 4.80 (Airship/Sprint)
    'c781a40000009a991940', // 2.40 (Run/Ship)
    'c781a40000006666e63f', // 1.80 (Chocobo?) (This may need to stay at 1.8 instead of 1.2, could have been causing the fucky speeds)
    'c781a40000009a99993f', // 1.20 (Walkspeed)
  ],
};

export const WALK_SPEED_FAST: WalkSpeed = {
  base: '9a99193e', // 0.15 (128pps) (Runs a bit smoother than before based on testing, else set to 0.16 for true 120pps)
  lookupTable: [
    'c781a40000009a999940', // 4.80 (Airship/Sprint)
    'c781a40000009a991940', // 2.40 (Run/Ship)
    'c781a40000006666e63f', // 1.80 (Chocobo?)
    'c781a40000009a99993f', // 1.20 (Walkspeed)
  ],
};

export interface WalkSpeed {
  base: string;
  lookupTable: Array<string>;
}
