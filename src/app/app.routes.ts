import { Routes, UrlSegment } from "@angular/router";

import { FirstComponent } from "./modules/first/first.component";
import { ProfileComponent } from "./modules/profile/profile.component";
import { SecondComponent } from "./modules/second/second.component";
import { HomeComponent } from "./shared/components/home/home.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

export const routes: Routes = [
  // 空のパスはデフォルトパスなので先頭に持ってくる
  { path: "", redirectTo: "/first", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "first", component: FirstComponent },
  { path: "second", component: SecondComponent },
  {
    matcher: (url) => {
      if (url.length === 1) {
        return {
          consumed: url,
          posParams: {
            urlPath: new UrlSegment(url[0].path.slice(), {}),
          },
        };
      }
      return null;
    },
    component: ProfileComponent,
  },
  // ワイルドカードは全てのパスにマッチする。つまり上記のパス以外。なので最後に持ってくる。
  { path: "**", component: PageNotFoundComponent },
];
