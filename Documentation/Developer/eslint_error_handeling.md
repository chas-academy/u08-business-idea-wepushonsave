# Errors that might occure when linting

## Frontend (React)

---

#### `error  'card' is missing in props validation    react/prop-types`

**Problem:**
_I want to pass a useState to a child component_

```ts
const [card, setCard]: any = useState(); // my useState (API call)

return <CardImage card={card.image_uris.border_crop}></CardImage>; // my prop (an image string ("url"))
```

**Solution**

1. _To specify what data type the prop will have we have to make a `type` to specify it as a string_
2. _Import `PropsWithChildren` and use the `type` -> `card` datatype as our value_

```ts
import { PropsWithChildren, ReactElement } from "react";

type CardProps = {
  card: string;
};

const CardImage = ({ card }: PropsWithChildren<CardProps>): ReactElement => {
  return (
    <>
      <div>
        <img src={card} alt="" />
      </div>
    </>
  );
};
```

---

#### `error  'React' must be in scope when using JSX   react/react-in-jsx-scope`

**Solution:**

1. _Import React into the component_
   **NOT POSSIBLE FOR DEPLOYMENT**

```ts
import React from "react";
```

---
