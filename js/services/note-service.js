import storageService from "./storage-service.js";
import utilsService from "./utils-service.js";

var NOTES_KEY = 'NOTES_KEY';

var notes = [{
    id: utilsService.makeid(),
    title: 'feed the dog',
    txt: 'he must ead bonzo',
    img: '',
    todos: [],
    bgColor: '#add8e6',
    isPinned: false
},
{
    id: utilsService.makeid(),
    title: 'shopping',
    txt: 'puki lapushner',
    img: '',
    todos: [
            {title: 'deress', completed: false},
            {title: 'flowers', completed: false},
            {title: 'cookies', completed: false}
            ],
    bgColor: '#ffa500',
    isPinned: false
},
{
    id: utilsService.makeid(),
    title: 'at the Eurovision',
    txt: 'SO EXCITEDDDDDD!!!!',
    img: '../img/itzik.jpg',
    todos: [],
    bgColor: '#90ee90',
    isPinned: false
}
]


function createEmptyNote() {
    return {
        id: '',
        title: '',
        txt: '',
        img: '',
        todos: [],
        bgColor: '#ffffff',
        isPinned: false
    };
}

function addNote(note) {
    if (note.id) {
        console.log('note.id: ', note.id);
        var noteIdx = notes.findIndex(currNote => currNote.id === note.id);
        // notes[noteIdx] = note;
        notes.splice(noteIdx, 1, note)
    } else {
        note.id = utilsService.makeid()
        notes.unshift(note);
    }
    storageService.store(NOTES_KEY, notes)
}

function getNotes() {
    var loadNotes = storageService.load(NOTES_KEY)
    if (!loadNotes) {
        console.log(notes);
        return Promise.resolve(notes)
    } else {
        notes = loadNotes
        return Promise.resolve(notes)
    }

}

function deleteNote(note) {
    if (note.id) {
        var noteIdx = notes.findIndex(currNote => currNote.id === note.id);
        notes.splice(noteIdx, 1);        
    }
    storageService.store(NOTES_KEY, notes)
}

// function pinNote(note) {

// }

//כל פונקציה שבאקספורט צריכה להחזיר פרומיס על מנת שהאפליקציה תהיה אסינכרונית
export default {
    getNotes,
    createEmptyNote,
    addNote,
    deleteNote,
    // pinNote,
}
