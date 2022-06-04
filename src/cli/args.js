import { argv } from "node:process";

export const parseArgs = () => {
  const parsedArgs = argv.reduce((acc, val, index, arr) => {
    if (val.startsWith("--") && arr[index + 1]) {
      acc.push(`${val.slice(2)} is ${arr[index + 1]}`);
    }
    return acc;
  }, []);

  console.log(parsedArgs.join(", "));
};

parseArgs();
