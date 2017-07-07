### sass = require('gulp-sass');

sassはsassとscss記法に別れる

### csscomb = require('gulp-csscomb');

記述順をいい感じにsortしてくれる
cssのプロパティの整形としてくれる

### util = require('gulp-util');

gulpのプラグイン
ロギングや色コードなどのユーティリティを提供
util.log, noop, colors のメソッドを使える

### rename = require('gulp-rename');
ファイルを簡単にリネームすることができる

npmライブラリ

モジュール機能を使いたいため汎用言語としてCommonJsが生まれた。
改良されてnode.jsが生まれた。
node.jsはnpmでパッケージ管理をする。
grant, bower
bower: ブラウザ上で動く懐かしいjsのパッケージ管理ツール
- JQuery, AngularJS, パララックス

bowerはnodeで書かれている。だからnpm installしないといけない
nodeはサーバーサイド言語だからブラウザ上でそのまま動くことはない
browserify: nodeで書いて最後にjsに変換してくれる

### plumber = require('gulp-plumber');

npmライブラリ
Stream中に起こるのエラーが原因でタスクが強制停止することを防止するモジュールです。watch中にエラーが発生するとwatch自体が停止してしまうため、これを防止するために使われています。

### cache = require('gulp-cached');

対象となるファイルをメモリにキャッシュし、変更された分だけを処理させることができます。

### minimist = require('minimist');

ァイルを指定して、gulpを実行したい！ -> gulpでファイル名を引数でわたせばいいんじゃないの？ デフォルトでは引き分せないのでminimistを使う

### chalk = require('chalk');
元々はcolor.jsが主流だったがstring.prototypeのような問題が出てきてしまった。
ので、chalk使うといい感じになる。

String.prototypeとは？

### notify = require('gulp-notify');

gulpタスク実行中にエラーが出たらデスクトップ通知を出す

### concat = require('gulp-concat');

ファイルを一つにまとめる

### uglify = require('gulp-uglify');

圧縮くん
uglify: 醜くする

### sassPartialsImported = require('gulp-sass-partials-imported');

sass, catche を並列に行うと時間がかかる。そのため同時にやってしまう術

### postcss = require('gulp-postcss');

Sassのコンパイルはgulp-sassで行い、ポストプリセッサーであるgulp-postcssにその後の処理を連携させるイメージ

### autoprefixer = require('autoprefixer');

autoprefixerというツールを使えばベンダープレフィックスを自動で付けたCSSを作成できる

ベンダープレフィックスとは？
つけると全てのブラウザに対応できるようになる。
-webkit-、-moz-、-ms-、-o-
現状CSS3のプロパティはベンダープレフィックスなしでも大丈夫になってきました。

### stylelint = require('gulp-stylelint');

ESLintのようなconfigでPostCSSプラグインとして動くstylelint。

### stylefmt = require('gulp-stylefmt');

gluntとgulpは同列



### メモ
- bundleのバージョンのようにパッケージ管理ソフトのバージョンも気にするべき
- nodeとnpmを少しごっちゃにしていた...。

- そもそもサーバー上でフロントjsのライブラリをinstallする意味が分かっていなかった。<- これでかい
- jsのフロントライブラリはブラウザ上でinstallしたりしていると思っていた
  - しかし、今はサーバー上でもともとパッケージ管理したり圧縮かけたりした方がリクエストレスポンスの数が少なくて済むのでページの読み込みがスピード早い。なのでそんなことはしていない。<- この考えが足りてなくて、サーバー上でinstallする意味がぜんぜん分かってなくて不安だった。
- だからbowerのようなパッケージ管理くんが必要。

- bower install すると bower_components/ に追加される

```
% npm install -g bower                                                                                                                                          (git)-[master]
npm WARN deprecated bower@1.8.0: ..psst! While Bower is maintained, we recommend Yarn and Webpack for *new* front-end projects! Yarn's advantage is security and reliability, and Webpack's is support for both CommonJS and AMD projects. Currently there's no migration path, but please help to create it: https://github.com/bower/bower/issues/2467
/Users/y.kondo/.anyenv/envs/ndenv/versions/v4.1.1/bin/bower -> /Users/y.kondo/.anyenv/envs/ndenv/versions/v4.1.1/lib/node_modules/bower/bin/bower
bower@1.8.0 /Users/y.kondo/.anyenv/envs/ndenv/versions/v4.1.1/lib/node_modules/bower
```



- public/ を作った理由
  - セキュリティ的な問題
  - READMEが見えるのは困る
  - 今はpublicディレクトリを作って、ドキュメントルートをpublicに設定している
  - これによりREADMEが見られる問題は解消される。
  - Railsはドキュメントルートの設定は一応public/になっていて、その中に見られてもよいファイルが置いてある。
  - でもドキュメントルート->index.phpとかではなく、index.phpの前にrack?なにかのサーバーがconfig/routesに向けている

### ToDo
  既存の処理に影響がないようにしないといけない。その検証が大変そう。
  タスクが終わったら文章化すること。
  圧縮させて圧縮させたファイルで何やっているかだけはみる。
  その内容がバグをださないようにする
  一つにまとめた -> どのファイルでも読まれることになる -> 今まで読み込んでいたファイルは不要となる -> 消す

## メモ
vim 
q: でコマンド履歴， q/ で検索履歴が開ける
`:%s/\(.*\)Bar\(.*\)Bar\(.*Second\)/\1Foo\2Foo\3/`

UDP：スピード重視、確認を取らないで送る
TCP：安全性重視、確認を取りながら送る




























