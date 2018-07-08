import {
    eventBus,
    EVENT_SELECT_EMAIL,
    EVENT_DELETE_EMAIL
} from '../../services/eventbus-service.js'
export default {
    props: ['email'],
    template: `
    <section  class="email-preview " @click.stop="selectEmail(email.id)" >
        <ul :class="{unread: isRead}">
        <li><h4>{{email.subject}}</h4></li>
        <li><h5>{{email.sentAt}}</h5> </li>
        <li><p>{{email.body}}</p></li>
        <li v-if="email.isRead"><button @click.stop="deleteMail(email.id)"><i class="fas fa-trash-alt"></i></button> <button  @click.stop="toggleIsRead"><i class="fas fa-envelope-open"></i></button></li>
        <li v-else><button @click.stop="deleteMail(email.id)"><i class="fas fa-trash-alt"></i></button><button @click.stop="toggleIsRead"><i class="fas fa-envelope"></i></button></li>
        </ul>
    </section>
    
    `,
    data() {
        return {
            unread: 'unread',
        }
    },
    created() {
        // this.getIsReadIcon()

    },
    methods: {
        selectEmail(selectedEmailId) {
            eventBus.$emit(EVENT_SELECT_EMAIL, selectedEmailId)
            this.email.isRead = true
        },
        toggleIsRead() {
            this.email.isRead = !this.email.isRead
        },
        deleteMail(emailId) {
            console.log(emailId);

            eventBus.$emit(EVENT_DELETE_EMAIL, emailId)
        }

    },
    computed: {
        isRead() {
            console.log(this.email.isRead);
            if (this.email.isRead === true) {
                return false
            } else {
                return true
            }
        },

    }
}