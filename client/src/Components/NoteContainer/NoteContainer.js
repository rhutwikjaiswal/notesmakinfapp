import React from 'react'
import Note from '../Note/Note'
import "./NoteContainer.css";

const NoteContainer = (props) => {


    const reverseArray = (arr)=>{
        const array=[];

        for(let i = arr.length - 1 ; i >= 0; --i){
            array.push(arr[i]);
        }
        return array;
    };

    const notes = reverseArray(props.notes);

  return (
    <div className='note-container'>
     <div className="addInput">
        </div> 
        <div className="note-container_notes custom-scroll">
        {
            notes.map((item)=>(
            <Note key={item.id} note={item} deleteNote={props.deleteNote}/>
            
            ))   
        }
      </div>
    </div>
  )
}

export default NoteContainer
