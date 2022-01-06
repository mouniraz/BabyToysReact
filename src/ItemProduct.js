import produit from "./assets/velo.jpg"
import "./css/itemproduct.css"
import sale from "./assets/sales.png"
export default function ItemProduct(props)
{ const product=props.product||{}
  return(
<div key={product.id}className="card">
    <img src={product.cover} alt={product.name}  className="cover"/>
    <div className="container">
      <h4><b> {product.name}</b></h4> 
      <div>
      {product.price} EUR
      {product.isSaled && 
      <img src={sale} alt="sale" className="sale"/>}

  </div> 
    </div>
  </div>
  )
}