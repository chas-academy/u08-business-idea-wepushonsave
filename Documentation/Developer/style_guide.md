# Developer styleguide and instructions

_This document is intended for the developers on how to work within the frame and our styleguide_

#### Our Stack

_This styleguide is made for typescript in both front and backend_

- ESLint _for linting_
- Airbnb _as standard_
- Prettier _for formatting_

_Quick-tip, run eslint_

```pwsh
npx eslint src/*
```

#### Get started

**Install packages and dependencies**
_This might be all you have to do..._

```pwsh
npm install
```

_Getting started can be your first code on the project or specific branch_

1. Install Prettier extension

![](https://i.imgur.com/UMkL7s2.png)

2. Configure settings to format on save

   1. Press F1 and search `open settings`
      ![](https://i.imgur.com/Suzm1c6.png)
   2. Click `Preferances: Open User Settings (JSON)`
   3. Add this to the file

   ```pwsh
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
   ```

3. Install ESLint extension
   _Sometimes prettier and eslint cant communicate, then you need to help them out_
   ![](https://i.imgur.com/t3HhT4J.png)

4. Getting errors were there should not be errors?

   1. Go to project root directory and run

   ```pwsh
   npm install --save-dev eslint-config-prettier eslint-plugin-prettier
   ```

   2. Edit the `.eslintrc` file

   ```pwsh
   {
   "extends": ["airbnb", "prettier"],
   "plugins": ["prettier"],
   "rules": {
    "prettier/prettier": ["error"]
   }
   }
   ```

5. Run `eslint` to manually lint all files

```pwsh
npx eslint src/*
```

**Not working?**

1. Delete the folder `node_modules` from the directory (Backend or Frontend)
2. Delete the `package-lock.json` from the same directory
3. Install all packages

```pwsh
npm install
```

4. Try again with

```pwsh
npx eslint src/*
```
