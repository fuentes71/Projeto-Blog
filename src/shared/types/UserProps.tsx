import { address } from "./addressType";
import { company } from "./companyType";

export interface UserProps extends address, company {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address?: address;
    company?: company;
}
