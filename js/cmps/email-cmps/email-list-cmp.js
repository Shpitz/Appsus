import emailPreview from './email-preview-cmp.js'
import emailFilter from './email-filter-cmp.js'
import emailCompose from './email-compose-cmp.js'
export default{
    template:`
    <section>
    <h1>hello</h1>
    <email-preview></email-preview>
    <email-filter></email-filter>
    </section>
    
    `,
    components:{
        emailPreview,
        emailFilter,
        emailCompose,
    }
}