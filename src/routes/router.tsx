import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Artistas from "../pages/Artistas";
import Contato from "../pages/Contato";
import Eventos from "../pages/Eventos";
import Filmes from "../pages/Filmes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/eventos", element: <Eventos /> },
      { path: "/artistas", element: <Artistas /> },
      { path: "/filmes", element: <Filmes /> },
      { path: "/contato", element: <Contato /> }
    ],
  },
]);
