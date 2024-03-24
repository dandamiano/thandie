import { LineChart } from '@tremor/react';

type chartdataProps = {
    chartdata: {
        data: {
            date: string;
            Claims: number;
            Subscriptions: number;
        }[];
        categories: string[];
    }
}


const dataFormatter = (number: number) => `${Intl.NumberFormat('us').format(number).toString()}`;

export function TransactionsChart({ chartdata }: chartdataProps) {
    return (
        <LineChart
            className="h-80"
            data={chartdata.data}
            index="date"
            categories={chartdata.categories}
            colors={['red', 'indigo',]}
            valueFormatter={dataFormatter}
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
        />
    );
}