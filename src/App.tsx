import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './routes/layout';
import { Home } from './routes/home';
import { Detail } from './routes/detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ':type/:id',
        element: <Detail />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;