"use client"
import { TransactionsChart } from "@/app/components/Charts/TransactionsChart";


const transactionsData = {
    data: [
        {
            date: 'Jan',
            'Claims': 2,
            'Subscriptions': 2,
        },
        {
            date: 'Feb',
            'Claims': 0,
            'Subscriptions': 4,
        },
        {
            date: 'Mar',
            'Claims': 0,
            'Subscriptions': 4
        },
        {
            date: 'Apr',
            'Claims': 1,
            'Subscriptions': 2,
        },
        {
            date: 'May',
            'Claims': 0,
            'Subscriptions': 2
        },
        {
            date: 'Jun',
            'Claims': 5,
            'Subscriptions': 5
        },
    ],
    categories: ['Claims', 'Subscriptions']
}
const ClientTransChart = () => {
    return (<TransactionsChart chartdata={transactionsData} />);
}

export default ClientTransChart;