import appsusApp from './pages/appsus-app-cmp.js'
import misterKeep from './pages/notes-app-cmp.js'
import editNote from './cmps/notes-cmps/edit-note-cmp.js'
import misterEmail from './pages/email-app-cmp.js'
// import about from './pages/about.js'


const routes = [
    {path: '/apps', component: appsusApp},
    {path: '/email', component: misterEmail},
    {path: '/notes', component: misterKeep},
    {path: '/notes/:id', component: editNote},
    // {path: '/about', component: about},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;