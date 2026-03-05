import { useState } from 'react'
import './App.css'
import React from 'react';
import Note from './note';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", text: ""});

  const addNote = (e) => {
    e.preventDefault();
    if (newNote.title.trim() !== "" && newNote.text.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote({ title: "", text: "" })
    }
    else alert("Veuillez saisir toutes les champs du formulaire")
  }

  const deleteNOte = (indexASupprimer) => {
    // Le premier argument (_) est l'objet note (on ne s'en sert pas ici)
    // Le deuxième argument (i) est l'index automatique du tableau
    const contenuApresSuppression = notes.filter((_, i) => i !== indexASupprimer);
    setNotes(contenuApresSuppression);
  }

  const modifNote = (indexAModifier, noteAModifier) => {
    const updatedNotes = notes.map((note, index) =>
    index === indexAModifier ? { ...note, ...noteAModifier } : note
  );
  setNotes(updatedNotes);
  }



  return (
    <>
      <div className='min-h-screen flex items-center justify-center m-0 p-0'>
        <div className=' py-2 w-3/6 '>
          <h1 className='text-4xl font-semibold'>NOte App</h1>
          <p className='text-xs text-gray-400 underline'><span>by Labex.io</span></p>

          <div className='bg-gray-100 border border-gray-300 my-4 rounded-md px-8 py-4 shadow-lg'>
            <form action="" className='flex flex-col justify-center'>
              <input 
              type="text"
              className=' border border-gray-300 px-2 py-1 rounded-sm w-full text-black hover:shadow-sm transition-all'
              placeholder='Titre'
              value={newNote.title}
              onChange={(e) => setNewNote({...newNote, title : e.target.value })}
               />
               <textarea 
               rows="4"
               className=' border border-gray-300 px-2 py-1 rounded-sm w-full text-black my-4 hover:shadow-sm transition-all'
               placeholder='Text'
               value={newNote.text}
               onChange={(e) => setNewNote({...newNote, text: e.target.value })}
               ></textarea>

               <div className='flex justify-center'>
                <button className='border border-blue-400 bg-blue-300 w-1/6 py-1 rounded-sm font-semibold cursor-pointer transform transition-all duration-300 hover:scale-105' onClick={addNote}>Ajouter note </button>
               </div>
            </form>
          </div>

          <div className='grid grid-cols-3 gap-x-3 gap-y-4 bg-white pt-4'>
            {notes.map((note, index) => (
              // On utilise l'index pour la clé, et l'objet note pour le reste
              <Note key={index} showNote={note} onDelete={() => deleteNOte(index)} myindex={index} onSave={modifNote}/>
            ))}
          </div>
        </div>


      </div>
    </>
  )
}

export default App
