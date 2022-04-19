import path from "path";

export function createFilePath(database: string) {
  return path.join(process.cwd(), "src/shared/mock", `${database}.json`);
}
