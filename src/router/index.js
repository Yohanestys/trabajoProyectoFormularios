import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//import Inicio from '../views/Inicio.vue'
//import EjecucionPracticas from '../EjecucionPracticas.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Inicio',
        component: () =>
            import ( /* webpackChunkName: "inicio" */ '../views/Inicio.vue')

    },

    {
        path: '/inicioPracticas',
        name: 'Fase Inicio Prácticas',
        component: () =>
            import ( /* webpackChunkName: "inicioPracticas" */ '../views/InicioPracticas.vue')

    },

    {
        path: '/ejecucion',
        name: 'Fase Ejecucion Prácticas',
        component: () =>
            import ( /* webpackChunkName: "ejecucion" */ '../views/EjecucionPracticas.vue')

    },

    {
        path: '/final',
        name: 'Final practicas',
        component: () =>
            import ( /* webpackChunkName: "final" */ '../views/FinalPracticas.vue')

    },

    {
        path: '/formularioFaceInicio/:id',
        name: 'FormularioFaceInicio',
        component: () =>
            import ( /* webpackChunkName: "formularioInicio" */ '../views/formularios/FormularioFaceInicio.vue')

    },

    {
        path: '/formularioEjecucion/:id',
        name: 'formularioEjecucion',
        component: () =>
            import ( /* webpackChunkName: "formularioEjecucion" */ '../views/formularios/FormularioEjecucion.vue')

    },

    {
        path: '/formularioFinal/:id',
        name: 'formularioFinal',
        component: () =>
            import ( /* webpackChunkName: "formularioFinal" */ '../views/formularios/FormularioFinal.vue')

    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router