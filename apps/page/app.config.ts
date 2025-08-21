import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    prerender: {
      routes: [],
    },
    rollupConfig: {
      external: [],
    },
  },
  vite: {
    // plugins: [viteExtractTranslationFunction({
    //   i18nProject: JSON.parse(fs.readFileSync(path.resolve('i18n.config.json'), 'utf8')) as I18nProject,
    //   translateRoutes: translateRoutesMock,
    //   translate: translateMock,
    //   dicts: {},
    // } as ViteExtractTranslationFunctionProps<any, any>)],
  },
});
