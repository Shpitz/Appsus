import emailList from '../cmps/email-cmps/email-list-cmp.js'
import emailDetails from '../cmps/email-cmps/email-details-cmp.js'
import emailService from '../services/email-service.js'
import {eventBus ,EVENT_SELECT_EMAIL , EVENT_DELETE_EMAIL , EVENT_FILTER_EMAILS} from '../services/eventbus-service.js'
export default {
    template: `
    <section class="email-app">
    <email-list v-if="emails" :emails="emailsToDiplay" ></email-list>
    <email-details v-if="emails" :email="selectedEmail"></email-details>
    </section>
    
    `,
    data() {
        return {
            emails: {},
            selectedEmail: null,
            filterData: null,
        }
    },
    created() {
        emailService.getEmails()
        .then((loadEmails) => {
            
            this.emails = loadEmails
            this.emails[0].isRead = true
            this.selectedEmail = this.emails[0] 
        }),
        eventBus.$on(EVENT_SELECT_EMAIL, id => {
            this.getEmailById(id)
        }),
        eventBus.$on(EVENT_DELETE_EMAIL, id => {
            this.removeEmailById(id)
        }),
        eventBus.$on(EVENT_FILTER_EMAILS, filterData =>{
            this.setFilter(filterData)
        })
    },
    computed: {
        emailsToDiplay() {
            if(!this.filterData) return this.emails
            console.log(this.filterData.txt);
            var filteredEmails = this.emails.filter(email =>{
                if(email.subject.indexOf(this.filterData.txt) > -1 || email.body.indexOf(this.filterData.txt) > -1 ){
                    if(this.filterData.emailStatus === 'unRead') return email.isRead === false
                        else if(this.filterData.emailStatus === 'Read') return email.isRead === true
                        else return email
                }else if(this.filterData.txt === '') return email
            })
            return filteredEmails
        },
       
    },
    methods:{
        getEmailById(id) {
            emailService.getEmailById(id)
                .then((selectedEmail) => {
                    this.selectedEmail = selectedEmail
                })
        },
        removeEmailById(id){
            emailService.removeEmailById(id)
            this.emails[0].isRead = true
            this.selectedEmail = this.emails[0]
        },
        setFilter(filterData){
            this.filterData = filterData
        }
    },
    components: {
        emailList,
        emailDetails,
    }
}