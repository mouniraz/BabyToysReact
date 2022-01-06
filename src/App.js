import "./css/styles.css";
import React from "react";
import Banner from "./Banner.js";
import ShoppingList from "./ShoppingList.js";
import Cart from "./Cart.js";
import products from "./data/productList.js";

const App = () => {
  return (
    <div>
      <Banner />
      {/*<Cart/>*/}
      <ShoppingList products={products} />
    </div>
  );
};
export default App;
/*
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <h2>Test Comonent</h2>
      </div>
    );
  }
}*/
