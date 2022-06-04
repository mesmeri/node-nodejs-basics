import { access, mkdir, copyFile, opendir } from "fs/promises";
import { constants } from "fs";
import path from "path";

export const copy = async () => {
  const filesPath = "src/fs/files";
  const filesCopyPath = "src/fs/files_copy";

  let filesCopyFolderExists;

  try {
    await access(filesPath, constants.R_OK);
  } catch {
    throw new Error("FS operation failed ");
  }

  try {
    await access(filesCopyPath, constants.R_OK);
    filesCopyFolderExists = true;
  } catch {
    filesCopyFolderExists = false;
  }

  if (filesCopyFolderExists) {
    throw new Error("FS operation failed ");
  }

  try {
    await mkdir(filesCopyPath);

    const filesDir = await opendir(filesPath);

    for await (const file of filesDir) {
      copyFile(
        path.resolve(filesPath, file.name),
        path.resolve(filesCopyPath, file.name)
      );
    }
  } catch (err) {
    console.error("Unexpected error", err);
  }
};

copy();
