import emailPreview from './email-preview-cmp.js'
import emailFilter from './email-filter-cmp.js'
import emailCompose from './email-compose-cmp.js'
export default {
    props: ['emails'],
    template: `
    <section>
    <h1>hello</h1>
    <email-filter :emails="emails"></email-filter>
    <email-preview v-for="email in emails" :email="email"></email-preview>
    </section>
    
    `,
    components: {
        emailPreview,
        emailFilter,
        emailCompose,
    }
}