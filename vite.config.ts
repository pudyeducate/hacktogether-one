import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import tsconfigPaths from 'vite-tsconfig-paths'
import vercel from 'vite-plugin-vercel'

export default defineConfig({
  plugins: [ViteYaml(), react(), tsconfigPaths(), vercel()],
  assetsInclude: ['**/*.glb'],
})
