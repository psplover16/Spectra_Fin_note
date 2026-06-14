import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';

function normalizeBasePath(value: string | undefined): string {
  const rawValue = value?.trim() || '/';

  if (rawValue === '/') {
    return '/';
  }

  const withLeadingSlash = rawValue.startsWith('/') ? rawValue : `/${rawValue}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

function normalizeStartUrl(value: string | undefined, fallback: string): string {
  const rawValue = value?.trim();

  if (!rawValue) {
    return fallback;
  }

  if (/^https?:\/\//.test(rawValue)) {
    return rawValue;
  }

  return normalizeBasePath(rawValue);
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const appBasePath = normalizeBasePath(env.VITE_APP_BASE_PATH);
  const appStartUrl = normalizeStartUrl(env.VITE_APP_START_URL, appBasePath);

  return {
    base: appBasePath,
    build: {
      chunkSizeWarningLimit: 500,
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-vue': ['vue', 'vue-router']
          }
        }
      }
    },
    plugins: [
      vue(),
      Icons({ compiler: 'vue3' }),
      VitePWA({
        registerType: 'prompt',
        manifest: {
          name: '國營資訊考試講義 PWA',
          short_name: '國營資訊',
          start_url: appStartUrl,
          display: 'standalone',
          background_color: '#f6f0e8',
          theme_color: '#b45a32'
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json,webmanifest}'],
          navigationPreload: true,
          navigateFallback: `${appBasePath}index.html`,
          navigateFallbackDenylist: [/^\/api\//],
          cleanupOutdatedCaches: true,
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.mode === 'navigate',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'navigation',
                networkTimeoutSeconds: 3
              }
            }
          ]
        }
      }),
      mode === 'analyze' && visualizer({ filename: 'dist/stats.html', gzipSize: true, brotliSize: true })
    ].filter(Boolean) as ReturnType<typeof vue>[],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  };
});
