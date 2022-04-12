import path from "path";

export function createFilePath() {
  return path.join(process.cwd(), "src/shared/mock", "cars.json");
}
