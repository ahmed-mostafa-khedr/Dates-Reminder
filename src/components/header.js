



export const HeaderComp= ({person})=>{
    
    return(
    <div className="row justify-content-center py-5">
     <div className='col col-8  py-1 address '>{person.length === 0 ? "لا توجد لديك مواعيد" : ` لديك  ${person.length} مواعيد `}</div>
    </div>)
}