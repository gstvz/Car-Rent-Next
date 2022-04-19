import fs from "fs";
import { createFilePath, hashPassword, readFile } from "@utils";
import { NextApiRequest, NextApiResponse } from "next";

type User = {
  name: string;
  email: string;
  password: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const { name, email, password } = data;

  const hashedPassword = await hashPassword(password);

  const newUser = {
    name: name,
    email: email,
    password: hashedPassword,
  };

  const filePath = createFilePath("users");
  const users = readFile(filePath);

  const isUserRegistered = users.find((user: User) => user.email === email);

  if (isUserRegistered) {
    res.status(422).json({ message: "User is already registered!" });
    return;
  }

  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users));
  res.status(201).json({ message: "User created!" });
}

export default handler;
