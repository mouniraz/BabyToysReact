import ItemProduct from "./ItemProduct.js";
export default function ShoppingList(props) 
{ const products=props.products||[];
  const list = products.map((element) => <ItemProduct product={element} />);
  return <ul>{list}</ul>;
}
