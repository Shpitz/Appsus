import {eventBus , EVENT_SELECT_EMAIL} from '../../services/eventbus-service.js'
export default {
    props: ['email'],
    template: `
    <section  :class="[emailPreview ,{unread: !email.isRead}]" @click="selectEmail(email.id)" >
    <h4>{{email.subject}}</h4>
     <p>{{email.body}}</p>
    </section>
    
    `,
    data(){
        return{
            unread:'unread',
            emailPreview: 'email-preview'
            
        }
    },
    methods:{
        selectEmail(selectedEmailId){
            eventBus.$emit(EVENT_SELECT_EMAIL, selectedEmailId)
            this.email.isRead = true
        }
    }
}