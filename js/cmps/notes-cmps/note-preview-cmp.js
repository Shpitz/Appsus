import noteTxt from './note-txt-cmp.js'
import noteImg from './note-img-cmp.js'
import tasks from './note-todos-cmp.js'

export default {
    props: ['note'],
    template: `
    <section>
        <note-img v-if="note.img" :noteImg="note.img"></note-img>
        <h1>{{note.title}}</h1>
        <note-txt v-if="note.txt" :noteTxt="note.txt"></note-txt>
        <tasks v-if="note.todos.length" :tasks="note.todos"></tasks>
        <!-- <note-txt v-if="note.txt.hasTxt" :noteTxt="note.txt.txtVal"></note-txt>
        <note-img v-if="note.img.hasImg" :noteImg="note.img.imgSrc"></note-img>
        <note-todos v-if="note.todos.hasTodos" :noteTodos="note.todos.todosVal"></note-todos> -->


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