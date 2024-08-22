import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import i18n from "laravel-vue-i18n/vite";
import {viteSingleFile} from "vite-plugin-singlefile";

let plugins = [
    vue({
    }),
    i18n(),
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(viteSingleFile());
}

export default defineConfig({
    plugins: plugins,
    root: "src",
    build: {
        outDir: '../docs',
        cssCodeSplit: false,
    }
});

