import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
//import content from '@originjs/vite-plugin-content'
// https://vitejs.dev/guide/troubleshooting#module-externalized-for-browser-compatibilityg
import { nodePolyfills } from 'vite-plugin-node-polyfills' // needed for minio-javascript
import * as path from 'path';
import dsv from '@rollup/plugin-dsv'
// https://vitejs.dev/config/
export default defineConfig({
    transpileDependencies: ['@jsonforms/core', '@jsonforms/vue', '@jsonforms/vue-vuetify'],
    publicDir: 'public',
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            // vue: '@vue/compat',
            "@": path.resolve(__dirname, "./src"),
        }
    },
    plugins: [vue({
        template: {
            transformAssetUrls,
            compilerOptions: {
                compatConfig: {
                    MODE: 3
                }
            }
        }
    }),
        vuetify({ autoImport: true }),
        dsv(),

        // content(
        //     {
        //         csv: {
        //             csvOptions: {
        //                 columns:true,
        //             }
        //
        //         }
        //     }
        //
        // ),
        nodePolyfills({
            // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
            include: ['path','fs', 'util', 'stream', 'timers',
                'timers/promises','https'],
        })
    ],
})
