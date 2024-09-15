import React, { Fragment } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

 


const Note = (props) => {

  const deleteNote = () =>{
   props.deleteItem(props.id);
  
  }
  return (
   <Fragment>
   <div className="note">
   <h1>{props.title} </h1>
   <br/>
   <p>{props.content}</p>
   <button className="btn" onClick={deleteNote}>
   <DeleteOutlineIcon className="deleteicon"/>
   </button>
   </div>
   </Fragment>
  )
}

export default Note