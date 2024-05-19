import {createMemoryHistory, createRouter} from 'vue-router'
import HomeView from "../components/HomeView.vue";
import UserPage from "../components/user/UserPage.vue";
import HomeHeader from "../components/header/HomeHeader.vue";

const routes = [
    {
        path: '/', components: {
            nav: HomeHeader,
            main: HomeView,
        }
    },
    {
        path: '/user-page', components: {
            nav: HomeHeader,
            main: UserPage,
        }
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})
export default router