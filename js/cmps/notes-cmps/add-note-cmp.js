import noteService from '../../services/note-service.js'
import todo from './todo-cmp.js'

export default {
    props: ['selectedNote'],
    template: `
    <section class="add-note">

            <input v-show="!noteCreated"type="text" placeHolder="Take a note..." @click="createNote" class="take-note"/>
        
            <div v-show="noteCreated" class="add-Note-created">
                <div class="txt-area">
                    <input type="text" placeHolder="Title" v-model="newNote.title">
    
                    <textarea rows="2" cols="50" type="text" placeHolder="Take a note..." v-model="newNote.txt">{{newNote.txt}}</textarea>

                </div>
                <div class="img-area">
                    <div v-if="!newNote.img" class="upload-file">
                        <input type="file" @change="onFileChange">
                    </div>
                    <div v-else class="file-container">
                        <img :src="newNote.img">
                        <button @click="removeImage">Remove image</button>
                    </div>

                </div>
                
                
                <div class="todos-area">
                    <div class="add-task-area">
                        <input type="text" class="input-group-field" v-model="newTask" @keyup.enter="addTask" placeholder="New task">
                        <span class="input-group-button">
                        <button @click="addTask" class="button">
                        <i class="fa fa-plus"></i>
                        </button>
                        </span>
                    </div>


                    <transition-group name="fade" tag="ul" class="tasks__list no-bullet" v-model="newNote.todos">
                    <li v-for="(task, index) in newNote.todos" @remove="removeTask(index)" @complete="completeTask(newTask)" :key="task.title">
                        {{task.title}}
                    </li>
                    </transition-group>
                </div>
            
                <div class="edit-btn-area">
                    <input type="color" value="#ffffff" v-model="newNote.bgColor">
        
                    <button @click="saveNote">
                    <i class="fa fa-save"></i>
                    </button>
                    <button @click="cancelNote">
                    <i class="fas fa-undo"></i>
                    </button>
                    <button @click="deleteNote">
                    <i class="fas fa-trash-alt"></i>
                    </button>
                    <button @click="pinNote"><i class="fas fa-thumbtack"></i></button>
                </div>

            </div>
    </section>
    
    `,
    data() {

        return {
            newNote: {},
            noteCreated: false,
            newTask: '',

        }
    },
    computed() {

    },
    created() {
        if (this.selectedNote) {
            this.newNote = { ...this.selectedNote };
            this.createNote();
        } else {
            this.newNote = noteService.createEmptyNote();
        }
    },
    computed: {

    },
    methods: {
        createNote() {
            this.noteCreated = true;
        },
        cancelNote() {
            this.$emit('cancel-note', this.newNote);
            this.noteCreated = false;
            this.newNote = noteService.createEmptyNote()
        },

        saveNote() {
            this.$emit('save-note', this.newNote)
            this.noteCreated = false;
            this.newNote = noteService.createEmptyNote()

        },
        deleteNote() {
            this.$emit('delete-note', this.newNote);
            this.noteCreated = false;
            this.newNote = noteService.createEmptyNote()
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var reader = new FileReader();

            reader.onload = (e) => {
                this.newNote.img = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage(e) {
            this.newNote.img = '';
        },
        pinNote() {
            this.newNote.isPinned = !this.newNote.isPinned;
            console.log('is pinned?', this.newNote.isPinned);
            if (this.newNote.isPinned) {
                this.$emit('pin-note', this.newNote)
            } else {
                this.$emit('unpin-note', this.newNote)

            }
            this.saveNote()
        },
        addTask() {
            if (this.newTask) {
                this.newNote.todos.push({
                    title: this.newTask,
                    completed: false
                });
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.newNote.todos.splice(index, 1);
        },
        completeTask(task) {
            task.completed = !task.completed;
        },
        setList() {
            this.addList = true
        },

    },
    components: {
        todo,
    }
}