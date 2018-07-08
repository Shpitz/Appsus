import {
    eventBus,
    EVENT_FILTER_EMAILS,
    EVENT_TOOGLE_MENU,
} from '../../services/eventbus-service.js'
export default {
    template: `
    <section class="email-filter">
    <button class="menu" @click="toggleNav">Menu</button>
        <input type="text" v-model="filter.txt" @input="setFilter" placeholder="Enter Key Word" />
        <form class="radio" @input="setFilter">

                <input type="radio" id="radio1" name="all" value="All" v-model="filter.emailStatus">
                <label for="radio1">All</label>

                <input type="radio" id="radio2" name="all" value="Read" v-model="filter.emailStatus">
                <label for="radio2">Read</label>
                <input type="radio" id="radio3" name="all" value="Unread" v-model="filter.emailStatus">
                    <label for="radio3">Unread</label>
        </form>
          
    </section>
    `,
    data() {
        return {
            filter: {
                txt: '',
                emailStatus: '',
            }
        }
    },
    methods: {
        setFilter() {
            console.log(this.filter);
            eventBus.$emit(EVENT_FILTER_EMAILS, this.filter)
        },
        toggleNav() {
            eventBus.$emit(EVENT_TOOGLE_MENU)
        }


    },
}