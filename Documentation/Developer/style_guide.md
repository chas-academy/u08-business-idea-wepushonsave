# Developer styleguide and instructions

_This document is intended for the developers on how to work within the frame and our styleguide_

#### Our Stack

_This styleguide is made for typescript in both front and backend_

- ESLint _for linting_
- Airbnb _as standard_
- Prettier _for formatting_

_Quick-tip, run eslint_

```pwsh
npm run lint
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

4. **LAST RESORT** Getting errors were there should not be errors?

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
npm run lint
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
npm run lint
```

# Bypass lint error for _variable: any_

```ts
/* eslint-disable  @typescript-eslint/no-explicit-any */
```

_By adding this line at the top of the file, it will automaticly cancel out all error made by an any type. This is not good practice but i found it useful when writing try-catch blocks._

```ts
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = "mongodb://localhost:27017/MTGVault";
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    console.log("Connection failed");
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB();
```

[Read more here - Support](https://discord.com/channels/1234413826938765422/1239922385554112623/1239923352249040976)
