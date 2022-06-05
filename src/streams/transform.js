import { stdin, stdout } from "process";
import { pipeline, Transform } from "stream";

export const transform = async () => {
  const readableStream = stdin;
  const writableStream = stdout;
  const reversed = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.reverse());
      callback();
    },
  });

  readableStream.pipe(reversed).pipe(writableStream);
};

transform();
