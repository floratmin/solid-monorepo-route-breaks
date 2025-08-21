import {Menus} from "@wismt/util-i18n";
import {ChildLocale, RootLocale} from "./settings/localeSettings";

export const menus = {
  index: {
    name: 'Home',
    locales: {
      de: {name: 'Home'},
      ar: {name: 'بيت'},
    },
    menus: ['main'],
  },
  about: {
    name: 'About',
    locales: {
      de: {name: 'Über', slug: 'über'},
      ar: {name: 'عن', slug: 'عن'},
    },
    menus: ['main'],
  },
  nested: {
    name: 'nested',
  },
  bar: {
    name: 'Bar',
    routes: {
      index: {
        name: 'All Bar',
      },
      foo: {
        name: 'Foo',
      },
      bazde: {
        menus: ['main'],
        locales: {
          de: {
            name: 'Baz',
            slug: 'bazde',
          },
        },
      },
      foobar: {
        name: 'Foo Bar',
      },
      arde: {
        menus: [],
        locales: {
          ar: {
            name: 'Arde',
            slug: 'arde',
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
    menus: ['main'],
  },
} as const satisfies Menus<ChildLocale, RootLocale>;
