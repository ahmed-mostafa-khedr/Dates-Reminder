import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import {useState ,useEffect}from 'react'
import {person} from './personsData'
import {HeaderComp} from './components/header'
import {MainComp} from './components/dates'
import {FooterComp} from './components/footer'





function App() {

const [Data,setData]=useState(person)

useEffect(()=>{
  setData([person[person.length-1]])
},[])

const Deleting=()=>{
  setData([])
}
const View=()=>{
  setData(person)
}

  return (
    
   <div className="container font">

    <HeaderComp person={Data}/>
      
     <MainComp person={Data}/>

      <FooterComp onDelete={Deleting} Viewer={View}/>

    </div>
    
  )
  
}
export default App;
