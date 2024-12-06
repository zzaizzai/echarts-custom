import * as echarts from 'echarts';

const chartDom = document.getElementById('myChart') as HTMLElement;
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
    left: '10%',
    right: '10%',
    bottom: '10%',
    top: '20%',
    containLabel: true
  }
};

myChart.setOption(option);
