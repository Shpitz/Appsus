import taskItem from './todo-cmp.js'

export default {
    props: ['tasks'],
    // props: {
    //     tasks: { default: [] }
    // },
    template: `
    <section class="todos">
        <input type="text" class="input-group-field" v-model="newTask" @keyup.enter="addTask" placeholder="New task">
        <span class="input-group-button">
            <button @click="addTask" class="button">
                <i class="fa fa-plus"></i>
            </button>
        </span>

        <transition-group name="fade" tag="ul" class="tasks__list no-bullet">
            <task-item v-for="(task, index) in tasks" @remove="removeTask(index)" @complete="completeTask(task)" :task="task" :key="task.title">
            </task-item>
        </transition-group>
    </section>
    `,
    data() {
        return {
            newTask: '',
        };
    },
    components: {
        taskItem,
    },
    methods: {
        addTask() {
            if(this.newTask) {
                this.tasks.push({
                    title: this.newTask,
                    completed: false
                });
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        completeTask(task) {
            task.completed = !task.completed;
        },
    }
}


// <div class="tasks__clear button-group pull-right">
// <button class="button warning small" @click="clearCompleted">
//    <i class="fa fa-check"></i>Clear Completed
// </button>
// <button class="button alert small" @click="clearAll">
//    <i class="fa fa-trash"></i>Clear All
// </button>
// </div>

// <ul>
// <li v-for="task in tasks">
//    {{task.taskTitle}}
// </li>
// </ul>