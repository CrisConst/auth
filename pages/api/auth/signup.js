import bcrypt from "bcrypt";

let users = [
  { id: 1, email: "userone@example.com", password: bcrypt.hashSync("password", 10) },
];

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ id: users.length + 1, email, password: hashedPassword });
    res.status(201).json({ message: "User created" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
