import { React, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import List from "./Components/List";
import Detail from "./Components/Detail";

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Header count={count} cartItems={cartItems} />
      <main>
        <Switch>
          <Route exact path="/">
            <List
              setCount={(val) => {
                //Counter Increment
                setCount(count + 1);
                //Add Items to cart
                if (cartItems.length === 0) {
                  cartItems.push(val);
                } else {
                  const ProductExist = cartItems.find(
                    (item) => item.id === val.id
                  );
                  //console.log(ProductExist);
                  if (ProductExist) {
                    setCartItems(
                      cartItems.map((item) =>
                        item.id === val.id
                          ? {
                              ...ProductExist,
                              quantity: ProductExist.quantity + 1,
                            }
                          : item
                      )
                    );
                  } else setCartItems([...cartItems, { ...val, quantity: 1 }]);
                }
                //console.log(cartItems);
              }}
            />
          </Route>

          <Route exact path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
