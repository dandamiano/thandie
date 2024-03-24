
import { getServices } from "@/app/actions/services";
import ServicesAdminList from "@/app/components/services/AdminServicesList";

type serviceProps = {
    services: {
        id: string;
        name: string;
        price: string;
        list: string[];
    }[];
}


const ServicesAdmin = async () => {
    const services: serviceProps = await getServices();
    return (
        <ServicesAdminList services={services.services} />
    )
}

export default ServicesAdmin;