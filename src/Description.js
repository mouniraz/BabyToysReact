import "./css/description.css"
export default function Description (props)
{ const slogan=props.slogan

  return (<h2 className="slogan"> {slogan}</h2>)
  //return (<h2 style={styleSlogan}> {slogan}</h2>)
}