export const MainComp=({person})=>{
    
    return(
        
        <div className="row justify-content-center box ">
        <div className='col col-8 dates-box '>  
    
  {
  person.length ? (person.map((item)=> {
   
    return(
    
    <div key={item.id} className="mx-5 my-2 d-flex person">
        <img src="ahmed.jpg" alt='ahmed'/>
        <div className="con">
            <p className='me-5 my-auto name'>{item.name}</p>
            <p className='me-5  my-auto time'> {item.date}</p>
            
        </div> 
    </div> 
      
      
    )
  })):<p className='col text-danger text-center mt-5 h5 '></p>
  }
         
       </div>
        </div>
        
        
        
        )
}