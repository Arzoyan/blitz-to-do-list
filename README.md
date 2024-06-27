

This is a [Blitz.js](https://github.com/blitz-js/blitz) app.

# ****TO DO LIST****

## Demo

**Web Page**
https://cinema-mern-stack-app-4.onrender.com/

## Run Locally

Clone the project

```bash
git clone https://github.com/Arzoyan/blitz-to-do-list.git
```

## Getting Started

Run your app in the development mode.

```
blitz dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Ensure the `.env.local` file has required environment variables:

```
DATABASE_URL=postgresql://<YOUR_DB_USERNAME>@localhost:5432/blitz-to-do-list
```

Ensure the `.env.test.local` file has required environment variables:

```
DATABASE_URL=postgresql://<YOUR_DB_USERNAME>@localhost:5432/blitz-to-do-list_test
```


Blitz comes with a test setup using [Vitest](https://vitest.dev/) and [react-testing-library](https://testing-library.com/).

## Commands

Blitz comes with a powerful CLI that is designed to make development easy and fast. You can install it with `npm i -g blitz`

```
  blitz [COMMAND]

  dev       Start a development server
  build     Create a production build
  start     Start a production server
  export    Export your Blitz app as a static application
  prisma    Run prisma commands
  generate  Generate new files for your Blitz project
  console   Run the Blitz console REPL
  install   Install a recipe
  help      Display help for blitz
```

You can read more about it on the [CLI Overview](https://blitzjs.com/docs/cli-overview) documentation.

## What's included?

Here is the starting structure of your app.

```
To-Do-List/
├─ db/
│  ├─ schema.prisma
│  ├─ index.ts
├─ integrations/
├─ mailers/
│  ├─ forgotPasswordMailer.ts
├─ next-env.d.ts
├─ next.config.js
├─ package.json
├─ public/
│  ├─ favicon.ico
├─ sec/
│  ├─ app/
│  │  ├─ styles/
│  │  │  ├─ globals.css
│  │  ├─ tasks/
│  │  │  ├─ components/
│  │  │  │  ├─ AddTask.tsx
│  │  │  │  ├─ Task.tsx
│  │  │  │  ├─ TaskPage.tsx
│  │  │  ├─ mutations/
│  │  │  │  ├─ deleteTask.ts
│  │  │  │  ├─ insertTask.ts
│  │  │  │  ├─ updateTask.ts
│  │  │  ├─ queries/
│  │  │  │  ├─ getTasks.ts
│  │  ├─ blitz-auth-config.ts
│  │  ├─ blitz-client.ts
│  │  ├─ blitz-server.ts
│  │  ├─ error.tsx
│  │  ├─ layout.tsx
│  │  ├─ loading.tsx
│  │  ├─ page.tsx
│  ├─ cor/
│  │  ├─ styles/
│  │  │  ├─ index.css
│  ├─ pages/
│  │  ├─ api/
│  │  │  ├─ rpc/
│  │  │  └── [[...blitz]].ts
├── .prettierrc
├── .eslintrc.json
├── tailwind.config.js
├── tsconfig.json
└── types.ts
```
