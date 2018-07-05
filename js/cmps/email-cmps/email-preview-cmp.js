export default {
    props: ['email'],
    template: `
    <section>
    <h4>{{email.subject}}</h4>
     <p>{{email.body}}</p>
    <pre>
    {{email}}
    </pre>
    </section>
    
    `
}