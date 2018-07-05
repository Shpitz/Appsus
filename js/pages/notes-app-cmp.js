import noteList from '../cmps/notes-cmps/note-list-cmp.js'
import editNote from '../cmps/notes-cmps/edit-note-cmp.js'
import noteService from '../services/note-service.js'


export default{
    template:`
    <section>
        <h1>hello notes</h1>
        {{notes}}
        <!-- this is where we send the notes prop to the note list -->
        <note-list :notes="notes"></note-list>

    </section>
    
    `,
    data(){

        return {
            notes: []
        }
    },
    created() {
        noteService.getNotes()
        .then(notes => this.notes = notes)
    },
    components: {
        noteList,
        editNote,
        noteService
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