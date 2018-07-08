import emailPreview from './email-preview-cmp.js'
import emailCompose from './email-compose-cmp.js'
import emailStatus from './email-status-cmp.js'

import {
    eventBus,
    EVENT_FILTER_EMAILS,
    EVENT_SORT_TITLE,
    EVENT_SORT_DATE,
    EVENT_TOOGLE_MENU,
} from '../../services/eventbus-service.js'
export default {
    props: ['emails'],
    template: `
    <section class="email-list flex coulmn">
    <div class="status-container flex column align-center">
                       <h3>Status Bar</h3>
                         <email-status :readCount="getReadEmailStatus"></email-status>
                        </div>
        <div class="flex">
            
            <div v-show="navBar" class="sideNav">
                <button @click="newMail">Add Email</button>
                <ul class="side-list flex column clean-list">
                    <li @click="setFilter('All')">inbox</li>
                    <li @click="setFilter('Unread')"><i class="fas fa-envelope"> </i> Unread</li>
                    <li @click="setFilter('Read')"><i class="fas fa-envelope-open"></i> Read</li>
                </ul>
                   
                    </div>
            <div :class="[previewContainer ,{miniList: navBar}]">
                <ul class="mail-list-info flex space-between">
                <li><button @click="sortByTitle">Subject</button></li>
                 <li><button @click="sortByDate">Date</button></li>
                 <li>Mail Info</li>
                 <li>Controls</li>
                </ul>
                <email-preview v-for="email in emails" :email="email"></email-preview>
            </div>
        </div>
       
    </section>
    
    `,
    data() {
        return {
            navBar: false,
            previewContainer: 'preview-container',
            miniList: 'mini-list',
            filter: {
                txt: '',
                emailStatus: '',
            }
        }

    },
    created() {
        eventBus.$on(EVENT_TOOGLE_MENU, data => {
            this.toggleNav()
        })
    },
    components: {
        emailPreview,
        emailCompose,
        emailStatus,
    },
    methods: {
        newMail() {
            this.$emit('new-mail')
        },
        toggleNav() {
            this.navBar = !this.navBar
        },
        setFilter(boxType) {
            console.log(this.filter);
            this.filter.emailStatus = boxType
            eventBus.$emit(EVENT_FILTER_EMAILS, this.filter)
        },
        sortByTitle() {
            eventBus.$emit(EVENT_SORT_TITLE)
        },
        sortByDate() {
            eventBus.$emit(EVENT_SORT_DATE)
        },

    },
    computed: {
        getReadEmailStatus() {
            var readCount = 0
            this.emails.forEach(email => {
                if (email.isRead === true) {
                    readCount++
                }
            });
            return readCount / this.emails.length * 100
        }
    }
}