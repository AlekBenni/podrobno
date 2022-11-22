
type AccordionPropsType = {
  title: string;
  collapsed: Boolean
}

function Accordion(props:AccordionPropsType){
  return(
    <div>
      <AccordionHeader title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )  
}

function Accordion1(props:AccordionPropsType) {
        if(props.collapsed === true){     
          return(
            <div>
              <AccordionHeader title={props.title}/>
            </div>
          )              
        }else{
          return(
            <div>
              <AccordionHeader title={props.title}/>
              <AccordionBody/>
            </div>
          )   
        }
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