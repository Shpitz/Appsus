export default {
    template: `
    <section class="email-compose">
        <div class="email-header">
            <button @click="saveNewEmail">send</button>
            <label>subject :</label>
            <input type="text" placeholder="enter mail subject" v-model="newEmail.subject">
            <label>to : </label> 
            <input type="email" placeholder="enter email address" v-model="newEmail.sentTo">
        </div>
        <div class="email-msg">
            <textarea name="msg" v-model="newEmail.body" placeholder="enter yor massege" ></textarea>
        </div>
    </section>
 `,
 data(){
     return{
         newEmail : this.emptyMail()
     }
 },
 methods:{
     emptyMail(){
        return{
            subject: '',
            body: '',
            isRead: false,
            sentAt: this.getDate(),
            sentTo: ''
        }
     },
     getDate(){
         var date = new Date
         var currDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() 
     },
     saveNewEmail(){
         this.$emit('save-email', this.newEmail)
         this.newEmail = this.emptyMail()
     }
 },

}