import Header from './Header.js'
import Description from './Description.js'
import logo from './assets/logo.png'
import './css/banner.css'
export default function Banner()
{ 
  return(
    <div>
      <Header  title="Baby Toys"/>
      <img src={logo} alt="Toys for baby" className="logo"/>
      <Description slogan="enjoy playing"/>
    </div>
    )
}