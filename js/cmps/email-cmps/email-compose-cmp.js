export default {
    template: `
    <section class="email-compose" @click.stop="returnHome($event)">
        <div class='new-email-container' >
            <div class="new-email-header">
                <button class="home" @click="returnHome"><i class="fa fa-home"></i></button>
                <div class="flex space-between">
                    <span>subject :</span>
                    <input type="text" placeholder="enter mail subject" v-model="newEmail.subject">
                </div>
                <div class="flex space-between">
                    <span>to : </span> 
                    <input type="email" placeholder="enter email address" pattern=".+@globex.com" required v-model="newEmail.sentTo">
                </div>
            </div>
            <div class="email-msg">
                <textarea name="msg" v-model="newEmail.body" placeholder="enter yor massege" ></textarea>
            </div>
            <button @click="saveNewEmail">send</button>
        </div>
    </section>
 `,
    data() {
        return {
            newEmail: this.emptyMail()
        }
    },
    methods: {
        emptyMail() {
            return {
                subject: '',
                body: '',
                isRead: false,
                sentAt: this.getDate(),
                sentTo: '',
            }
        },
        getDate() {
            var date = new Date
            var currDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
            return currDate
        },
        saveNewEmail() {
            this.$emit('save-email', this.newEmail)
            this.newEmail = this.emptyMail()
        },
        returnHome(ev) {
            console.log(ev.path[0].classList[0], '****');
            if (ev.path[0].classList[0] !== 'email-compose' && ev.path[0].classList[0] !== 'fa' && ev.path[0].classList[0] !== 'home') return // shahar's fault
            this.$emit('return-home')
        }
    },

}