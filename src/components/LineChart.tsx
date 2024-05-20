import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const data = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Сегодня'],
    datasets: [
      {
        label: 'Реферальные средства',
        data: [1239, 1449, 1339, 1559, 1569, 1639, 1299],
        borderColor: 'rgba(95,131,158)',
        backgroundColor: 'rgba(0, 123, 255, 0.7)',
        fill: false,
        tension: 0.4,
        pointRadius: 4,
        
      },
      {
        label: 'По плану',
        data: [1298, 1248, 1540, 1219, 1486, 1227, 1290],
        borderColor: 'rgba(128, 128, 128, 0.3)',
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
        fill: false,
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        intersect: false, // Добавьте эту строку
        callbacks: {
          label: function (context) {
            let label = '';
            if (context.parsed.y !== null) {
              label += '$' + context.parsed.y;
            }
            return label;
          },
          title: function (context) {
            return data.labels[context[0].dataIndex];
          },
        },
        displayColors: false,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        bodyColor: '#000000',
        titleColor: 'rgba(128, 128, 128, 1)',
        titleFont: {
          size: 9,
        },
        bodyFont: {
          size: 24,
          weight: 'bold',
        },
        cornerRadius: 5,
        padding: '20',
      },
    },
    scales: {
      x: {
        offset: true,
        grid: {
          display: true,
        },
      },
      y: {
        beginAtZero: false,
        offset: true,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        fill: true, // Закрашиваем область под линией
      },
    },
  };
  
  

  return (
    <div>
      <Line data={data} options={options} width="full"/>
    </div>
  );
};

export default LineChart;
