import noteService from '../../services/note-service.js'

export default {
    props: ['selectedNote'],
    template: `
    <section>

        <input type="text" :placeHolder="titlePlaceHolder" @click="createNote" v-model="newNote.title">
        <!-- {{newNote.title}} -->
        <textarea rows="4" cols="50" v-show="noteCreated" type="text" placeHolder="Take a note..." v-model="newNote.txt">
        {{newNote.txt}}</textarea>
        <input v-show="noteCreated" type="color" value="#ffffff" v-model="newNote.bgColor">

        <button v-show="noteCreated" @click="saveNote">Save</button>
    </section>
    
    `,
    data() {
        var toEdit = (this.selectedNote)? {...this.selectedNote} : noteService.createEmptyNote();

        return {

            newNote: toEdit,
            noteCreated: false,
            titlePlaceHolder: 'Take a note...',

        }
    },
    created() {
        if(this.selectedNote){
            this.newNote = this.selectedNote;
            this.noteCreated = true;
            console.log('selected note at selected: ', this.selectedNote);
            
    
        } else {
            this.newNote = noteService.createEmptyNote();

        }
        console.log('newNote at created: ', this.newNote);
        console.log('selectedNote at created: ', this.selectedNote);

    },
    computed: {
        
    },
    methods: {
        createNote() {
            if (!this.newNote.id) {
                this.noteCreated = !this.noteCreated;
                this.titlePlaceHolder = (this.titlePlaceHolder !== 'title') ? 'title' : 'Take a note...'
            }
            
            // (this.titlePlaceHolder !== 'title')? this.titlePlaceHolder = 'title' : this.titlePlaceHolder = 'Take a note...'

        },

        // getNewNote() {
        // }

        saveNote() {
            this.$emit('save-note', this.newNote)
            this.noteCreated = false;
            this.titlePlaceHolder = "Take a note...";
            this.newNote = noteService.createEmptyNote()
            
        }
    }
}