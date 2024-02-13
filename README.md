<div id="top"></div>

## 使用技術一覧

<p style="display: inline">
  <img alt="angular" src="https://img.shields.io/badge/Angular-f5084c?logo=angular&logoColor=fff&style=flat">
  <img alt="typescript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat">
  <img alt="ngrx" src="https://img.shields.io/badge/NgRx-BA2BD2?logo=ngrx&logoColor=fff&style=flat">
  <img alt="nestjs" src="https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=fff&style=flat">
  <img alt="nodejs" src="https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
1. [環境](#環境)
1. [開発環境構築](#開発環境構築)
1. [ディレクトリ構成](#ディレクトリ構成)
1. [トラブルシューティング](#トラブルシューティング)

## プロジェクトについて

Angular を使用する際に使用できるテンプレート

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| Angular              | 17.1.3     |
| Node.js              | 20.10.0    |
| npm                  | 10.2.4     |
| typescript           | 5.2.2      |
| rxjs                 | 7.8.1      |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

### Angular CLI のインストール

以下のコマンドで angular-cli をグローバルにインストールします。

    npm install -g @angular/cli

### リポジトリのインストール

以下のコマンドで main ブランチをインストールします。

    git clone https://github.com/hir0kiuchida/angular-howto.git

このリポジトリはいくつかのモジュールで構成されております。

    cd angular-howto
    npm install

### UI サーバーの起動

フロントエンド部分の起動をさせます。

    npm start

ポート 4200 から起動確認ができます: [http://localhost:4200](http://localhost:4200)

### バックエンドサーバーの起動

サンプルデータを使用するため REST API バックエンドサーバーを起動させます。

    npm run server

これは小さな node REST API サーバーです。

### コマンド一覧

| コマンド                                                                      | 実行する処理                                                                                             |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `npm install`                                                                 | node_modules のインストール                                                                              |
| `ng new <プロジェクト名>`                                                     | プロジェクトの作成                                                                                       |
| `ng generate component <コンポーネント名>` または `ng g c <コンポーネント名>` | コンポーネントの作成(test.component.html, test.component.css, test.component.spec.ts, test.component.ts) |

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

```
.
├── src
│   ├── app
│   │   ├── core
│   │   │    ├── guards
│   │   │    ├── interceptors
│   │   │    ├── models
│   │   │    └── services
│   │   ├── modules
│   │   │    ├── home
│   │   │    ├── ...
│   │   │    └── ...
│   │   ├── shared
│   │   │    ├── components
│   │   │    ├── directives
│   │   │    └── pipes
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets
│   ├── environments
│   ├── index.html
│   ├── styles.scss
│   └── main.ts
├── angular.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── README.md
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## トラブルシューティング

### Error Code

How to

### Error Code

How to

<p align="right">(<a href="#top">トップへ</a>)</p>
