import {
    eventBus,
    EVENT_SELECT_EMAIL
} from '../../services/eventbus-service.js'
export default {
    props: ['email'],
    template: `
    <section  :class="[emailPreview ,{unread: isRead}]" @click="selectEmail(email.id)" >
        <div class="mail-info">
            <div><h4>{{email.subject}}</h4> <h5>{{email.sentAt}}</h5> </div>
            <p>{{email.body}}</p>
        </div>
        <div class="mail-controls">
            <button @click.stop="toggleIsRead">👁</button>
        </div>
    </section>
    
    `,
    data() {
        return {
            unread:'unread',
            emailPreview: 'email-preview'

        }
    },
    methods: {
        selectEmail(selectedEmailId) {
            eventBus.$emit(EVENT_SELECT_EMAIL, selectedEmailId)
            this.email.isRead = true
        },
        toggleIsRead() {
            this.email.isRead = !this.email.isRead
        }
    },
    computed: {
        isRead() {
            console.log(this.email.isRead);
            
            if (this.email.isRead === true) {
                return false
            } else{
                return true
            } 
        }
    }
}