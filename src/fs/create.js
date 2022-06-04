import { access, writeFile } from "fs/promises";
import { constants } from "fs";

export const create = async () => {
  const filePath = "src/fs/files/fresh.txt";
  const fileText = "I am fresh and young";

  let fileExists;

  try {
    await access(filePath, constants.F_OK);

    fileExists = true;
  } catch {
    fileExists = false;
  }

  if (fileExists) {
    throw new Error("FS operation failed");
  }

  try {
    await writeFile(filePath, fileText);
  } catch (err) {
    console.error("Unexpected error", err);
  }
};

create();
