import "./App.css";
import LoginScreeen from "./AuthScreens/LoginScreeen";
import SignupScreen from "./AuthScreens/SignupScreen";
import HomeMain from "./HomeMain";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeMain />,
    },
    {
      path: "/login",
      element: <LoginScreeen />,
    },
    {
      path: "/signup",
      element: <SignupScreen />,
    },
    {
      path: "/login",
      element: <LoginScreeen />,
    }, 
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
