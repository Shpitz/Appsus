import appsusApp from './pages/appsus-app-cmp.js'
import misterEmail from './pages/email-app-cmp.js'
import misterNotes from './pages/notes-cmp.js'
// import about from './pages/about.js'


const routes = [
    {path: '/apps', component: appsusApp},
    {path: '/email', component: misterEmail},
    {path: '/notes', component: misterNotes},
    // {path: '/about', component: about},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;