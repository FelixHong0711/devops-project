# DevOps Project

A modern React application built with TypeScript, Vite, and containerized using Docker. This project demonstrates best practices in DevOps, including containerization, automated testing, and continuous integration.

## 🚀 Features

- React 18 with TypeScript
- Vite for fast development and building
- Docker containerization
- ESLint and Prettier for code quality
- Unit testing with Vitest
- GitHub Actions for CI/CD
- Nginx for production serving

## 🛠️ Prerequisites

- Node.js 20 or higher
- Docker and Docker Compose
- npm or yarn package manager

## 🏗️ Installation

1. Clone the repository:
```bash
git clone https://github.com/felixhong0711/devops-project.git
cd devops-project
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🧪 Testing

Run unit tests:
```bash
npm run unit-test
```

## 🏗️ Building

Build the project:
```bash
npm run build
```

## 🐳 Docker

Build and run using Docker Compose:
```bash
docker-compose up --build
```

The application will be available at `http://localhost:8000`

## 🔄 CI/CD Pipeline

This project implements a comprehensive CI/CD pipeline using GitHub Actions. The pipeline consists of the following stages:

### 1. Code Quality Analysis
- TypeScript type checking
- Unit testing with Vitest
- Code formatting with Prettier

### 2. Build
- Builds the production-ready application
- Generates optimized static files
- Uploads build artifacts for deployment

### 3. Deploy to Staging
- Builds Docker image
- Pushes to DockerHub
- Deploys to staging environment using Docker Compose

### 4. Integration Testing
- Runs Selenium WebDriver tests
- Verifies application functionality
- Ensures all features work as expected

### 5. Production Release
- Deploys to GitHub Pages
- Creates a new release with version tag
- Updates production environment

The pipeline is triggered on:
- Push to main branch
- Manual workflow dispatch

### Environment Variables Required
- `DOCKER_USERNAME`: DockerHub username
- `DOCKER_PASSWORD`: DockerHub password
- `GITHUB_TOKEN`: GitHub authentication token

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run unit-test` - Run unit tests
- `npm run format` - Format code using Prettier
- `npm run check-types` - Check TypeScript types

## 🏗️ Project Structure

```
devops-project/
├── src/              # Source files
├── public/           # Static assets
├── .github/          # GitHub Actions workflows
├── Dockerfile        # Docker configuration
├── docker-compose.yml # Docker Compose configuration
└── package.json      # Project dependencies and scripts
```

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `.eslintrc.cjs` - ESLint configuration
- `.prettierrc` - Prettier configuration
- `vite.config.ts` - Vite configuration

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
