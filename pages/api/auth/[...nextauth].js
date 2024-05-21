import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const users = [
  {
    id: 1,
    name: "User One",
    email: "userone@example.com",
    password: bcrypt.hashSync("password", 10),
  },
];

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = users.find((u) => u.email === credentials.email);
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
