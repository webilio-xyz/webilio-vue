import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, 'src/Components/index.js'),
                Input: resolve(__dirname, 'src/Components/Input/index.js'),
                Table: resolve(__dirname, 'src/Components/Table/index.js'),
                Layout: resolve(__dirname, 'src/Components/Layout/index.js'),
                Modal: resolve(__dirname, 'src/Components/Modal/index.js'),
                Component: resolve(__dirname, 'src/Components/Component/index.js'),
                Models: resolve(__dirname, 'src/Models/index.js'),
            },
            formats: ['es'],
            fileName: (format, entryName) => `${entryName}.js`,
        },
        rollupOptions: {
            external: [
                'vue',
                'vue-router',
                '@inertiajs/vue3',
                'laravel-vue-i18n',
                '@kalimahapps/vue-icons',
                'date-fns',
                'date-fns-tz',
                '@vuepic/vue-datepicker',
            ],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
    },
});