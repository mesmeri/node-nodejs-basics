import { readdir, access } from "fs/promises";

export const list = async () => {
  const filesDirPath = "src/fs/files";

  try {
    await access(filesDirPath);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    const files = await readdir(filesDirPath);
    const filesNames = [];

    for (const file of files) {
      filesNames.push(file);
    }

    console.log(filesNames);
  } catch {
    throw new Error("Unexpected error", err);
  }
};

list();
