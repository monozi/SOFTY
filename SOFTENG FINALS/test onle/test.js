const data = {
    datasets: [{
        label: 'Modules',
        data: [
            { x: Date.parse('2023-09-01 00:00:00 GMT+0800'), y: 20000 },
            { x: Date.parse('2023-10-01 00:00:00 GMT+0800'), y: 40000 },
            { x: Date.parse('2023-11-01 00:00:00 GMT+0800'), y: 60000 },
            { x: Date.parse('2023-12-01 00:00:00 GMT+0800'), y: 70000 },
            { x: Date.parse('2024-01-01 00:00:00 GMT+0800'), y: 20000 },
            { x: Date.parse('2024-02-01 00:00:00 GMT+0800'), y: 60000 },
            { x: Date.parse('2024-03-01 00:00:00 GMT+0800'), y: 40000 },
        ],
        backgroundColor: 'rgba(68, 141, 242, 1)',
        borderColor: 'rgba(68, 141, 242, 1)',
        tension: 0.4
    }, {
        label: 'Units',
        data: [
            { x: Date.parse('2023-09-01 00:00:00 GMT+0800'), y: 40000 },
            { x: Date.parse('2023-10-01 00:00:00 GMT+0800'), y: 20000 },
            { x: Date.parse('2023-11-01 00:00:00 GMT+0800'), y: 20000 },
            { x: Date.parse('2023-12-01 00:00:00 GMT+0800'), y: 10000 },
            { x: Date.parse('2024-01-01 00:00:00 GMT+0800'), y: 30000 },
            { x: Date.parse('2024-02-01 00:00:00 GMT+0800'), y: 50000 },
            { x: Date.parse('2024-03-01 00:00:00 GMT+0800'), y: 60000 },
        ],
        backgroundColor: 'rgba(219, 163, 98, 0.28)',
        borderColor: 'rgba(219, 163, 98, 0.28)',
        tension: 0.4
    }]
};

// Config for the first chart
const config = {
    type: 'line',
    data,
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                // min: '2023-01-01',
                // max: '2023-12-31',
                type: 'time',
                time: {
                    unit: 'month'
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
};

// First Line Graph
const productionChart = new Chart(
    document.getElementById('productionChart'),
    config
);

// Dataset for the second chart
const data2 = {
    datasets: [{
        label: 'SD Card',
        data: [
            { x: Date.parse('2023-09-01 00:00:00 GMT+0800'), y: 10000 },
            { x: Date.parse('2023-10-01 00:00:00 GMT+0800'), y: 30000 },
            { x: Date.parse('2023-11-01 00:00:00 GMT+0800'), y: 20000 },
            { x: Date.parse('2023-12-01 00:00:00 GMT+0800'), y: 50000 },
            { x: Date.parse('2024-01-01 00:00:00 GMT+0800'), y: 70000 },
            { x: Date.parse('2024-02-01 00:00:00 GMT+0800'), y: 60000 },
            { x: Date.parse('2024-03-01 00:00:00 GMT+0800'), y: 80000 },
        ],
        backgroundColor: 'rgba(182, 211, 250, 1)',
        borderColor: 'rgba(182, 211, 250, 1)',
        tension: 0.4
    }, {
        label: 'Camera',
        data: [
            { x: Date.parse('2023-09-01 00:00:00 GMT+0800'), y: 20000 },
            { x: Date.parse('2023-10-01 00:00:00 GMT+0800'), y: 40000 },
            { x: Date.parse('2023-11-01 00:00:00 GMT+0800'), y: 10000 },
            { x: Date.parse('2023-12-01 00:00:00 GMT+0800'), y: 30000 },
            { x: Date.parse('2024-01-01 00:00:00 GMT+0800'), y: 40000 },
            { x: Date.parse('2024-02-01 00:00:00 GMT+0800'), y: 70000 },
            { x: Date.parse('2024-03-01 00:00:00 GMT+0800'), y: 60000 },
        ],
        backgroundColor: 'rgba(219, 163, 98, 1)',
        borderColor: 'rgba(219, 163, 98, 1)',
        tension: 0.4
    }]
};

// Config for the second chart
const config2 = {
    type: 'line',
    data: data2,
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                // min: '2023-01-01',
                // max: '2023-12-31',
                type: 'time',
                time: {
                    unit: 'month'
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
};

// Second Line Graph
const producedChart = new Chart(
    document.getElementById('producedChart'),
    config2
);

// Function to filter charts by month (need to revise)
// function filterChart(date) {
//     const year = date.value.substring(0, 4);
//     const month = date.value.substring(5, 7);

//     const lastDay = new Date(year, month, 0).getDate();
//     const startDate = `${date.value}-01`;
//     const endDate = `${date.value}-${lastDay}`;

//     productionChart.config.options.scales.x.min = startDate;
//     productionChart.config.options.scales.x.max = endDate;
//     productionChart.update();

//     producedChart.config.options.scales.x.min = startDate;
//     producedChart.config.options.scales.x.max = endDate;
//     producedChart.update();
// }

// Display Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;