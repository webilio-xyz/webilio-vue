import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import i18n from "laravel-vue-i18n/vite";

export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        i18n(),
    ],
    root: "src",
    build: {
        outDir: '..'
    }
});

