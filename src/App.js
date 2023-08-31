import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/itemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting="Hola como estas" /> } />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={ <ItemDetailContainer /> } />
          <Route path="*" element={404} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
