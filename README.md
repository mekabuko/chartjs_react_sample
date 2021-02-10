# Charts_Sample
作図系のパッケージのサンプル。グラフなどを作図したい。

## パッケージ比較
### Chart.js
- [official](https://www.chartjs.org/)
- [npm](https://www.npmjs.com/package/chart.js?activeTab=readme)
  - Weekly Downloads : 1,372,883
- [github](https://github.com/chartjs/Chart.js)
  - Star : 52.1k

### ※ React Rapper
今考えているニーズとしては
- サーバ側で動かす（サーバ上でChromeを動かしてCanvasを起動）
- Canvas上に描ければいい

なので、Reactを使う必要はないが、もしReact側で何かしたい、という場合ならこれが使えそう。
とりあえず動きを確認したい、というニーズならこっちを使った方が楽かも。

- [github](https://github.com/reactchartjs/react-chartjs-2)
  - Star : 3.7k

#### 参考
- https://dev.classmethod.jp/articles/react-ts-chart-js/


## TODO

### 基本的な環境
- [x] Webpackで起動

### 作図
- [x] 棒グラフ
- [x] 散布図
- [x] レーダーチャート

## 参考
- https://ics.media/entry/16329/
- https://qiita.com/cheez921/items/266b1b4534b6111a9686
