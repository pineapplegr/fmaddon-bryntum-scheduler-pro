import { defineConfig } from 'vite';
import { viteSingleFile } from "vite-plugin-singlefile"
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
    plugins: [viteSingleFile(), ViteMinifyPlugin({})],
    server: {
        port: 3000,
      },
    build: {
        target: 'esnext',
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
        assetsDir: '',
    },
});