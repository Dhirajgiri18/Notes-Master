import React, { Fragment, useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (Props) => {

  const [expand,setExpand]  = useState(false);

  const[note,setNote] = useState({
     title:"",
     content:"",
  })


  const inputEvent = (event) =>{

       const{name,value} = event.target;


      setNote((prevData) =>{
        return{
              ...prevData,
              [name] : value,
        }
      })
  }

  const addEvent= () =>{

    Props.passNote(note);
    setNote({
    title:"",
     content:"",
    })
  }
  const expandIt = () =>{
    setExpand(true);
  }
  
  const btoNormal = () =>{
    setExpand(false);
  }

  return (
    <Fragment>
    <div className="main_note" onDoubleClick={btoNormal}>
    
    <form> 
    
   { expand ?(
    <input type="text"  value={note.title} name="title" onChange={inputEvent}
    placeholder="Title" autoComplete="off"/>
   ) : null}
    <textarea  rows="" column="" value={note.content} name="content" onChange={inputEvent} 
    placeholder="...Write your Note" onClick={expandIt} ></textarea>
    {expand ?( <Button className="plus_sign" onClick={addEvent}>
     <AddIcon />
    </Button>
    ): null}
    </form>
    </div>
    
    
    </Fragment>
  )
}

export default CreateNote