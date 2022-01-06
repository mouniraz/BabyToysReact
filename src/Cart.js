
export default function Cart()

{ const products=[{id:1,name:"Miraculous Toys",price:10},
                  {id:2,name:"Velo",price:100},
                  {id:3,name:"Ballon",price:10}]

  const list=products.map((element)=>
    <li key={element.id}>{element.name} {element.price} Eur</li>
   )
   let Sum=0;
   products.forEach((element)=>Sum+=element.price)
  return(
  <div>
  <ul>
    {list}
  </ul>
  <div> Total:{Sum}</div>
  </div>
    )
}