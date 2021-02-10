// ref: https://dev.classmethod.jp/articles/react-ts-chart-js/
import * as React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterSample = () => {

    const data = {
        labels: ['Data'],
        datasets: [{
            label: 'Dataset',
            data: getRandomScatterPoints(100),
            backgroundColor:'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    return (
        <Scatter
            data={data}
            width={2}
            height={1}
            options={options}
        />
    );
};

type ScatterPoint = {
    x: number,
    y: number
}

const getRandomScatterPoints = (_num_of_points: number): ScatterPoint[] => {
    return Array(_num_of_points).fill(0).map(a => {
        return {x: Math.random() * 10, y : Math.random() * 5}
    })
}

export default ScatterSample;