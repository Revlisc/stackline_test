"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
//import { ChartProps } from 'react-chartjs-2';
import { SalesData } from '../types/types';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

type ChartProps = {
    label: string,
    datasets: SalesData[]
}
export default function Chart({label, datasets}: ChartProps) {
    console.log(datasets)
    const labels = datasets.map((x) => {
        const date = new Date(x.weekEnding);
        const month = date.toLocaleString('default', { month: 'short' });
        return month })
    const data = {
        labels: labels,
        datasets: [
          {
            data: datasets.map((w) => w.retailSales),
            fill: false,
            backgroundColor: 'rgba(192, 192, 75, 0.2)',
            borderColor: 'rgb(155,166,191)',
            tension: 0.1,
          },
          {
            data: datasets.map((w) => w.wholesaleSales),
            fill: false,
            backgroundColor: 'rgba(192, 192, 75, 0.2)',
            borderColor: 'rgb(63,166,246)',
            tension: 0.1,
          },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          title: {
            display: false, // Hide the title
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false, // Hide grid lines on the x-axis
            },
            ticks: {
              autoSkip: true, // Auto-skip to show only necessary labels
              maxTicksLimit: 13
            },
          },
          y: {
            display: false, // Hide the y-axis
            grid: {
              display: false, // Hide grid lines on the y-axis
            },
          },
          
        },
      };
  
    return (
    <div className='pb-12 bg-white p-4'>
      <h1>{label}</h1>
      <div className='w-full h-96 text-center'>
        <Line data={data} options={options} className='mx-auto w-full'/>
      </div>
      
    </div>
  )
}
