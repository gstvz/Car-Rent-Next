import fs from "fs";

export function readFile(filePath: string) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData.toString());
  return data;
}
