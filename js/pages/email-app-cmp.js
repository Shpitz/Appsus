import emailList from '../cmps/email-cmps/email-list-cmp.js'
import emailDetails from '../cmps/email-cmps/email-details-cmp.js'
import emailService from '../services/email-service.js'
export default {
    template: `
    <section>
    <h1>hello</h1>
    <email-list v-if="emails" :emails="emails"></email-list>
    <email-details :email="selectedEmail"></email-details>
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
            })
    },
    computed: {
        emailsToDiplay() {
            return this.emails
        }
    },
    components: {
        emailList,
        emailDetails,
    }
}