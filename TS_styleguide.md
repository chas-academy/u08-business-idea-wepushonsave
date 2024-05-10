# Style guide Airbnb for TypeScript | ESLint | Prettier

## Frontend | React TypeScript

**_Sources_**

- [npmjs.com](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [Airbnb JavaScript styleguide](https://airbnb.io/javascript/react/)

### 1. Install Extentions and Plugins

**Prettier:** _(esbenp.prettier-vscode)_
**ESLint:** _(dbaeumer.vscode-eslint)_

### 2. Create a React project with TS

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

### 3. Airbnb / ESLint Setup

1. Setup regular Airbnb config

```pwsh
npx install-peerdeps --dev eslint-config-airbnb
```

2. Add `"airbnb", "airbnb/hooks"` to >`package.json > eslint-config-airbnb > hooks.js` under `"extends":`

3. Install dependencies
   _Not needed in my case as it was in the package.json file_

```pwsh
    npm install eslint-config-airbnb-typescript \
    @typescript-eslint/eslint-plugin@^7.0.0 \
    @typescript-eslint/parser@^7.0.0 \
    typescript \
    prettier \
    eslint-plugin-prettier \
    eslint-config-prettier \
    --save-dev
```

## Backend

_This guide will take you trew how to install and use ESLint with TypeScript. I will start in a express project using TS. Ensure you also have a TS express project to follow this guide._

**Source** [ESLint or TypeScript](https://typescript-eslint.io/getting-started)

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
