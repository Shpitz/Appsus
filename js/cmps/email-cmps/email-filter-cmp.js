import {eventBus ,EVENT_FILTER_EMAILS} from '../../services/eventbus-service.js'
export default {
    template: `
    <section class="email-filter">
        <input type="text" v-model="filter.txt" @input="setFilter" placeholder="Enter Key Word" />
        <form @input="setFilter">
            <input type="radio" name="all" value="All" v-model="filter.emailStatus">
            <label>All</label>
            <input type="radio"  name="all" value="Read" v-model="filter.emailStatus">
            <label>Read</label>
            <input type="radio" name="all" value="Unread" v-model="filter.emailStatus">
            <label>Unread</label>
            <br>
            <span>Checked names: {{ filter.emailStatus }}</span>
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
        f() {
            console.log(this.filter); 
        },
        setFilter(){
            console.log(this.filter);
            eventBus.$emit(EVENT_FILTER_EMAILS, this.filter)
        }
    },
    watch: {
        filter() {
            console.log(this.filter);
        }
    }
}