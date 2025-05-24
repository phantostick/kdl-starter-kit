# KDL Starter Kit

**KDL Starter Kit** is an open-source, modular, AI-ready SaaS boilerplate by **Kalam Dream Labs Pvt Ltd**. It includes a full-featured backend (Node.js + Express + PostgreSQL) and a modern frontend (Next.js + TailwindCSS), ready to scale into a CRM, CMS, invoicing, or automation platform.

![License: Apache-2.0](https://img.shields.io/badge/license-Apache%202.0-blue)

---

## 🚀 Features

* 🔐 JWT-based authentication (ready for roles & multi-tenancy)
* 📦 Modular backend with REST APIs (Node.js + Express + Prisma)
* 🧠 AI Integration-ready (Langchain, Whisper, Ollama, ChromaDB)
* 🧾 CMS + CRM + Invoicing support (modular architecture)
* 🌐 Next.js frontend with TailwindCSS, Zustand, and reusable components
* 🐳 Dockerized setup with PostgreSQL and full dev environment
* 🧪 Playwright-ready for E2E testing (optional)
* ✅ Open source, clean structure, and easy to extend

---

## 🏗 Tech Stack

| Layer        | Tech                                  |
| ------------ | ------------------------------------- |
| **Frontend** | Next.js, React, TailwindCSS, Zustand  |
| **Backend**  | Node.js, Express, PostgreSQL, Prisma  |
| **AI Ready** | Langchain, Whisper, Ollama, ChromaDB  |
| **DevOps**   | Docker, GitHub Actions, Vault, Sentry |

---

## 📁 Project Structure

```
kdl-starter-kit/
├── backend/        # Node.js + Express + Prisma API
├── frontend/       # Next.js + Tailwind frontend
├── ai-services/    # Langchain, Whisper, Ollama integrations
├── mobile/         # Native mobile (iOS/Android, optional)
├── infra/          # Docker, CI/CD, secrets
├── docs/           # Architecture, API reference, roadmap
```

---

## ✅ Prerequisites

### Common Requirements:

* [Node.js (LTS)](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* [Git](https://git-scm.com)

### For Docker Setup:

* [Docker Desktop](https://www.docker.com/products/docker-desktop)

### For Manual Setup (Without Docker):

* [PostgreSQL](https://www.postgresql.org/download/)

---

## ⚙️ Getting Started

You can install and run the KDL Starter Kit using one of the two methods:

---

## 🐳 Option 1: Docker-Based Setup (Recommended)

> In this method, you'll set up the backend and Prisma before launching Docker to ensure the database is correctly migrated and seeded.

### 🔄 Step 1: Clone the Repository

```bash
git clone https://github.com/kalamdreamlabs/kdl-starter-kit.git
cd kdl-starter-kit
```

---

### 🔧 Step 2: Backend Setup (Before Docker)

```bash
cd backend
```

Create a `.env` file:

```env
DATABASE_URL="postgresql://postgres:root@localhost:5432/kdl_backend"
JWT_SECRET=supersecretjwt
```

Initialize Prisma:

```bash
npx prisma migrate dev --name init
node prisma/seeders/settingseed.js # Optional: seed data
```

👉 **Do NOT start the backend server yet. Proceed to start Docker first.**

---

### 🌐 Step 3: Frontend Setup

```bash
cd ../frontend
```

Create `.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

---

### 🐳 Step 4: Start Docker Services

Return to the root directory:

```bash
cd ..
docker-compose exec backend npx prisma migrate dev --name init
docker compose up 
```

This will start the PostgreSQL container on port `5432`.

Frontend is now live at: [http://localhost:3000](http://localhost:3000)

---

## 🛠 Option 2: Manual Setup (Without Docker)

> For users running PostgreSQL locally (without Docker).

### 🔄 Step 1: Clone the Repository

```bash
git clone https://github.com/kalamdreamlabs/kdl-starter-kit.git
cd kdl-starter-kit
```

### 🛢 Step 2: PostgreSQL Setup

1. Install PostgreSQL and start a local DB server.
2. Create a new database: `kdl_backend`
3. Use username: `postgres` and password: `root` (or update accordingly in `.env`)

### 🔧 Step 3: Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```env
DATABASE_URL="postgresql://postgres:root@localhost:5432/kdl_backend"
JWT_SECRET=supersecretjwt
```

Run migrations and seed (optional):

```bash
npx prisma migrate dev --name init
node prisma/seeders/settingseed.js
npm run dev
```

---

### 🌐 Step 4: Frontend Setup

```bash
cd ../frontend
npm install
```

Create `.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

Run the frontend:

```bash
npm run dev
```

---

## 🧭 Optional: Prisma Studio

To open the visual DB editor:

```bash
npx prisma studio
```

Open [http://localhost:5555](http://localhost:5555)

---

## ✅ Final Check

| Component | URL                                            |
| --------- | ---------------------------------------------- |
| Frontend  | [http://localhost:3000](http://localhost:3000) |
| Backend   | [http://localhost:4000](http://localhost:4000) |
| Prisma UI | [http://localhost:5555](http://localhost:5555) |

---

## 🤝 Contributing

We welcome your contributions!
Please check out our [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE\_OF\_CONDUCT.md](./CODE_OF_CONDUCT.md).

---

## 📜 License

Licensed under the [Apache 2.0 License](./LICENSE) © 2025 **Kalam Dream Labs Pvt Ltd**.

---

> Built with ❤️ by [Kalam Dream Labs Pvt Ltd](https://kalamdreamlabs.com)
