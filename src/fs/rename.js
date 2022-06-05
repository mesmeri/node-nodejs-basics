import fs, { access } from "fs/promises";
import { constants } from "fs";

export const rename = async () => {
  const wrongFilenamePath = "src/fs/files/wrongFilename.txt";
  const properFilenamePath = "src/fs/files/properFilename.md";

  let properFilenameExists;

  try {
    await access(wrongFilenamePath, constants.R_OK);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    await access(properFilenamePath, constants.R_OK);
    properFilenameExists = true;
  } catch {
    properFilenameExists = false;
  }

  if (properFilenameExists) {
    throw new Error("FS operation failed");
  }

  try {
    fs.rename(wrongFilenamePath, properFilenamePath);
  } catch (err) {
    console.error("Unexpected error", err);
  }
};

rename();
