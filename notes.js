const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your notes...'
}
const addNote = (title,body)=>{
    const notes = loadNotes()
 
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)        
   
 
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
    
    saveNotes(notes)
    console.log(chalk.green.inverse('New Note Added!'))
}else{
     console.log(chalk.red.inverse("Note Title Taken"))
}}
const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}


const removeNote =(title) => {
    
    mystring = "Removing note with title : "
    
    const notes = loadNotes()

    const notesToKeep = notes.filter((note)=>note.title !== title) 
         
    
    // const notesToKeep = notes.filter(function(note){
    //     return note.title !== title
    // })
    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse(mystring + title))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse("Title Not Found"))
        saveNotes(notesToKeep)
    } 
    
   
  
   
}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.rgb(255, 136, 0).bold('YOUR NOTES'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}
 
 
const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString() 
    return JSON.parse(dataJSON)
        } catch (e){return []
    }
}

const readNotes = (title) => {
    const notes=loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note) {
        console.log(chalk.inverse(note. title))
        console.log(note.body)
    }
     else {
            console.log(chalk.red.inverse('TITLE NOT FOUND'))
    }
    }


    
module.exports = {
    getnotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes: readNotes 
    
}

