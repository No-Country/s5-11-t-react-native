import { Provider } from "react-redux";
import Navigation from "./Navigation";
import { store } from "./src/redux/store";
import { TablesContextProvider } from "./src/context/TablesContext";
import { CartContextProvider } from "./src/context/CartContext";
export default function App() {
  return (
    <>
    <TablesContextProvider>
      <CartContextProvider>
        <Provider store={store}>
            <Navigation />
        </Provider>
      </CartContextProvider>
    </TablesContextProvider>

     
    </>
  );
}
