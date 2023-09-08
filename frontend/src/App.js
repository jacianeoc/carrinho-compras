import { Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./hooks/useCart";
import {Home} from "./Pages/Home";
import {Cart} from "./Pages/Cart";
import  './index.css';


function App() {
  return (
      <CartProvider>
          <Routes>
              <Route>
                  <Route index element={ <Home/> }/>
                  <Route path="cart" element={ <Cart/> }/>
                  <Route path="*" element={ <NoMatch/> }/>
              </Route>
          </Routes>
      </CartProvider>

  );
}

export default App;

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}