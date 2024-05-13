"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: ['Bank1', 'Bank2', 'Bank3'],
        datasets: [
          {
            label: 'Banks',
            data: [1250, 2500, 3750],
            backgroundColor: ['#0747b6', '#2265d8', '#2191fa']
          },
        ],
    };
    
    return (
        <Doughnut 
            data={data}
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}  
        />
    );
};

export default DoughnutChart;