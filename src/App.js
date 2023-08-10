import {NavBar} from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola"/>
    </>
  );
};

