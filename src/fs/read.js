import { access, readFile } from "fs/promises";

export const read = async () => {
  const filePath = "src/fs/files/fileToRead.txt";

  try {
    await access(filePath);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    const content = await readFile(filePath, { encoding: "utf-8" });

    console.log(content);
  } catch (err) {
    throw new Error("Unexpected error", err);
  }
};

read();
