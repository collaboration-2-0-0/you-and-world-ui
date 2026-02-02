import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const apiUrl = env.VITE_API_URL;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@lib': '/lib',
        '@app': '/src/components/app',
        '@client': '/src/app/common/client',
        '@server': '/src/app/common/server',
        '@components': '/src/components',
        '@contexts': '/src/contexts',
        '@constants': '/src/constants',
        '@hooks': '/src/hooks',
        '@router': '/src/router',
        '@services': '/src/services',
        '@styles': '/src/styles',
        '@utils': '/src/utils',
        '@views': '/src/views',
      },
    },
    server: {
      proxy: {
        // Proxy requests starting with '/api'
        '/api': {
          target: apiUrl,
          changeOrigin: true, // Needed for virtual hosted sites
          // secure: false, // Set to true if the backend has a valid SSL certificate
          // Optionally, you can rewrite the path to remove '/api' from the request sent to the backend
          // rewrite: (path) => path.replace(/^\/api/, ''),
          ws: true,
        },
      },
    },
  };
});
