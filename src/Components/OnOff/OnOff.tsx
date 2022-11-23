import { useState } from "react"

type OnOfPropsType = {
    // value: boolean;
}

function OnOff(props:OnOfPropsType){
    let [on, setOn] = useState(true);
    return(
        <div className="d-flex justify-content-center align-items-center mb-3">
            <div onClick={() => {setOn(true)}} className={on ? "border rounded px-5 py-2 bg-success text-white" : "border rounded px-5 py-2"}>On</div>
            <div onClick={() => {setOn(false)}} className={on ? "border rounded px-5 py-2" : "border rounded px-5 py-2 bg-danger text-white"}>Off</div> 
            <div onClick={() => {setOn(!on)}} className={on ? "border rounded-circle bg-success h-25 p-3 ms-3" : "border rounded-circle bg-danger h-25 p-3 ms-3"}></div> 
        </div>
        
    )
}

export default OnOff