
type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

function Rating(props:RatingProps){
  return (
    <div className="border border-3 border-danger rounded p-3">
      <Star selected={props.value > 0} />
      <Star selected={props.value >1} />
      <Star selected={props.value >2} />
      <Star selected={props.value >3} />
      <Star selected={props.value >4} />
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