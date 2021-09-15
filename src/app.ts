import fs from 'fs';
import prompts, { PromptObject, Options } from 'prompts';
import { WALK_SPEED_CLASSIC, WALK_SPEED_FAST, WALK_SPEED_ORIGINAL, WalkSpeed } from './ga_constants/speed';

const GA_FILE = 'GameAssembly.dll';
const BACKUP_DIR = './backup_dll';
const QUESTIONS: PromptObject[] = [
  {
    type: 'select',
    name: 'speed',
    message: 'Please choose a game speed. Classic or Fast should result in less stutter while walking.',
    choices: [
      {
        title: 'Original',
        description: 'The original Pixel Remaster speed (80 px/second).',
        value: WALK_SPEED_ORIGINAL,
      },
      {
        title: 'Classic',
        description: 'The same speed as the original SNES game (60 px/second).',
        value: WALK_SPEED_CLASSIC,
      },
      {
        title: 'Fast',
        description: '1.5x faster than the Pixel Remaster default speed (120 px/second)',
        value: WALK_SPEED_FAST,
      },
    ],
  },
];

async function main() {
  if (!fs.existsSync(GA_FILE)) {
    console.log("No GameAssembly.dll found. Please ensure you're running this app from the root game directory.");
    return;
  }

  const response = await prompts(QUESTIONS);
  const walkSpeed = response.speed as WalkSpeed;

  backupDll();

  const file = fs.readFileSync(`./${GA_FILE}`, 'hex');

  try {
    let patchedFile = replaceSingleOccurence(file, WALK_SPEED_ORIGINAL.base, walkSpeed.base, 'Base Speed');

    walkSpeed.lookupTable.forEach((value, index) => {
      patchedFile = replaceSingleOccurence(
        patchedFile,
        WALK_SPEED_ORIGINAL.lookupTable[index],
        value,
        'Lookup Table Speed' // todo: label which speed corresponds to what
      );
    });

    fs.writeFileSync(`./${GA_FILE}`, patchedFile, 'hex');

    console.log('Success!');
  } catch (err: any) {
    console.log(err);
    return;
  }
}

function backupDll() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR);
  }
  fs.copyFileSync(`./${GA_FILE}`, `${BACKUP_DIR}/${GA_FILE}`);

  // todo: append a filename friendly timestamp or increment to the end of the filename so we don't lose the original
}

function replaceSingleOccurence(file: string, searchValue: string, replaceValue: string, description = 'Value') {
  const matches = file.match(new RegExp(searchValue, 'g'));
  if (!matches || matches.length == 0) {
    throw Error(`${description}: not found. Ensure you are modifying the original GameAssembly.dll`);
  } else if (matches.length > 1) {
    throw Error(`${description}: multiple matches found. Cannot identify which to replace.`);
  }

  console.log(`${description}: replacing ${searchValue} with ${replaceValue}`);
  return file.replace(searchValue, replaceValue);
}

main().then(async (r) => {
  await prompts({
    type: 'text',
    name: 'exit',
    message: 'Press ENTER to exit.',
  });
});
