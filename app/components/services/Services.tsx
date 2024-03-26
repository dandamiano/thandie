
import { getServices } from "@/app/actions/services";
import ServicesList from "./ServicesList";

type serviceProps = {
    services: {
        _id: string;
        name: string;
        price: string;
        list: string[];
    }[];
}


const ServicesComponent = async () => {
    const services: serviceProps = await getServices();


    return (

        <ServicesList services={services.services} />

    );
}

export default ServicesComponent;