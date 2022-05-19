import React from "react";

function Main(props){
    function updateOneNote(event){
        const {name, value}=event.target
        props.updateOneNoteInAllNotes({
            ...props.activeNoteObj,
            lastModified: Date.now(),
            [name]: value
        })
    }

    if(!props.activeNoteObj){
        return (
            <div className="no-active-note">No note selected</div>
        )
    }

    else{
        return(
            <div className="app-main">
                <div className="app-main-note-edit">
                    <input 
                        type="text" 
                        name="title" placeholder="Title.."
                        value={props.activeNoteObj.title}
                        onChange={updateOneNote}
                    />
                    <textarea 
                        name="body" placeholder="Write your note here ..."
                        value={props.activeNoteObj.body}
                        onChange={updateOneNote}
                    />
                        
                </div>
                <div className="app-main-note-preview">
                    <h1 className="preview-title">{props.activeNoteObj.title}</h1>
                    <div className="markdown-preview">{props.activeNoteObj.body}</div>
                </div>
            </div>
        )
    }
}

export default Main;