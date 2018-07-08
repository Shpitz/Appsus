import emailList from '../cmps/email-cmps/email-list-cmp.js'
import emailFilter from '../cmps/email-cmps/email-filter-cmp.js'
import emailDetails from '../cmps/email-cmps/email-details-cmp.js'
import emailCompose from '../cmps/email-cmps/email-compose-cmp.js'
import emailService from '../services/email-service.js'
import {
    eventBus,
    EVENT_SELECT_EMAIL,
    EVENT_DELETE_EMAIL,
    EVENT_FILTER_EMAILS,
    EVENT_SORT_TITLE,
    EVENT_SORT_DATE
} from '../services/eventbus-service.js'
export default {
    template: `
    <section class="email-app" >
        <email-filter v-if="!selectedEmail" :emails="emails"></email-filter>
        <email-list  @new-mail="newMail" :emails="emailsToDiplay" class="{sideList: selectedEmail}" ></email-list>
        <email-details v-if="selectedEmail" @return-home="returnHome" :email="selectedEmail"></email-details>
        <email-compose v-if="newEmail" @return-home="returnHome" @save-email="saveEmail"></email-compose>
    </section>
    
    `,
    data() {
        return {
            emails: [],
            selectedEmail: null,
            filterData: null,
            newEmail: false,
        }
    },
    created() {
        emailService.getEmails()
            .then((loadEmails) => {

                this.emails = loadEmails
                // this.emails[0].isRead = true
                // this.selectedEmail = this.emails[0]
            }),
            eventBus.$on(EVENT_SELECT_EMAIL, id => {
                this.getEmailById(id)
            }),
            eventBus.$on(EVENT_DELETE_EMAIL, id => {
                this.removeEmailById(id)
            }),
            eventBus.$on(EVENT_FILTER_EMAILS, filterData => {
                this.setFilter(filterData)
            })
        eventBus.$on(EVENT_SORT_TITLE, data => {
            this.sortByTitle()
        })
        eventBus.$on(EVENT_SORT_DATE, data => {
            this.sortByDate()
        })
    },
    computed: {
        emailsToDiplay() {
            if (!this.filterData) return this.emails
            console.log(this.filterData.txt);
            var filteredEmails = this.emails.filter(email => {
                if (this.filterData.txt === '' || email.subject.indexOf(this.filterData.txt) > -1 || email.body.indexOf(this.filterData.txt) > -1) {
                    if (this.filterData.emailStatus === 'Unread') return email.isRead === false
                    else if (this.filterData.emailStatus === 'Read') return email.isRead === true
                    else return email
                }
            })
            return filteredEmails
        },

    },
    methods: {
        getEmailById(id) {
            emailService.getEmailById(id)
                .then((selectedEmail) => {
                    this.selectedEmail = selectedEmail
                })
        },
        removeEmailById(id) {
            emailService.removeEmailById(id)
            this.emails[0].isRead = true
            this.selectedEmail = ''
        },
        setFilter(filterData) {
            this.filterData = filterData
        },
        newMail() {
            this.newEmail = true
        },
        saveEmail(newEmail) {
            emailService.saveEmail(newEmail)
            this.newEmail = false
        },
        sortByTitle() {
            console.log('hi');
            this.emails.sort(function (a, b) {
                var emailA = a.subject.toUpperCase();
                var emailB = b.subject.toUpperCase();
                if (emailA < emailB) {
                    return -1;
                } else if (emailA > emailB) {
                    return 1;
                }
                return 0;
            });
            console.log(this.emails);

        },
        sortByDate() {
            this.emails.sort(function (a, b) {
                a = a.sentAt.split('-').reverse().join('');
                b = b.sentAt.split('-').reverse().join('');
                return a > b ? 1 : a < b ? -1 : 0;
            });
        },
        returnHome() {
            if (this.selectedEmail === '' && this.newEmail === '') return
            console.log('father retirning');

            this.selectedEmail = ''
            this.newEmail = ''
        }
    },
    components: {
        emailList,
        emailDetails,
        emailCompose,
        emailFilter,
    }
}