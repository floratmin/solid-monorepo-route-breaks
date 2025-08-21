import {Routes} from "util-i18n";
import {ChildLocale, RootLocale} from "./localeSettings";

export type MenuName = 'main' | 'footer' | 'app';

export const routes = {
  '(page)': {
    routes: {
      index: {
        name: 'Home',
        menus: ['main', 'footer'],
        prerender: true,
        locales: {
          de: {
            name: 'Home en=>de',
          },
          ar: {
            name: 'Home en=>ar',
          },
        },
      },
      about: {
        name: 'About',
        menus: ['main'],
        prerender: true,
        locales: {
          de: {
            name: 'About en=>de',
            slug: 'über',
          },
          ar: {
            name: 'About en=>ar',
            slug: 'عن',
          },
        },
      },
      '(nested)': {
        routes: {
          nested: {
            name: 'nested',
            prerender: true,
          },
        },
      },
      '[...404]': ['en', 'de', 'ar'],
      bar: {
        name: 'Bar',
        menus: ['main'],
        routes: {
          index: {
            name: 'All Bar',
            prerender: true,
            locales: {
              de: {
                name: 'All Bar en=>de',
              },
              ar: {
                name: 'All Bar en=>ar',
              },
            },
          },
          foo: {
            name: 'Foo',
            prerender: true,
            locales: {
              de: {
                name: 'Foo en=>de',
                slug: 'foode',
              },
            },
          },
          bazde: {
            menus: ['main'],
            root: 'de',
            prerender: true,
            locales: {
              de: {
                name: 'Baz',
                slug: 'bazde',
              },
              ar: {
                name: 'Baz de=>ar',
                slug: 'baz-de-ar',
              },
            },
          },
        },
        locales: {
          de: {
            name: 'Bar en=>de',
            slug: 'barde',
          },
          ar: {
            name: 'Bar en=>ar',
            slug: 'barar',
          },
        },
        template: 'normal',
      },
      'bar(more)': {
        routes: {
          foobar: {
            name: 'Foo Bar',
            prerender: true,
            locales: {
              de: {
                name: 'Foo Bar en=>de',
                slug: 'foobar-en-de',
              },
              ar: {
                name: 'Foo Bar en=>ar',
                slug: 'foobar-en-ar',
              },
            },
          },
        },
        locales: {
          de: {
            slug: 'barde(more)',
          },
          ar: {
            slug: 'barar(more)',
          },
        },
      },
      root: {
        routes: {
          '(root)': {
            name: 'Root page',
            menus: [],
            prerender: true,
            locales: {
              ar: {
                name: 'Root page en=>ar',
              },
            },
          },
        },
        locales: {
          ar: {
            slug: 'root-en-ar',
          },
        },
        template: 'root',
      },
      user: {
        routes: {
          '[[id]]': {
            name: 'User',
            menus: ['main'],
            locales: {
              de: {
                name: 'User en=>de',
              },
              ar: {
                name: 'User en=>ar',
              },
            },
          },
        },
        locales: {
          de: {
            slug: 'user-en-de',
          },
          ar: {
            slug: 'user-en-ar',
          },
        },
      },
      impressum: {
        menus: ['footer'],
        root: 'de',
        prerender: true,
        locales: {
          de: {
            name: 'Impressum',
          },
        },
      },
      arde: {
        menus: [],
        root: 'ar',
        prerender: true,
        locales: {
          ar: {
            name: 'Arde',
            slug: 'arde',
          },
          de: {
            name: 'Arde ar=>de',
            slug: 'arde-ar-de',
          },
        },
      },
    },
    locales: {
      de: {
        slug: '(page)',
      },
      ar: {
        slug: '(page)',
      },
    },
    template: 'normal',
  },
  app: {
    routes: {
      '(app)': {
        name: 'App Home',
        menus: ['app'],
        prerender: true,
        locales: {
          de: {
            name: 'App Home en=>de',
          },
          ar: {
            name: 'App Home en=>ar',
          },
        },
      },
    },
    locales: {
      de: {
        slug: 'app-en-de',
      },
      ar: {
        slug: 'app-en-ar',
      },
    },
    template: 'root',
  },
}  satisfies Routes<ChildLocale, RootLocale>;
