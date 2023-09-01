import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/itemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main className="relative flex justify-center flex-col inset-y-24 pb-32">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenido" />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Categorias" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={404} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
