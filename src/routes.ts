
import { createRouter as _createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
import  {default as ecrrTool}  from "@/components/resourceregistry.vue"
// @ts-ignore
import startPage from "@/components/startPage.vue";


export function createRouter() {

    return _createRouter({
       // base: process.env.BASE_URL,
        history: createWebHistory(),
            // @ts-ignore
        scrollBehavior: (to, _, savedPosition) => {
            if (to.hash) return {selector: to.hash};
            if (savedPosition) return savedPosition;

            return {x: 0, y: 0};
        },
        routes: [
            {
                path: '/',
                //  component: () => import('./components/startPage.vue'),
                 component: startPage,
                name: "Start"

            },
            {
                path: '/ecrr',
                // component: () => import('./components/resourceregistry.vue'),
                   component: ecrrTool,
                name: "ECRR",
                //   props: route => ({ jsonldfile: route.query.jsonldfile })
                // @ts-ignore
                props: route => ({
                    // pass one of these ;)
                    jsonldfile: route.query?.jsonldfile,
                    s3file: route.query?.s3file
                })
            }
        ],
    },
        )
}

