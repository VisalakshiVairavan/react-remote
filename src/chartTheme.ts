import Highcharts from 'highcharts';
import type { Theme } from './types';

const palette = ['#6f4e37', '#2f5d50', '#c8a27a', '#8c3b2e', '#a3b18a', '#4a3b52', '#d9b44a', '#5b7c99'];

export function withChartTheme(theme: Theme, options: Highcharts.Options): Highcharts.Options {
  const text = theme === 'dark' ? '#eadfd2' : '#3b2a20';
  const grid = theme === 'dark' ? 'rgba(234, 223, 210, 0.15)' : 'rgba(59, 42, 32, 0.12)';

  return Highcharts.merge<Highcharts.Options>(
    {
      colors: palette,
      chart: { backgroundColor: 'transparent', style: { fontFamily: 'inherit' } },
      title: { style: { color: text } },
      credits: { enabled: false },
      legend: { itemStyle: { color: text }, itemHoverStyle: { color: text } },
      xAxis: { labels: { style: { color: text } }, lineColor: grid, tickColor: grid },
      yAxis: { labels: { style: { color: text } }, title: { style: { color: text } }, gridLineColor: grid },
      plotOptions: {
        pie: {
          borderColor: 'transparent',
          dataLabels: { style: { color: text, textOutline: 'none' } },
        },
      },
    },
    options,
  );
}
