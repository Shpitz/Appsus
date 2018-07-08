export default {
    props: ['task'],
    template: `
    <section>
        <li class="tasks__item">
            <button :class="className" @click.self="$emit('complete')">{{task.title}}</button>
            <button class="tasks__item__remove button alert pull-right" @click="$emit('remove')">
                <i class="fa fa-times"></i>
            </button>
        </li>
    </section>
    `,
    created() {

    },
    computed: {
        className() {
            let classes = ['tasks__item__toggle'];
            if(this.task.completed) {
                classes.push('tasks__item__toggle--completed');
            }
            return classes.join(' ');
        },
    },
}



// <ul>
//    <li v-for="todo in noteTodos">
//        {{todo}}
//    </li>
//  </ul>
