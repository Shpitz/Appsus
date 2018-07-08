
import notePreview from './note-preview-cmp.js'

export default {
    props: ['notes'],

    template: `
    <section class="notes-list">
<!-- <ul v-if="!hasPinned">

    <li v-for="note in notes" :style="{ background: note.bgColor}" :id="note.id" @click="selectNote(note)">
        <note-preview :note="note"></note-preview>
    </li>
</ul> -->

<div class="note-list">
<p v-if="hasPinned">Pinned</p>

<ul class="pinned-list" v-if="hasPinned">
<li v-for="note in notes" v-if="note.isPinned" :id="note.id" @click="selectNote(note)">
        <note-preview :note="note"></note-preview>
    </li>
</ul>
<p v-if="hasPinned">Others</p>
<ul class="others-list">
<li v-for="note in notes" v-if="!note.isPinned" :id="note.id" @click="selectNote(note)">
        <note-preview :note="note"></note-preview>
    </li>
</ul>


</div>


    </section>
    
    `,
    data() {

        return {

        }
    },
    created() {
        console.log(this.notes);
        

    },
    computed: {

        hasPinned() {
            return this.notes.some(note => note.isPinned)

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