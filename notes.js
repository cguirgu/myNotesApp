const fs = require("fs");

const listNotes = () => {
  const notes = loadNotes();
  console.log("Your notes:".blue.underline.italic);
  notes.forEach((note) => {
    console.log("- " + note.title);
  });
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("Note added!".green);
  } else {
    console.log("Note title taken!".red);
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const theNote = notes.find((note) => note.title === title);
  if (theNote){
      console.log(theNote.title.underline)
      console.log(theNote.body)
  }else{
      console.log('Note not found!'.red)
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const keptNotes = notes.filter((note) => note.title !== title);
  if (notes.length > keptNotes.length) {
    console.log("Note removed!".green);
    saveNotes(keptNotes);
  } else {
    console.log("No note found".red);
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
