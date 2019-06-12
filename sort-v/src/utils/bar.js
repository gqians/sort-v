import echarts from 'echarts';
// 基于准备好的dom，初始化echarts实例

let myChart = (div) => {
  return echarts.init(document.getElementById(div));
}

let option = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: []
  },
  yAxis: {},
  series: [{
    type: 'bar',
    data: []
  }]
}
export default {
  myChart,
  option
}
