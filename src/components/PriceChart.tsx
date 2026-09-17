import { useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { withChartTheme } from '../chartTheme';
import type { RemoteProps } from '../types';
import '../index.css';

export default function PriceChart({ data, theme }: RemoteProps) {
  const options = useMemo(
    () =>
      withChartTheme(theme, {
        chart: { type: 'column', height: 440 },
        title: { text: undefined },
        legend: { enabled: false },
        xAxis: { categories: data.products.map((p) => p.title), labels: { rotation: -45 } },
        yAxis: { title: { text: 'Price (USD)' } },
        tooltip: { valuePrefix: '$' },
        series: [{ type: 'column', name: 'Price', data: data.products.map((p) => p.price), borderRadius: 4 }],
      }),
    [data, theme],
  );

  return (
    <div className="rm-w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
