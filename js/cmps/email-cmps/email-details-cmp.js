import {eventBus ,EVENT_DELETE_EMAIL} from '../../services/eventbus-service.js'
export default {
    props: ['email'],
    template: `
   <section class="email-details" v-if="email">
       <div class="email-header">
           <button class="delete-email" @click="deleteEmail(email.id)">delete</button>
           <h2>Subject :  {{email.subject}}</h2>
           <h4>To:   {{email.sentTo}}</h4>
           <h6>Sent At:  {{email.sentAt}}</h6>
        </div>
        <div class="email-msg">
            {{email.body}}
        </div>
   </section>
   
   `,

    created() {
        
    },
    methods:{
      deleteEmail(id){
          eventBus.$emit(EVENT_DELETE_EMAIL, id)
      }  
    },
}