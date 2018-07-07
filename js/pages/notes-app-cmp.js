import noteList from '../cmps/notes-cmps/note-list-cmp.js'
import editNote from '../cmps/notes-cmps/edit-note-cmp.js'
import noteService from '../services/note-service.js'
import addNote from '../cmps/notes-cmps/add-note-cmp.js'


export default{
    template:`
    <section>
        <add-note v-on:save-note="saveNote"></add-note> 
        <edit-note v-if="this.selectedNote" :selectedNote="selectedNote"></edit-note>
        <!-- this is where we send the notes prop to the note list -->
        <note-list :notes="notes" v-on:note-selected="setSelectedNote"></note-list>
        <pre>{{notes}}</pre>

    </section>
    
    `,
    data(){

               
        return {
            notes: [],
            selectedNote: null,
          
        }
    },
    created() {
        //on load, the data is retrieved by this function. the data is created when the component is called
        noteService.getNotes()
        .then(notes => this.notes = notes)
        console.log('selected note at created: ', this.selectedNote);
        
    },
    methods: {
        saveNote(note) {
            console.log(note.id);
            debugger
            noteService.addNote(note);
            this.selectedNote = null;
        },
        setSelectedNote(note) {
            console.log('Parent got a selected note from note-list:', note);
            this.selectedNote = note;          
        }
    },
    components: {
        noteList,
        editNote,
        noteService,
        addNote
    }
}



// export default {
//     template: `
//     <section>
//     <h1>hello</h1>
//     <email-list v-if="emails" :emails="emails"></email-list>
//     <email-details :email="selectedEmail"></email-details>
//     </section>
    
//     `,
//     data() {
//         return {
//             emails: {},
//             selectedEmail: null,
//         }
//     },
//     created() {
//         emailService.getEmails()
//             .then((loadEmails) => {
                
//                 this.emails = loadEmails
//             })
//     },
//     computed: {
//         emailsToDiplay() {
//             return this.emails
//         }
//     },
//     components: {
//         emailList,
//         emailDetails,
//     }
// }