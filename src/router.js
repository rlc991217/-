import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/wode',
            name: 'wode',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/wode.vue')
        },
        {
            path: '/dianyin',
            name: 'dianyin',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/dianyin.vue'),
            children: [{
                    path: 'city',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './components/City')
                }, {
                    path: 'nowPlaying',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './components/NowPlaying')
                },
                {
                    path: 'comingSoon',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './components/ComingSoon')
                },
                {
                    path: 'search',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './components/Search')
                },
                //重定向:当前路径为:/wode时,重定向到/wode/nowPlaying路径
                {
                    path: '/dianyin',
                    redirect: '/dianyin/nowPlaying'
                }
            ]
        },
        {
            path: '/',
            redirect: '/dianyin'
        }, {
            path: '/yingyuan',
            name: 'yingyuan',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/yingyuan.vue')
        }
    ]
})