import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import content from '@originjs/vite-plugin-content'
// https://vitejs.dev/guide/troubleshooting#module-externalized-for-browser-compatibilityg
import { nodePolyfills } from 'vite-plugin-node-polyfills' // needed for minio-javascript
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
//import * as path from 'path';
import { fileURLToPath, URL } from 'node:url'
import dsv from '@rollup/plugin-dsv'
// https://vitejs.dev/config/
export default defineConfig({
    publicDir: 'public',
    build: {
        outDir: 'dist',
    },
    define: { 'process.env': {} },
    resolve: {
        alias: {
            // vue: '@vue/compat',
          //  "@": path.resolve(__dirname, "./src"),
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    plugins: [
        vue({
            template: {
                transformAssetUrls
                // compilerOptions: {
                //     compatConfig: {
                //         MODE: 2
                //     }
                // }
            }
        }),
        vuetify({
            autoImport: true,
        }),
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
                'timers/promises','readable','https'],
        })
    ],
})
