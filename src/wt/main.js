import { Worker } from "worker_threads";
import { cpus } from "os";

export const performCalculations = async () => {
  const minN = 10;
  const maxN = cpus().length;
  const resultsArr = [];

  const setWorker = (n) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./src/wt/worker.js", { workerData: n });

      worker.once("message", (data) => {
        resolve({ status: "resolved", data });
      });

      worker.on("error", () => {
        reject({ status: "rejected", data: null });
      });
    });
  };

  for (let n = minN; n < maxN; n++) {
    resultsArr.push(setWorker(n));
  }

  const result = await Promise.all(resultsArr);

  console.log(result);

  return result;
};

performCalculations();
