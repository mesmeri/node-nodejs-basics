import { rm, access } from "fs/promises";
import { constants } from "fs";

export const remove = async () => {
  const filePath = "src/fs/files/fileToRemove.txt";

  try {
    await access(filePath, constants.F_OK);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    await rm(filePath);
    console.log("removed");
  } catch (err) {
    console.error("Unexpected error", err);
  }
};

remove();
