
import React, { Fragment, useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";


 const App = () => {

const [addItem, setAddItem] =useState([]);

const addNote = (note)=>{
  setAddItem((prevData)=>{
   return [...prevData, note];
   
})

}
const onDelete = (id) =>{

  setAddItem((prevData)=>
    prevData.filter((currData,indx) =>{
      return indx !== id ;
    })
  )
}


  return (
    <Fragment>
    
    <Header />
    <CreateNote 
    passNote={addNote}/>
    

    <div className="new">
   { addItem.map((val,index)=>{
      return <Note 
      key ={index}
      id = {index}
      title = {val.title}
      content = {val.content}
      deleteItem = {onDelete}
      />
    })}
    </div>
    <Footer />
   
    </Fragment>
  )
}


export default App;