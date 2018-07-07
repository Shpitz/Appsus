import emailList from '../cmps/email-cmps/email-list-cmp.js'
import emailDetails from '../cmps/email-cmps/email-details-cmp.js'
import emailService from '../services/email-service.js'
import {eventBus ,EVENT_SELECT_EMAIL , EVENT_DELETE_EMAIL} from '../services/eventbus-service.js'
export default {
    template: `
    <section class="email-app">
    <email-list v-if="emails" :emails="emails" ></email-list>
    <email-details v-if="emails" :email="selectedEmail"></email-details>
    </section>
    
    `,
    data() {
        return {
            emails: {},
            selectedEmail: null,
        }
    },
    created() {
        emailService.getEmails()
        .then((loadEmails) => {
            
            this.emails = loadEmails
            this.emails[0].isRead = true
            this.selectedEmail = this.emails[0] 
        })
        eventBus.$on(EVENT_SELECT_EMAIL, id => {
            this.getEmailById(id)
        })
        eventBus.$on(EVENT_DELETE_EMAIL, id => {
            this.removeEmailById(id)
        })
    },
    computed: {
        emailsToDiplay() {
            console.log('rmails to display has been activated');
            
            return this.emails
        },
       
    },
    methods:{
        getEmailById(id) {
            emailService.getEmailById(id)
                .then((book) => {
                    this.selectedEmail = book
                })
        },
        removeEmailById(id){
            emailService.removeEmailById(id)
            this.emails[0].isRead = true
            this.selectedEmail = this.emails[0]
        }
    },
    components: {
        emailList,
        emailDetails,
    }
}