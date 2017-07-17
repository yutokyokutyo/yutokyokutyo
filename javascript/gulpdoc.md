### メモ
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
