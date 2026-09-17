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
      chart: { type: 'pie', height: 500 },
      title: { text: undefined },
      tooltip: { pointFormat: '<b>{point.y}</b> products ({point.percentage:.0f}%)' },
      series: [
        {
          type: 'pie',
          name: 'Products',
          innerSize: '55%',
          size: '90%',
          data: Object.entries(counts).map(([name, y]) => ({ name, y })),
        },
      ],
      responsive: {
        rules: [
          {
            condition: { maxWidth: 640 },
            chartOptions: {
              chart: { height: 520 },
              plotOptions: { pie: { size: '100%', dataLabels: { distance: 6 } } },
            },
          },
        ],
      },
    });
  }, [data, theme]);

  return (
    <div className="rm-w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
