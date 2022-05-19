import React from "react"
import uuid from "react-uuid"
import './App.css';
import Main from "./components/Main.js"
import Sidebar from "./components/Sidebar.js"

function App() {

  const [notes, setNotes] = React.useState([]);
  
  const [activeNote,setActiveNote] = React.useState(false);

  function addNewNote(){
    const newNote ={
      id: uuid(),
      title:"Untiteled",
      body:"",
      lastModified: Date.now()
    }
    setNotes((currentNotes)=>{
      return ([newNote,...currentNotes])
    })
  }

  function deleteANote(idToDelete){
    setNotes(notes.filter((note)=>{
      return note.id!==idToDelete && note
    }))
  }

  function findActiveNoteObject(){
    return notes.find((note)=>{
      return activeNote===note.id && note
    })
  }

  function updateOneNoteInAllNotes(updateNote){
    const newNotesArray = notes.map((currentNote)=>{
      if(currentNote.id===activeNote){
        return updateNote
      }
      else{
        return currentNote
      }
    })
    setNotes(newNotesArray);
  }

  return (
    <div className="App">
      <Sidebar
      notes={notes}
      addNewNote={addNewNote}
      deleteANote={deleteANote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
      <Main
      activeNoteObj={findActiveNoteObject()}
      updateOneNoteInAllNotes={updateOneNoteInAllNotes}
      />
    </div>
  );
}

export default App;
