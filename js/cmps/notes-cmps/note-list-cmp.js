
import notePreview from './note-preview-cmp.js'

export default {
    props: ['notes'],

    template: `
    <section>
<!-- <ul>

    <li v-for="note in notes" :style="{ background: note.bgColor}" :id="note.id" @click="selectNote(note)">
        <note-preview :note="note"></note-preview>
    </li>
</ul> -->

<div>
    <p>Pinned</p>

<ul class="pinned-list">
<li v-for="note in notes" v-if="note.isPinned" :style="{ background: note.bgColor}" :id="note.id" @click="selectNote(note)">
        <note-preview :note="note"></note-preview>
    </li>
</ul>
<p>Others</p>
<ul class="others-list">
<li v-for="note in notes" v-if="!note.isPinned" :style="{ background: note.bgColor}" :id="note.id" @click="selectNote(note)">
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
    methods: {
        selectNote(note) {
            this.$emit('note-selected', note);
        }
    },
   
    components: {
        notePreview,
        
    }
}