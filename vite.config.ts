import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import tsconfigPaths from 'vite-tsconfig-paths'
import vercel from 'vite-plugin-vercel'

const ClientSideRouting = {
  name: 'dynamic-router',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.search(/^\/@\d+/) !== -1) {
        req.url = '/'
      }
      next()
    })
  },
}
export default defineConfig({
  plugins: [ViteYaml(), react(), tsconfigPaths(), vercel(), ClientSideRouting],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        viewmodel: '/viewmodel/index.html',
      },
    },
  },
})
