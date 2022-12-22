import { createBrowserRouter,RouterProvider  } from "react-router-dom";
import { ROUTES } from "./routes/route"


function App() {
  let router = createBrowserRouter(ROUTES)
  return (
    <RouterProvider router={router} />
  );
}

export default App;
