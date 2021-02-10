import * as React from 'react';
import BarSample from "./BarSample";
import RadarSample from "./RadarSample";
import ScatterSample from "./ScatterSample";

const ChartJsSamplePage = () => {
    return (
        <div>
            <h1>Chart.js React サンプル</h1>
            <p>Chart.jsのラッパーなので、出来ることは基本的に同じ。</p>
            <h2>● 棒グラフ</h2>
            <div>
                <BarSample/>
            </div>
            <h2>● 散布図</h2>
            <div>
                <ScatterSample/>
            </div>
            <h2>● レーダーチャート</h2>
            <div>
                <RadarSample/>
            </div>
            <hr></hr>
        </div>
    );
};

export default ChartJsSamplePage;