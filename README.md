## Getting Started

Install dependencies:
npm install

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Access the application:

Sign-Up Page: http://localhost:3000/auth/signup
Sign-In Page: http://localhost:3000/auth/signin
Home Page (Protected): http://localhost:3000/

Project Structure
my-auth-app/
├── node_modules/
├── pages/
│   ├── api/
│   │   └── auth/
│   │       ├── [...nextauth].js
│   │       └── signup.js
│   ├── auth/
│   │   ├── signin.js
│   │   └── signup.js
│   ├── _app.js
│   └── index.js
├── package.json
├── package-lock.json
└── next.config.js

_app.js
This file is the custom App component in Next.js, which wraps all pages. Here, we use the SessionProvider from next-auth to provide session management across the application.

Home Page
The home page checks if a user is signed in using useSession from next-auth/react. If not signed in, it prompts the user to sign in.

Sign-In Page
This page provides a form for users to sign in. It uses the signIn function from next-auth/react to authenticate users.

Sign-Up Page
This page provides a form for users to sign up. It sends a POST request to the /api/auth/signup endpoint to create a new user.

API Route: Sign-Up
This API route handles user registration. It hashes the password and stores the user data in memory.

API Route: NextAuth
This API route handles authentication using next-auth. It includes a credentials provider for email/password login.