import { createReadStream } from "fs";
import { stdout } from "process";

export const read = async () => {
  const fileToReadPath = "src/streams/files/fileToRead.txt";
  const readableStream = createReadStream(fileToReadPath);

  readableStream.pipe(stdout);
};

read();
