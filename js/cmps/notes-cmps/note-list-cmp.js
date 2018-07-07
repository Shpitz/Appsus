
import notePreview from './note-preview-cmp.js'

export default {
    props: ['notes'],

    template: `
    <section>
        
         
<ul>

    <li v-for="note in notes" :style="{ background: note.bgColor}" :id="note.id" @click="selectNote(note)">
        <note-preview :note="note"></note-preview>
    </li>
</ul>


    </section>
    
    `,
    data() {

        return {
            
          
        }
    },
    methods: {
        selectNote(note) {
            this.$emit('note-selected', note);
        }
    },
   
    components: {
        notePreview,
        
    }
}