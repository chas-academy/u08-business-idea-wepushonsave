# Style guide Airbnb for TypeScript | ESLint | Prettier

## Frontend

### ESLint

#### 1. Create a React project with TS

_Make sure you have npm installed on your machine_

1. Create a vite project

```pwsh
npm create vite@latest
```

    Add a name (ProjectName_Frontend)
    Framework (React)
    Language (TypeScript)

2. Install and run

```pwsh
cd ProjectName_Frontend
npm install
npm run dev
```

#### 2. ESLint Setup

1. Install ESLint

```pwsh
npm install eslint eslint-plugin-react eslint-plugin-react-hooks --save-dev
```

2. Setup regular Airbnb config

```pwsh
npx eslint --init
```

    > y
    > To check syntax, find problems
    > JavaScript modules Import/Export
    > React
    > Yes
    > Browser
    > Yes

3. Run ESLint on the project

```pwsh
npx eslint src/*
```

---

### ESLint Config

---

## Backend

_This guide will take you trew how to install and use ESLint with TypeScript. I will start in a express project using TS. Ensure you also have a TS express project to follow this guide._

**Source** [ESLint or TypeScript](https://typescript-eslint.io/getting-started)

### ESLint

1. Install eslint

```pwsh
npm init @eslint/config@latest`
```

    > "Check syntax only"
    > "JavaScript import/export"
    > "None"
    > "typescript"
    > "Browser"
    > "yes"
    > "npm"

_You might have to install typescript and other packages, check the source link if you encounter errors at this point_

2. Configurations
   1. Create a `eslint.config.js` file and add...

```js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended
);
```

_This code will enable recommended configurations for linting_

3. Running ESLint

```pwsh
npx eslint .
```

---

### ESLint Config

---

## Frontend

### Prettier

---

## Backend

### Prettier
