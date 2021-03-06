import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Location from './views/Location.vue'
import TermsOfUse from './views/TermsOfUse.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import About from "./views/About";
import OneYear from "./views/SpecialEvents/OneYear";
import SupportTheSite from "./views/SupportTheSite";
import Garfield from "./views/Garfield";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/terms-of-use',
            name: 'terms-of-use',
            component: TermsOfUse,
        },
        {
            path: '/privacy-policy',
            name: 'privacy-policy',
            component: PrivacyPolicy,
        },
        {
            path: '/one-year',
            name: 'one-year',
            component: OneYear
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/support-the-site',
            name: 'support-the-site',
            component: SupportTheSite,
        },
        {
            path: '/4dummies',
            name: 'Hey Garfield!',
            component: Garfield,
        },
        {
            path: '/games/:slug',
            name: 'level-select',
            component: Location,
        },
        {
            path: '/games/:slug/:location/:mission/:difficulty',
            name: 'map-view',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "map-view" */ './views/Map.vue'),
        },
        {
            path: '/user/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "login" */ './views/Login.vue'),
        },
        {
          path: '/user/register',
          name: 'register',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "register" */ './views/Register.vue'),
        },
        {
            path: '/user/profile',
            name: 'profile',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(
                    /* webpackChunkName: "profile" */ './views/Profile.vue'
                ),
        },
        {
            path: '*',
            name: '404',
            component: () => import('./views/404.vue')
        },
        {
            path: '/error',
            name: '500',
            component: () => import('./views/500.vue')
        }
    ],
})
