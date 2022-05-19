import React from "react";

function Sidebar(props){

    const renderNotes = props.notes.map((currentNote)=>{
        return(
            <div 
                className={`app-sidebar-note ${currentNote.id===props.activeNote && "active"}`} onClick={()=>{
                    props.setActiveNote(currentNote.id)
                }}
            >
                <div className="sidebar-note-title">
                    <strong>
                        {currentNote.title}
                    </strong>
                    <button onClick={()=>{props.deleteANote(currentNote.id)}}>
                        x
                    </button>
                </div>
                <p>{currentNote.body && currentNote.body.substr(0,20)+ "..."}</p>
               <small className="note-meta">
                    {new Date(currentNote.lastModified).toLocaleDateString("es-MX",{})}
                </small>
            </div>
        )
    })

    return(
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={props.addNewNote}>+</button>
            </div>
            <div className="app-sidebar-notes">
                {renderNotes}
            </div>
        </div>
    )
}

export default Sidebar;