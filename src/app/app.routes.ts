import { Routes } from "@angular/router";

import { FirstComponent } from "./modules/first/first.component";
import { HomeComponent } from "./shared/components/home/home.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

/**
 * Routesの順番:
 * - 頭: 空のパスはデフォルトパスなので先頭に持ってくる
 * - 後: ワイルドカードは全てのパスにマッチする。つまり上から当てはまらなかったパスが最後にナビゲートする先。
 * title: ブラウザのタブに表示したい内容
 * children: 子コンポーネントに<router-outlet>を追加することで孫コンポーネントにナビゲートできる
 */

export const routes: Routes = [
  // 空のパス localhost:4200/の時はlocalhost:4200/firstへリダイレクト
  { path: "", redirectTo: "/first", pathMatch: "full" },
  // パターン1
  // localhost:4200/first
  {
    path: "first",
    title: "First component",
    component: FirstComponent,
  },
  {
    path: "second",
    // LazyLoading
    loadChildren: () => import("./modules/second/second.routes"),
  },
  // パターン2
  {
    path: "user-profile/:userId",
    // LazyLoading
    loadComponent: () =>
      import("./modules/profile/profile.component").then((mod) => mod.ProfileComponent),
    data: {
      profile: true,
    },
  },
  { path: "home", title: "Home component", component: HomeComponent },
  { path: "**", title: "Not Found 404", component: PageNotFoundComponent },
];
