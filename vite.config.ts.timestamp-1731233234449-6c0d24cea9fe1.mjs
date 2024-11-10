// vite.config.ts
import { defineConfig } from "file:///D:/IISMAx/hacktogether-one/node_modules/vite/dist/node/index.js";
import react from "file:///D:/IISMAx/hacktogether-one/node_modules/@vitejs/plugin-react/dist/index.mjs";
import ViteYaml from "file:///D:/IISMAx/hacktogether-one/node_modules/@modyfi/vite-plugin-yaml/dist/index.js";
import tsconfigPaths from "file:///D:/IISMAx/hacktogether-one/node_modules/vite-tsconfig-paths/dist/index.mjs";
import vercel from "file:///D:/IISMAx/hacktogether-one/node_modules/vite-plugin-vercel/dist/index.js";
var ClientSideRouting = {
  name: "dynamic-router",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.search(/^\/@\d+/) !== -1) {
        req.url = "/";
      }
      next();
    });
  }
};
var vite_config_default = defineConfig({
  plugins: [ViteYaml(), react(), tsconfigPaths(), vercel(), ClientSideRouting],
  assetsInclude: ["**/*.glb"],
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        viewmodel: "/viewmodel/index.html"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxJSVNNQXhcXFxcaGFja3RvZ2V0aGVyLW9uZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcSUlTTUF4XFxcXGhhY2t0b2dldGhlci1vbmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0lJU01BeC9oYWNrdG9nZXRoZXItb25lL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgVml0ZVlhbWwgZnJvbSAnQG1vZHlmaS92aXRlLXBsdWdpbi15YW1sJ1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xyXG5pbXBvcnQgdmVyY2VsIGZyb20gJ3ZpdGUtcGx1Z2luLXZlcmNlbCdcclxuXHJcbmNvbnN0IENsaWVudFNpZGVSb3V0aW5nID0ge1xyXG4gIG5hbWU6ICdkeW5hbWljLXJvdXRlcicsXHJcbiAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xyXG4gICAgc2VydmVyLm1pZGRsZXdhcmVzLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgaWYgKHJlcS51cmwuc2VhcmNoKC9eXFwvQFxcZCsvKSAhPT0gLTEpIHtcclxuICAgICAgICByZXEudXJsID0gJy8nXHJcbiAgICAgIH1cclxuICAgICAgbmV4dCgpXHJcbiAgICB9KVxyXG4gIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbVml0ZVlhbWwoKSwgcmVhY3QoKSwgdHNjb25maWdQYXRocygpLCB2ZXJjZWwoKSwgQ2xpZW50U2lkZVJvdXRpbmddLFxyXG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5nbGInXSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIG1haW46ICcvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgdmlld21vZGVsOiAnL3ZpZXdtb2RlbC9pbmRleC5odG1sJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUSxTQUFTLG9CQUFvQjtBQUNuUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sWUFBWTtBQUVuQixJQUFNLG9CQUFvQjtBQUFBLEVBQ3hCLE1BQU07QUFBQSxFQUNOLGdCQUFnQixRQUFRO0FBQ3RCLFdBQU8sWUFBWSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVM7QUFDekMsVUFBSSxJQUFJLElBQUksT0FBTyxTQUFTLE1BQU0sSUFBSTtBQUNwQyxZQUFJLE1BQU07QUFBQSxNQUNaO0FBQ0EsV0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUNBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLGNBQWMsR0FBRyxPQUFPLEdBQUcsaUJBQWlCO0FBQUEsRUFDM0UsZUFBZSxDQUFDLFVBQVU7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
