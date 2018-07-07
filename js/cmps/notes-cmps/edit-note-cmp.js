import noteTxt from './note-txt-cmp.js'
import noteImg from './note-img-cmp.js'
import noteTodos from './note-todos-cmp.js'
import noteEditor from './note-editor-cmp.js'
import addNote from './add-note-cmp.js'

export default {
    props: ['selectedNote'],
    template: `
    <section>


        <add-note v-if="selectedNote" :selectedNote="selectedNote"></add-note>
    </section>
    
    
    `,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteEditor,
        addNote
    }
}