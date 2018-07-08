import appsusApp from './pages/appsus-app-cmp.js'
import misterKeep from './pages/notes-app-cmp.js'
import misterEmail from './pages/email-app-cmp.js'
// import about from './pages/about.js'


const routes = [
    {path: '/', component: appsusApp},
    {path: '/email', component: misterEmail},
    {path: '/notes', component: misterKeep},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;