import notePreview from './note-preview-cmp.js'

export default {
    props: ['notes'],

    template: `
    <section>
<ul>
    <li v-for="note in notes" :style="{ background: note.bgColor}">
        <note-preview :note="note"></note-preview>
    </li>
</ul>


    </section>
    
    `,
    components: {
        notePreview,
    }
}