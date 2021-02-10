module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // ローカル開発用環境を立ち上げる
    // 実行時にブラウザが自動的に localhost を開く
    devServer: {
        contentBase:`${__dirname}/public`,
        open: true,
        hot: true,
    },
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/main.tsx",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/public/js`,
      publicPath: "/js/",
      // 出力ファイル名
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          // TypeScript をコンパイルする
          use: "ts-loader",
        },
      ],
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    // ES5(IE11等)向けの指定
    target: ["web", "es5"],
  };