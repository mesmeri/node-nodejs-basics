import { createWriteStream } from "fs";
import { stdin } from "process";

export const write = async () => {
  const fileToWrite = "src/streams/files/fileToWrite.txt";
  const readableStream = stdin;
  const writableStream = createWriteStream(fileToWrite);

  readableStream.pipe(writableStream);
};

write();
