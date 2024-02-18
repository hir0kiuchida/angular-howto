import { ApplicationConfig } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import { routes } from "./app.routes";

/**
 * memo
 * AngularCLIでプロジェクトを作成した際にデフォルトで作成される
 * providers: [provideRouter(routes)]
 * withComponentInputBinding()
 * provideAnimationsAsync()
 */

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideAnimationsAsync()],
};
