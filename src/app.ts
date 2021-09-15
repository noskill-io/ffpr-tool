import fs from "fs";
import prompts, { PromptObject, Options } from "prompts";

const GA_FILE = "GameAssembly.dll";
const BACKUP_DIR = "./backup_dll";
const QUESTIONS: PromptObject[] = [
  {
    type: "select",
    name: "speed",
    message: "Please choose a game speed",
    choices: [
      {
        title: "Classic",
        description: "The same speed as the original SNES game (60 px/second)",
        value: "0ad7a33e",
      },
      {
        title: "Fast",
        description:
          "1.5x faster than the Pixel Remaster default speed (120 px/second)",
        value: "0ad7233e",
      },
    ],
  },
];

const GA_WALK_SPEED_BASE = "8fc2753e";

async function main() {
  if (!fs.existsSync(GA_FILE)) {
    console.log(
      "No GameAssembly.dll found. Please ensure you're running this app from the root game directory."
    );
    return;
  }

  const response = await prompts(QUESTIONS);

  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR);
  }

  fs.copyFileSync(`./${GA_FILE}`, `${BACKUP_DIR}/${GA_FILE}`);

  const file = fs.readFileSync(`./${GA_FILE}`, "hex");

  const patchedFile = file.replace(GA_WALK_SPEED_BASE, response.speed);

  fs.writeFileSync(`./${GA_FILE}`, patchedFile, "hex");

  console.log("Success!");
}

main().then(async (r) => {
  await prompts({
    type: "text",
    name: "exit",
    message: "Press ENTER to exit.",
  });
});
