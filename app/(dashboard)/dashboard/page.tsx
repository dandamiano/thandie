import GridStats from "@/app/components/Stats/TopStats";
import { BsArchive, BsCreditCard, BsFolder2Open } from "react-icons/bs";
import { getStats } from "@/app/actions/action";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import ClientTransChart from "../components/ClientTransChart";
import PaymentsGraph from "../components/Payments";

type statsType = {
    stats: {
        claims: string;
        subscriptions: string;
        payments: string;
    }
};

async function Dashboard() {
    const session = await getServerSession(options);
    if (!session) { return }
    const res: statsType = await getStats(session.user.id)
    const stats = res.stats;
    console.log(stats)
    const statsData = [
        { link: '/claims', label: 'Claims', value: stats.claims, icon: <BsArchive color={'orange'} size={50} />, positive: false },
        { link: '/subscriptions', label: 'Subscriptions', value: stats.subscriptions, icon: <BsFolder2Open color={'orange'} size={50} />, positive: false },
        { link: '', label: 'Payments', value: `K${stats.payments}`, icon: <BsCreditCard color={'orange'} size={50} />, positive: false },
    ]

    return (
        <div className="w-full h-full flex flex-col space-y-10">
            <h1 className="text-lg text-primary-500 font-bold">Dashboard</h1>
            <div className="w-full flex  justify-around">
                {statsData.map((stat, index) => (
                    <GridStats key={index} {...stat} />
                ))}
            </div>
            <h1 className="text-xl text-primary-500">Your Transactions</h1>
            <ClientTransChart />

            <h1 className="text-xl text-primary-500">Your Payments</h1>
            <PaymentsGraph />

        </div>
    )
}
export default Dashboard;