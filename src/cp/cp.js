import { fork } from "child_process";
import { argv } from "node:process";

export const spawnChildProcess = async (args) => {
  const cp = fork("./src/cp/files/script.js", args, {
    stdio: ["pipe", 1, 2, "ipc"],
  });

  process.stdin.pipe(cp.stdin);
};

spawnChildProcess(argv);
