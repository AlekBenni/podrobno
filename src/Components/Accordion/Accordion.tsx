import { useState } from "react";

type AccordionPropsType = {
  title: string;
}

function Accordion(props:AccordionPropsType){
  let [collapsed, setCollapsed] = useState(true)
  return(
    <div>
      <AccordionHeader title={props.title}/>
      <button onClick={() => {setCollapsed(!collapsed)}} type="button" className="btn btn-primary">{collapsed ? "Свернуть" : "Развернуть"}</button>
      {collapsed ? <AccordionBody/> : <></>}
    </div>
  )  
}

  type AccordionHeaderPropsType = {
    title: string
  }
  
  function AccordionHeader(props:AccordionHeaderPropsType){
    return (
      <h3 className="text-success pt-5">{props.title}</h3>
    )
  }
  
  function AccordionBody(){
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }

  export default Accordion;