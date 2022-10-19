import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import ProjectsPage from './components/pages/ProjectsPage'
import ContactsPage from './components/pages/ContactsPage'
import ServicesPage from './components/pages/ServicesPage'

import { createRouter, createWebHistory } from "vue-router"

const routeInfos = [
    {
        path : "/",
        component : Home
    },
    {
        path : "/aboutus",
        component : AboutUs
    },
    {
        path : "/projects",
        component : ProjectsPage
    },
    {
        path : "/contacts",
        component : ContactsPage
    },
    {
        path : "/sevices",
        component : ServicesPage
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;