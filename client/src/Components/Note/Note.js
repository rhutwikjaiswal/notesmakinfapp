import React,{useState} from 'react'
import './Note.css';
import Axios from 'axios';

const Note = (props) => {

const [text, setText] = useState('');
const [time, setTime] = useState('');


const saveNote = ()=>{
  Axios.post('http://localhost:3001/save',{
    text:text,
     time:time
    }).then(()=>{
      alert('Saved')
    })
};

const formatDate =(value)=>{
    if(!value) return "";

    const date = new Date(value);
    const monthNames = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];

    let hrs =date.getHours()
    let amPm = hrs>12?"PM":"AM"
    hrs=hrs?hrs:'12'
    hrs = hrs > 12 ?( hrs = 24 - hrs) : hrs

    let min = date.getMinutes()
    min = min < 10 ? "0" + min : min;

    let day = date.getDate()

    const month = monthNames[date.getMonth()]  

    return `${hrs}:${min} ${amPm} ${day} ${month}`;

    }
  return (
   <div className="note">
    <textarea className="note_text" defaultValue={props.note.text} onChange={(e)=>{setText(e.target.value)}}/>
    <div className="noteFooter">
    <p onChange={(e)=>{setTime(formatDate(props.note.time))}}>{formatDate(props.note.time)}</p>
   <button onClick={()=>props.deleteNote(props.note.id)}><i className="zmdi zmdi-delete"></i></button> 
   <button onClick={saveNote}><i class="zmdi zmdi-file-plus"></i></button>
    </div>
   </div>
  ) 
}

export default Note;
