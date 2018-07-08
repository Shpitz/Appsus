import noteTxt from './note-txt-cmp.js'
import noteImg from './note-img-cmp.js'
import tasks from './note-todos-cmp.js'

export default {
    props: ['note'],
    template: `
    <section class="note-preview" :style="{ background: note.bgColor}">
        <note-img v-if="note.img" :noteImg="note.img"></note-img>
        <h1>{{note.title}}</h1>
        <note-txt v-if="note.txt" :noteTxt="note.txt"></note-txt>
        <tasks v-if="note.todos.length" :tasks="note.todos" class="note-preview-tasks"></tasks>
    </section>
    
    `,
    data() {
        return {
            
        }
    },
    created() {
        // console.log('todos: ', this.note.todos);
        // console.log('note: ', this.note);
        
    },
    components: {
        noteTxt,
        noteImg,
        tasks,
    }
}