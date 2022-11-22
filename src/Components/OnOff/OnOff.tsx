
type OnOfPropsType = {
    value: boolean;
}

function OnOff(props:OnOfPropsType){
    return(
        <div className="d-flex justify-content-center align-items-center">
            {props.value ? <div className="border rounded px-5 py-2 bg-success">On</div> : <div className="border rounded px-5 py-2">On</div>}
            {props.value ? <div className="border rounded px-5 py-2">Off</div> : <div className="border rounded px-5 py-2 bg-danger">Off</div>}
            {props.value ? <div className="border rounded-circle bg-success h-25 p-3 ms-3"></div> : <div className="border rounded-circle bg-danger h-25 p-3 ms-3"></div>}
        </div>
    )
}

export default OnOff