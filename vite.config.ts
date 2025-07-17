import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/guide/troubleshooting#module-externalized-for-browser-compatibilityg
import { nodePolyfills } from 'vite-plugin-node-polyfills' // needed for minio-javascript

import dsv from '@rollup/plugin-dsv'
import { fileURLToPath } from 'url'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: 'public',
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            // vue: '@vue/compat',
            "@": fileURLToPath(new URL('./src', import.meta.url))
            ,"vuetify/labs/VNumberInput":
                path.resolve(
                __dirname,
                "node_modules/vuetify/lib/components/VNumberInput/index.js",
            ),
        "vuetify/labs/VTimePicker": path.resolve(
            __dirname,
            "node_modules/vuetify/lib/components/VTimePicker/index.js",
        ),
        crypto: 'crypto-js'

        }
    },
    plugins: [vue({
        template: {
            compilerOptions: {
                compatConfig: {
                    MODE: 2
                }
            }
        }
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
                'timers/promises'
             //   ,'readable'
                ,'https',
                'crypto'
            ],
            globals: {
                Buffer: true,
                global: true,
                process: true
            }

        })
    ],    optimizeDeps: {
        esbuildOptions: {
            define: {
                global: 'globalThis'
            }
        }
    }

})
