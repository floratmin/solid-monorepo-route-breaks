// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import {locales} from "~/i18n/generated/settings/localeSettings";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang={locales.root} dir="ltr">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
