# Route with `React Route`

**[React Route Officiall Documentation](https://reactrouter.com/en/main/routers/picking-a-router)**

_This documentation will take tyou threw how i have structured my routes for a single card._
_I will start at the top of my route tree and work my way out to the children and explain to the best of my ability_

## `main.tsx`

_It is in this file we declare what kind of route we want to use in the project. I have done this and you do not need to update it unless we change every route within the app_

```tsx
// All routs on the home page ar put in this function `router`
const router = createBrowserRouter(
  createRoutesFromElements(
    /**
     * <Route
     * @path = what URL is used to find this page/route
     * @element = the rout-destination and page
     * @loader = a way to give a component a specific function that will run on init
     */

    /**
     * Diffrent routes and how to spot them
     * @parentRoute <Route></Route> (Has children)
     * @regularRoute <Route /> (NO children)
     */
    <Route path="/" element={<RootLayout />}>
      <Route path="card" element={<CardLayout />} loader={singleCardLoader}>
        <Route
          path="test"
          element={<CardTestLegalities />}
          loader={singleCardLoader}
        />
      </Route>
    </Route>
  )
);

/**
 * This will run the router function on our main element
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
```

## Layouts

_A Layout acts as the shell and framework for the parent page/route_

```tsx
/**
 * Layout Component
 * @CardImage = in this case, this is the content that will show on @patch ="/card"
 * @Outlet = This is were all the child components will be when the URL changes
 * @NavLink = This element is equivelent to a href tag in html and contains a URI
 * -> @to in @NavLink = this is what we want to put at the end of our URI to render the child route.
 */
const CardLayout = () => {
  return (
    <>
      <div className="card-layout">
        <p>CardLayout</p>
        <CardImage />

        <div className="card-info-layout">
          <Outlet />
        </div>

        <nav>
          <NavLink to={"test"}>Test</NavLink> | {""}
          <NavLink to={"info"}>Info</NavLink> | {""}
          <NavLink to={"market"}>Market</NavLink> | {""}
          <NavLink to={"legalities"}>Legalities</NavLink>
        </nav>
      </div>
    </>
  );
};

export default CardLayout;
```

## View / Component

_How does this look like in the component?_

```tsx
/**
 * Import information passed with the route
 * @useLoaderData = Recives the @singleCardLoader from the route in `main.tsx`
 * @convertObjectToArray = is a `util` function to make it possible to map over API responses that are objects
 */
import { useLoaderData } from "react-router-dom";
import { convertObjectToArray } from "../../utils/convertObjectToArray";

/**
 * cardData = @useLoaderData = return @singleCardLoader
 * cardLegalities = convert the response from object to an array using @convertObjectToArray
 */
const CardTestLegalities = () => {
  const cardData: any = useLoaderData();
  const cardLegalities = convertObjectToArray(cardData.legalities);

  return <></>;
};

export default CardTestLegalities;
```
