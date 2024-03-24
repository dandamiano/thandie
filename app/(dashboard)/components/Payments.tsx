"use client"
import { PaymentsChart } from "@/app/components/Charts/PaymentsChart";

const paymentsData = {
    data: [
        {
            date: 'Jan',
            'Payments (Kwacha)': 45000,
        },
        {
            date: 'Feb',
            'Payments (Kwacha)': 80000,
        },
        {
            date: 'Mar',
            'Payments (Kwacha)': 80000,
        },
        {
            date: 'Apr',
            'Payments (Kwacha)': 45000,
        },
        {
            date: 'May',
            'Payments (Kwacha)': 45000,
        },
        {
            date: 'Jun',
            'Payments (Kwacha)': 80000,
        },
    ],
    categories: ['Payments (Kwacha)']
}

const PaymentsGraph = () => {
    return (
        <PaymentsChart chartdata={paymentsData} />
    );
}

export default PaymentsGraph;