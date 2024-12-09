"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraph = void 0;
var echarts = __importStar(require("echarts"));
function createGraph(idString, forecastData, resultData) {
    var chartDom = document.getElementById(idString);
    var myChart = echarts.init(chartDom);
    var COLORS = [
        '#FF6F61', // Red (Coral Red)
        '#5B84B1', // Blue (Steel Blue)
        '#88B04B', // Green (Olive Green)
        '#FFD700', // Yellow (Golden Yellow)
        '#9B59B6', // Purple (Amethyst Purple)
        '#00A5CF', // Cyan (Deep Cyan)
        '#FFA500', // Orange (Bright Orange)
        '#FF00FF', // Magenta (Vivid Magenta)
        '#32CD32', // Lime (Lime Green)
        '#FFC0CB' // Pink (Light Pink)
    ];
    var xAxisData = [];
    var dataForecast1 = [];
    var dataForecast2 = [];
    var dataForecast3 = [];
    var dataResult1 = [];
    var dataResult2 = [];
    var dataResult3 = [];
    for (var i = 0; i < 10; i++) {
        xAxisData.push('Group' + i);
        dataForecast1.push(+(Math.random() * 10).toFixed(2));
        dataForecast2.push(+(Math.random() * 5).toFixed(2));
        dataForecast3.push(+(Math.random() * 3).toFixed(2));
        dataResult1.push(+(Math.random() + 10).toFixed(2));
        dataResult2.push(+(Math.random() * 5).toFixed(2));
        dataResult3.push(+(Math.random() * 3).toFixed(2));
    }
    var emphasisStyle = {
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.3)'
        }
    };
    var option = {
        legend: {
            data: ['forecast1', 'forecast2', 'forecast3', 'result1', 'result2', 'result3'],
            align: 'left'
        },
        toolbox: {
            feature: {
                magicType: {
                // type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        title: {
            text: 'Graph Demo'
        },
        tooltip: {},
        xAxis: {
            data: ['Mon', 'Tus', 'Web', 'Tur', 'Fri', 'Sat', 'Sun'],
            name: 'Day',
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false }
        },
        yAxis: {},
        textStyle: {
            fontSize: 20,
            color: '#333'
        },
        series: [
            {
                name: 'forecast1',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: dataForecast1,
                color: COLORS[0]
            },
            {
                name: 'forecast2',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: dataForecast2,
                color: COLORS[1]
            },
            {
                name: 'forecast3',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: dataForecast3,
                color: COLORS[2]
            },
            {
                name: 'result1',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: dataResult1,
                color: COLORS[0]
            },
            {
                name: 'result2',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: dataResult2,
                color: COLORS[1]
            },
            {
                name: 'result3',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: dataResult3,
                color: COLORS[2]
            }
        ]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) { console.log("good"); }); // click event
    myChart.resize({
        width: 1000,
        height: 800
    });
}
exports.createGraph = createGraph;
