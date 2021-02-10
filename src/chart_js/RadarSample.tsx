// ref: https://dev.classmethod.jp/articles/react-ts-chart-js/
import * as React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarSample = () => {

    const data = {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
            label: 'Dataset',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    }

    const options = {
    }

    return (
        <Radar
            data={data}
            width={2}
            height={1}
            options={options}
        />
    );
};

export default RadarSample;