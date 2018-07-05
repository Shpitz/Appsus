import emailList from './email-list-cmp.js'
import emailDetails from './email-details-cmp.js'
export default{
    template:`
    <section>
    <h1>hello</h1>
    <email-list></email-list>
    <email-details></email-details>
    </section>
    
    `,
    components:{
        emailList,
        emailDetails,
    }
}