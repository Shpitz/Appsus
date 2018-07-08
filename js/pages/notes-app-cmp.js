import noteList from '../cmps/notes-cmps/note-list-cmp.js'
import editNote from '../cmps/notes-cmps/edit-note-cmp.js'
import noteService from '../services/note-service.js'
import addNote from '../cmps/notes-cmps/add-note-cmp.js'
import noteFilter from '../cmps/notes-cmps/note-filter-cmp.js'


export default {
    template: `
    <section class="notes-app">
        <note-filter @filtered="setFilter"></note-filter>
        <add-note @save-note="saveNote" 
        @delete-note="deleteNote" 
        @cancel-note="cancelNote" 
        @pin-note="pinNote" 
        @unpin-note="unPinNote"
        ></add-note>
        
        <edit-note v-if="this.selectedNote"
                    :selectedNote="selectedNote" 
                    @save-note="saveNote" 
                    @delete-note="deleteNote" 
                    @cancel-note="cancelNote" 
                    @pin-note="pinNote" 
                    @unpin-note="unPinNote"
                    ></edit-note>
                    
        <!-- this is where we send the notes prop to the note list -->

        <note-list :notes="notesToShow" @note-selected="setSelectedNote" class="notes-list"></note-list>

        <pre>{{notes}}</pre>

    </section>
    
    `,
    data() {
        return {
            notes: {},
            selectedNote: null,
            filter: null,
            pinned: 0,

        }
    },
    created() {
        //on load, the data is retrieved by this function. the data is created when the component is called
        noteService.getNotes()
            .then(loadNotes => this.notes = loadNotes)
            console.log('notes: ', this.notes);
    },
    computed: {
        notesToShow: function () {
            if (!this.filter) {
                return this.notes;
            } else if (this.filter.img) {
                return this.notes.filter(note => {
                    return note.img
                })
            } else if (this.filter.list) {
                return this.notes.filter(note => {
                    return note.todos.length > 0
                })
            }
            return this.notes.filter(note => {
                return (note.title.includes(this.filter.txt.toLowerCase()) ||
                 note.txt.includes(this.filter.txt.toLowerCase()))
            })
        },
       
    },
    methods: {
        saveNote(note) {
            noteService.addNote(note);
            this.selectedNote = null;
            
        },
        setSelectedNote(note) {
            this.selectedNote = note;
            console.log('selected note: ', note);
        },
        deleteNote(note) {
            noteService.deleteNote(note)
            this.selectedNote = null;
        },
        cancelNote(note) {
            this.selectedNote = null;
        },
        setFilter(value) {
            this.filter = value;
        }, 
        pinNote(note) {
            this.pinned ++;
        },
        unPinNote(note) {
            this.pinned --;
        }
    },
    components: {
        noteList,
        editNote,
        noteService,
        addNote,
        noteFilter
    }
}
