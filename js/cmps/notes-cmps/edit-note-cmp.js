import noteTxt from './note-txt-cmp.js'
import noteImg from './note-img-cmp.js'
import noteTodos from './note-todos-cmp.js'
import noteEditor from './note-editor-cmp.js'
import addNote from './add-note-cmp.js'

export default {
    props: ['selectedNote'],
    template: `
    <section class="edit-note" @click="cancelNote">
        <add-note v-if="selectedNote" 
        :selectedNote="selectedNote" 
        @save-note="saveEditedNote" 
        @delete-note="deleteNote" 
        @cancel-note="cancelNote" 
        @pin-note="pinNote" 
        @unpin-note="unPinNote"
        @click.native.stop
        ></add-note>
    </section>
    
    
    `,
    methods: {
        saveEditedNote(editedNote) {
            this.$emit('save-note', editedNote)
        },
        deleteNote(editedNote) {
            this.$emit('delete-note', editedNote)
        },
        cancelNote(ev) {
            // if(ev.path[0].classList[0] !== 'edit-note') return
            this.$emit('cancel-note')
        },
        pinNote(editedNote) {
            this.$emit('pin-note', editedNote)
        },
        unPinNote(editedNote) {
            this.$emit('unpin-note', editedNote)
        },
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteEditor,
        addNote
    }
}