import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/itemListContainer";

export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola" />
      <div style={{ height: "150vh" }}></div>
    </>
  );
};
