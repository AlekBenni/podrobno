import { useState } from "react";


function Rating(){
  let [value, setValue] = useState(0);
  return (
    <div className="border border-3 border-danger rounded p-3">
      <Star selected={value > 0} /><button onClick={() => {setValue(1)}} type="button" className="btn btn-success me-3">+</button>
      <Star selected={value >1} /><button onClick={() => {setValue(2)}} type="button" className="btn btn-success me-3">+</button>
      <Star selected={value >2} /><button onClick={() => {setValue(3)}} type="button" className="btn btn-success me-3">+</button>
      <Star selected={value >3} /><button onClick={() => {setValue(4)}} type="button" className="btn btn-success me-3">+</button>
      <Star selected={value >4} /><button onClick={() => {setValue(5)}} type="button" className="btn btn-success me-3">+</button>
    </div>
  )  
  }
  
  type StartPropsType = {
    selected: boolean;
  }

  function Star(props:StartPropsType){
    if(props.selected === true){
        return (
            <span><b>star </b></span>
        )
    }else
    return (
        <span>star </span>
    )
  }

  export default Rating;