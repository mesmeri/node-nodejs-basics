import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

export const decompress = async () => {
  const fileToDecompress = "src/zip/files/archive.gz";
  const fileToSave = "src/zip/files/fileToCompress.txt";

  const readableStream = createReadStream(fileToDecompress);
  const writableStream = createWriteStream(fileToSave);
  const unarchive = createGunzip();

  readableStream.pipe(unarchive).pipe(writableStream);
};

decompress();
