import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import ErrorPage from "./components/404";
import Skelletton from "./components/structure/Skelletton";
import Spells from "./components/spells/Spells";
import SpellInfo from "./components/spells/SpellInfo";
import Monsters from "./components/monsters/Monsters";
import MonsterInfo from "./components/monsters/MonsterInfo";
import Classes from "./components/classes/Classes";

const router = createBrowserRouter([
  {
    path: "/DnDCompendium/",
    element: <Skelletton />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "spells",
        element: <Spells />,
        children: [
          {
            index: true,
            element: <div></div>,
          },
          {
            path: ":spellIndex",
            element: <SpellInfo />,
          },
        ],
      },

      {
        path: "monsters",
        element: <Monsters />,
        children: [
          {
            index: true,
            element: <div></div>,
          },
          {
            path: ":monsterIndex",
            element: <MonsterInfo />,
          },
        ],
      },

      {
        path: "classes",
        element: <Classes />, //TODO Children:
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
