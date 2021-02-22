import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

export const menuRoutes: Array<RouteRecordRaw> =[
    {
        path: '/discovery',
        name: 'discovery',
        component: () => import('@/views/discovery'),
        meta:{
            title:'发现音乐',
            icon:'',
        }
    },

    {
        path: '/playlists',
        name: 'playlists',
        component: () => import('@/views/playlists'),
        meta:{
            title:'推荐歌单',
            icon:'',
        }
    },
    {
        path: '/songs',
        name: 'songs',
        component: () => import('@/views/songs'),
        meta:{
            title:'最新音乐',
            icon:'',
        }
    },
    {
        path: '/mvs',
        name: 'mvs',
        component: () => import('@/views/mvs'),
        meta:{
            title:'最新MV',
            icon:'',
        }
    },
]

export const routes: Array<RouteRecordRaw> = [...menuRoutes]




const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router