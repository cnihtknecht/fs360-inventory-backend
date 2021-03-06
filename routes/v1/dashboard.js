var express = require('express');
var router = express.Router();
const asyncHandler = require("express-async-handler");

const chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};


router.get("/revenue", asyncHandler(async function(reg,res,next){
    return res.json({
        barChartData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets:[
                {
                    label: 'Income',
                    backgroundColor: [
                        chartColors.green,
                        chartColors.green,
                        chartColors.green,
                        chartColors.green,
                        chartColors.green
                    ],
                    data: [5,3,4,6,4]
                }
            ],
        },
        barChartOptions: {
            responsive: true,
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Monthly Income'
            },       
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            suggestedMax:10                         
                        }
                    }
                ]
            }     
        },
    }
    )
}));

module.exports = router;

//test change
