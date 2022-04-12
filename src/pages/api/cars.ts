import { NextApiRequest, NextApiResponse } from "next";
import { createFilePath, readFile } from "@utils";

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const filePath = createFilePath();
    const { cars } = readFile(filePath);
    return res.status(200).json({ cars });
  }
}

export default handler;
