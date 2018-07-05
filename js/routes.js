import appsusApp from './pages/appsus-app-cmp.js'
import misterEmail from './pages/email-cmp.js'
import misterKeep from './pages/notes-app-cmp'
import editNote from './cmps/notes-cmps/edit-note-cmp.js'
// import about from './pages/about.js'


const routes = [
    {path: '/apps', component: appsusApp},
    {path: '/email', component: misterEmail},
    {path: '/notes', component: misterKeep},
    {path: '/note', component: editNote},
    // {path: '/about', component: about},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;