export default {
    props: ['noteTodos'],
    template: `
    <section>
        <ul>
            <li v-for="todo in noteTodos">
                {{todo}}
            </li>
        </ul>

    </section>
    
    
    `
    
}