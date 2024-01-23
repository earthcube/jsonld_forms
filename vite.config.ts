import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import content from '@originjs/vite-plugin-content'
// https://vitejs.dev/guide/troubleshooting#module-externalized-for-browser-compatibilityg
import { nodePolyfills } from 'vite-plugin-node-polyfills' // needed for minio-javascript
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            vue: '@vue/compat',
            "@": path.resolve(__dirname, "./src"),
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
        content(
            /* options */
        ),
        nodePolyfills({
            // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
            include: ['path','fs', 'util', 'stream', 'timers',
                'timers/promises',],
        })
    ],
})
