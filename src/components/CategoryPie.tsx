import { useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { withChartTheme } from '../chartTheme';
import type { RemoteProps } from '../types';
import '../index.css';

export default function CategoryPie({ data, theme }: RemoteProps) {
  const options = useMemo(() => {
    const counts = data.products.reduce<Record<string, number>>((acc, p) => {
      acc[p.category] = (acc[p.category] ?? 0) + 1;
      return acc;
    }, {});

    return withChartTheme(theme, {
      chart: { type: 'pie', height: 440 },
      title: { text: undefined },
      tooltip: { pointFormat: '<b>{point.y}</b> products ({point.percentage:.0f}%)' },
      series: [
        {
          type: 'pie',
          name: 'Products',
          innerSize: '55%',
          data: Object.entries(counts).map(([name, y]) => ({ name, y })),
        },
      ],
    });
  }, [data, theme]);

  return (
    <div className="rm-w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
