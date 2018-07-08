import {
    eventBus,
    EVENT_DELETE_EMAIL,
} from '../../services/eventbus-service.js'
export default {
    props: ['email'],
    template: `
   <section class="email-details" v-if="email" @click.stop="returnHome($event)">
       <div class="email-container">

           <div class="email-header">
               <div class="flex space-between">
                   <button class="home" @click.stop="returnHome($event)"><i class="fa fa-home"></i></button>
                   <button class="delete-email" @click.stop="deleteEmail(email.id)">delete</button>
                </div>
                <h2>Subject :  {{email.subject}}</h2>
                <h4>To:   {{email.sentTo}}</h4>
                <h6>Sent At:  {{email.sentAt}}</h6>
            </div>
            <div class="email-msg">
                {{email.body}}
            </div>
        </div>
        </section>
   
   `,

    created() {

    },
    methods: {
        deleteEmail(id) {
            eventBus.$emit(EVENT_DELETE_EMAIL, id)
        },
        returnHome(ev) {
            console.log(ev.path[0].classList[0], '****');
            if (ev.path[0].classList[0] !== 'email-details' && ev.path[0].classList[0] !== 'fa' && ev.path[0].classList[0] !== 'home') return // shahar's fault
            this.$emit('return-home')
        }
    },
}