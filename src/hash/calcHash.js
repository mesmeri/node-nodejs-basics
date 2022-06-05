const { createHash } = await import("node:crypto");

export const calculateHash = async () => {
  const filePath = "src/hash/files/fileToCalculateHashFor.txt";
  const hash = createHash("sha256");

  hash.update(filePath);
  const result = hash.digest("hex");

  console.log(result);

  return result;
};

calculateHash();
