import Home from './components/Home.vue';
import Location from './components/Location.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'location',
        path: '/location',
        component: Location
    }
];

export {routes};