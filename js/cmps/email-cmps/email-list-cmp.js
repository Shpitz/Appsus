import emailPreview from './email-preview-cmp.js'
import emailFilter from './email-filter-cmp.js'
import emailCompose from './email-compose-cmp.js'
export default {
    props: ['emails'],
    template: `
    <section class="email-list">
    <!-- <email-filter :emails="emails"></email-filter> -->
    <div class="preview-container">
        <email-preview v-for="email in emails" :email="email"></email-preview>
    </div>
    </section>
    
    `,
    components: {
        emailPreview,
        emailFilter,
        emailCompose,
    }
}