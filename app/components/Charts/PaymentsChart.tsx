import { LineChart } from '@tremor/react';

type chartdataProps = {
    chartdata: {
        data: {
            date: string;
            'Payments (Kwacha)': number;
        }[];
        categories: string[];
    }
}


const dataFormatter = (number: number) => `K${Intl.NumberFormat('us').format(number).toString()}`;

export function PaymentsChart({ chartdata }: chartdataProps) {
    return (
        <LineChart
            className="h-80"
            data={chartdata.data}
            index="date"
            categories={chartdata.categories}
            colors={['orange']}
            valueFormatter={dataFormatter}
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
        />
    );
}