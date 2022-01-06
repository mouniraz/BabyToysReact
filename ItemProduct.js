import produit from "./assets/velo.jeg"
import "./"
export default function ItemComponent()
{
  return(
<div className="card">
    <img src={produit} alt="produit"  className="cover"/>
    <div className="container">
      <h4><b> Name</b></h4> 
      <p>
      100 EUR
          
  </p> 
    </div>
  </div>
  )
}