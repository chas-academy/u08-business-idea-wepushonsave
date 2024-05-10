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
