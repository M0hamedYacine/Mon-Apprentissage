import React, { useState } from "react";

const Note = ({ showNote, onDelete, myindex, onSave }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [newEdit, setNewEdit] = useState(showNote)

  const sauvegarde = () => {
    onSave(myindex, newEdit);
    setIsEditing(false);
  }

  return (
    <>

      {isEditing? (
        <div className='bg-gray-100 px-1 py-1 border border-gray-300 rounded-sm w-full shadow-md transition-all'>
        <div className='flex justify-between px-1 mb-2'>
          <input type="text" 
          className="w-full border border-gray-300 rounded-sm py-1 px-2 my-1 hover:shadow-sm text-gray-600" 
          value={newEdit.title}
          onChange={(e) => setNewEdit({...newEdit, title: e.target.value})}/>
        </div>
      <textarea rows="2" className=" border border-gray-300 rounded-sm  px-2 hover:shadow-sm text-gray-600 mx-1" value={newEdit.text} onChange={(e) => setNewEdit({...newEdit, text  : e.target.value})}></textarea>
      <button className='px-4 my-2 mx-2 border bg-blue-200 hover:bg-blue-300 font-semibold rounded-xs hover:text-blue-600 transition-colors duration-300 cursor-pointer' onClick={sauvegarde}>Sauver</button>
      </div>
      ) : (
        <div className='bg-gray-100 pl-2 py-1 border border-gray-300 rounded-sm w-full hover:shadow-md transition-all'>
        <div className='flex justify-between px-2 mb-2'>
          <h1 className='text-xl font-bold text-blue-600'>{ showNote.title }</h1>
          <button className='font-light px-2 py-1 border border-gray-400 rounded-md hover:bg-red-300 hover:border-red-500 transition-colors' onClick={onDelete}>Suprimer</button>
        </div>
      <p className='text-sm px-2 font-light text-justify'>
        { showNote.text }
      </p>
      <button className='px-4 my-2 mx-2 border bg-blue-200 hover:bg-blue-300 font-semibold rounded-xs hover:text-blue-600 transition-colors duration-300 cursor-pointer' onClick={() => setIsEditing(true)}>Modifier</button>
      </div>
      )}

      
    </>            
  )
}

export default Note;