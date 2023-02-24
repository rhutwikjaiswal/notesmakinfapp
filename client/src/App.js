import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import React,{useState} from 'react';

function App() {

const [notes, setNotes] =useState([]);

const addNote = ()=>{
  const tempNote = [...notes];

  tempNote.push({
    id:Date.now(),
    text:"",
    time:Date.now()
  });
  setNotes(tempNote);
}

const deleteNote = (id)=>{
  const tempNotes = [...notes];

  const index = tempNotes.findIndex(item => item.id===id)

  if(index<0)return

  tempNotes.splice(index,1);
  setNotes(tempNotes);

};

  return (
    <div className="App">
      <Navbar addNote={addNote}/>
      <NoteContainer notes={notes}  deleteNote={deleteNote}/>
    </div>
  );
}

export default App;
