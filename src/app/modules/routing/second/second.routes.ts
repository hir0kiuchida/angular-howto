import { SecondChildAComponent } from "../second-child-a/second-child-a.component";
import { SecondChildBComponent } from "../second-child-b/second-child-b.component";
import { SecondComponent } from "./second.component";

/**
 * export defult としない場合は以下のように作成する
 * import { Route } from "@angular/router";
 * export const SECOND_CHILDS: Route[] = []
 * その場合はapp.routes.tsを以下のように修正する
 * loadChildren: () => import("./modules/second/second.routes").then(m => m.SECOND_CHILDS)
 */

export default [
  {
    path: "",
    component: SecondComponent,
    children: [
      { path: "child-a", component: SecondChildAComponent },
      {
        path: "child-b",
        title: "Second-Child-B component",
        component: SecondChildBComponent,
      },
    ],
    // providers[]を作成してServiceなどを追加すればそのコンポーネントだけに提供するものを指定することができる
    // 例えばAdminServiceを必要としてるのがadminComponentだけな時
  },
];
