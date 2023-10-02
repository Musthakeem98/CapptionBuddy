import ReactECharts from 'echarts-for-react';
import '../styles/chart.css'

const EChartsBarChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
        // Set bar color to orange
        itemStyle: {
          color: '#ff6d00',
        },
        // Set hover color to orange
        emphasis: {
          itemStyle: {
            color: '#ff7900',
          },
        },
      },
    ],
  };

  return (
    <div style={{ width: '50VW', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
      <ReactECharts option={option} />
    </div>
  );
};

export default EChartsBarChart;

