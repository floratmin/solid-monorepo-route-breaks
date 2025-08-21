import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/l10nProvider/L10nProvider.tsx'),
        resolve(__dirname, 'src/CButton/CButton.tsx'),
        resolve(__dirname, 'src/index.ts'),
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'util-generated/dist/rtl.ts',
        'util-base-4096-encoder',
        'util-l10n',
      ],
    },
  },
  resolve: {
    alias: {
      src: resolve('src/'),
    },
  },
  plugins: [
    dts({
      // rollupTypes: true,
      // include: [
      //   resolve(__dirname, 'src/index.ts'),
      //   resolve(__dirname, 'src/CButton/CButton.tsx'),
      // ],
      // beforeWriteFile: (filePath, content) => ({
      //   filePath: filePath.replace(/\/[^/]+(?<=\/[^/]+)$/, '.d.ts'),
      //   content,
      // }),
      tsconfigPath: 'tsconfig.lib.json',
    }),
  ],

  test: {
    globals: true,
  },
})
