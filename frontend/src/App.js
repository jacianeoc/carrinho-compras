
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import {Home} from "./Pages/Home";
import {Cart} from "./Pages/Cart";

function App() {
  return (
      <Routes>
          <Route>
              <Route index element={ <Home/> }/>
              <Route path="cart" element={ <Cart/> }/>
              <Route path="*" element={ <NoMatch/> }/>
          </Route>
      </Routes>
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