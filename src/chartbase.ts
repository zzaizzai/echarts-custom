import * as echarts from 'echarts';


export function createGraph(idString: string, forecastData: any[], resultData: any[]): void {

    const chartDom = document.getElementById(idString) as HTMLElement;
    const myChart = echarts.init(chartDom);

    const COLORS: string[] = [
        '#FF6F61', // Red (Coral Red)
        '#5B84B1', // Blue (Steel Blue)
        '#88B04B', // Green (Olive Green)
        '#FFD700', // Yellow (Golden Yellow)
        '#9B59B6', // Purple (Amethyst Purple)
        '#00A5CF', // Cyan (Deep Cyan)
        '#FFA500', // Orange (Bright Orange)
        '#FF00FF', // Magenta (Vivid Magenta)
        '#32CD32', // Lime (Lime Green)
        '#FFC0CB'  // Pink (Light Pink)
    ];


    let xAxisData: string[] = [];
    let dataForecast1: number[] = [];
    let dataForecast2: number[] = [];
    let dataForecast3: number[] = [];

    let dataResult1: number[] = [];
    let dataResult2: number[] = [];
    let dataResult3: number[] = [];

    for (let i = 0; i < 10; i++) {

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


    const option: echarts.EChartsCoreOption = {
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

    myChart.setOption<echarts.EChartsCoreOption>(option);
    myChart.on('click', function (params) { console.log("good") }); // click event

    myChart.resize({
        width: 1000,
        height: 800
    })
}

