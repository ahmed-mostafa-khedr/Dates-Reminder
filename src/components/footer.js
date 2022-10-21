import {Button} from "react-bootstrap";



export const FooterComp=({onDelete, Viewer})=>{
    return(
        <div className="row justify-content-center py-2">

        <div className='col col-5 d-flex justify-content-between'>
          <Button className='btn  col mx-5 btn-view ' onClick={Viewer}>  عرض المواعيد</Button>
          <Button className='btn col mx-5 btn-danger ' onClick={onDelete}>  مسح الكل </Button>
        </div> 
  
      </div>
        )
}