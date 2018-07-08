import progressBar from './progress-bar-cmp.js'
export default {
    template: `
    <section class="email-status">
       
    <progress-bar :width="readCount"></progress-bar>
    </section>
    `,
    props: ['readCount'],
    components: {
        progressBar,
    }
}