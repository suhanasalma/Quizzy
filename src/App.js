
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import QuizzSection from './Components/QuizzSection/QuizzSection';
import Main from './Layers/Main'
import Blog from './Components/Blog/Blog'
import Static from './Components/Static/Static';
import ErrorRoute from './Components/ErrorRoute/ErrorRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            // console.log(params.id);
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <QuizzSection></QuizzSection>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/static",
          element: <Static></Static>,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorRoute></ErrorRoute>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
