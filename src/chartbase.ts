import * as echarts from 'echarts';


export function createGraph(idString: string) {


    const chartDom = document.getElementById(idString) as HTMLElement;
    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: 'Simple Graph'
        },
        tooltip: {},
        xAxis: {
            data: ['A', 'B', 'C', 'D', 'E', 'F']
        },
        yAxis: {},
        series: [
            {
                name: 'Score',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ],
        grid: {
            left: '100%',
            right: '100%',
            bottom: '100%',
            top: '200%',
            containLabel: true
        }
    };

    myChart.setOption(option);

}

