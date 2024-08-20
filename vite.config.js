import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import i18n from "laravel-vue-i18n/vite";
import {viteSingleFile} from "vite-plugin-singlefile";

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
        viteSingleFile()
    ],
    root: "src",
    build: {
        outDir: '../docs',
        cssCodeSplit: false,
    }
});

