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
