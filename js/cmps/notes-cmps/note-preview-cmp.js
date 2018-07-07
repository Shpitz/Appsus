import noteTxt from './note-txt-cmp.js'
import noteImg from './note-img-cmp.js'
import noteTodos from './note-todos-cmp.js'

export default {
    props: ['note'],
    template: `
    <section>
        <h1>{{note.title}}</h1>
        <note-txt v-if="note.txt" :noteTxt="note.txt"></note-txt>
        <note-img v-if="note.img" :noteImg="note.img"></note-img>
        <note-todos v-if="note.todos.length > 0" :noteTodos="note.todos"></note-todos>
        <!-- <note-txt v-if="note.txt.hasTxt" :noteTxt="note.txt.txtVal"></note-txt>
        <note-img v-if="note.img.hasImg" :noteImg="note.img.imgSrc"></note-img>
        <note-todos v-if="note.todos.hasTodos" :noteTodos="note.todos.todosVal"></note-todos> -->


    </section>
    
    `,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
    }
}