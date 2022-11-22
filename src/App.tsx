import './App.css';
import Accordion from './Components/Accordion/Accordion';
import OnOff from './Components/OnOff/OnOff';
import Rating from './Components/Rating/Rating';

function App() {

  return (
    <div>
      <PageTitle title={'This page is App Header'} />
      <div className='container'>
        {/* <h2>Article 1</h2>
          <Rating value={1} />
        <h2>Article 2</h2>
          <Rating value={2}/>
        <h2>Article 3</h2>
          <Rating value={3}/>  
          <h2>Article 4</h2>
          <Rating value={4}/>
        <h2>Article 5</h2>
          <Rating value={5}/>  
    <Accordion title={"Accordion App"} collapsed={true}/>    
    <Accordion title={"Accordion User"} collapsed={false}/>  */}
    <OnOff value={true}/>
      </div>
    </div>
  );

}

type PageTitlePropsType = {
  title:string
}

function PageTitle (props:PageTitlePropsType){
  return (
    <div className='alert bg-dark text-white text-center'>
      <h1>{props.title}</h1>
    </div>
  )
}

export default App;
