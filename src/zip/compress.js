import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

export const compress = async () => {
  const fileToCompress = "src/zip/files/fileToCompress.txt";
  const fileToSave = "src/zip/files/archive.gz";

  const readableStream = createReadStream(fileToCompress);
  const writableStream = createWriteStream(fileToSave);
  const archive = createGzip();

  readableStream.pipe(archive).pipe(writableStream);
};

compress();
